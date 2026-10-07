'use strict';
const $ = id => document.getElementById(id);
const labels = {pendiente: 'Pendiente', revisada: 'Revisada', observaciones: 'Con observaciones', blanco: 'En blanco'};
const state = {rows: [], review: null, token: '', current: 1, sequence: 0, chain: Promise.resolve(true), drafts: {}, timer: null, zoom: 1, rotation: 0, contrast: false, textSize: 20, fit: 1, ready: false};
const image = $('photo');
let draftKey, settingsKey, settings = {};
function stored(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function remember(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* El registro principal se guarda en el proyecto. */ } }
function notice(message, retry = false) {
  $('notice').hidden = !message;
  $('notice').classList.toggle('error', retry);
  $('noticeText').textContent = message || '';
  $('retryButton').hidden = !retry;
}
function saving(message, error = false) {
  $('saveStatus').textContent = message;
  $('saveStatus').classList.toggle('error', error);
  $('dialogSaveStatus').textContent = message;
  $('dialogSaveStatus').classList.toggle('error', error);
}
async function request(path, patch) {
  const response = await fetch(path, patch ? {method: 'POST', headers: {'Content-Type': 'application/json', 'X-Visor-Token': state.token}, body: JSON.stringify(patch)} : {});
  let data;
  try { data = await response.json(); } catch { throw new Error('No se pudo leer la respuesta. Comprueba que la ventana del visor siga abierta.'); }
  if (!response.ok) {const error = new Error(data.error || 'No se pudo completar la operación. Vuelve a intentarlo.');error.code = response.status;throw error;}
  return data;
}
function row(n = state.current) { return state.rows.find(p => p.number === n); }
function review(n = state.current) { return state.drafts[n] || state.review?.pages[String(n)] || {status: 'pendiente', notes: '', version: 0}; }
function statusFor(p) { return p.kind === 'blanco' ? 'blanco' : review(p.number).status; }
function saveLocalDrafts() { remember(draftKey, state.drafts); }
function renderStatus() {
  const p = row(); if (!p) return;
  const status = statusFor(p);
  $('pageStatus').textContent = labels[status];
  $('pageStatus').className = 'status ' + status;
  const unavailable = p.kind === 'blanco' || p.kind === 'incompleta';
  $('markReviewed').disabled = unavailable;
  $('reviewButton').disabled = p.kind === 'blanco';
  $('markReviewed').textContent = status === 'revisada' ? '↶ Dejar pendiente' : '✓ Marcar revisada';
  $('reviewPage').textContent = 'PÁGINA ' + p.number;
  $('reviewStatus').value = review().status;
  if (document.activeElement !== $('reviewNotes')) $('reviewNotes').value = review().notes;
  const total = state.rows.filter(p => p.kind !== 'blanco').length;
  const count = Object.values(state.review.pages).filter(x => x.status === 'revisada').length;
  $('progress').max = total; $('progress').value = count;
  $('progressLabel').textContent = `${count} de ${total} revisadas`;
  if ($('pagesDialog').open) renderPageList();
}
function queue(task) {
  state.chain = state.chain.then(task, task);
  return state.chain;
}
function saveDraft(n) {
  return queue(async () => {
    const draft = state.drafts[n]; if (!draft) return true;
    const snapshot = {...draft};
    saving('Guardando revisión…');
    try {
      const saved = await request('/api/revision', {page: Number(n), status: snapshot.status, notes: snapshot.notes, expected_version: snapshot.base_version});
      state.review = saved;
      if (state.drafts[n]?.id === snapshot.id) delete state.drafts[n];
      else if (state.drafts[n]) state.drafts[n].base_version = saved.pages[String(n)].version;
      saveLocalDrafts(); renderStatus();
      saving(Object.keys(state.drafts).length ? 'Hay observaciones por guardar…' : 'Revisión guardada en el proyecto');
      if (!Object.keys(state.drafts).length) notice('');
      if (Number(n) === state.current) $('conflictTools').hidden = true;
      return true;
    } catch (error) {
      saving('No se pudo guardar; la observación se conserva en este navegador.', true);
      notice(error.message || 'No se pudo guardar. Comprueba que el visor siga abierto y reintenta.', true);
      if (error.code === 409 && Number(n) === state.current) { $('conflictTools').hidden = false; if (!$('reviewDialog').open) $('reviewDialog').showModal(); }
      return false;
    }
  });
}
function changeReview(status, notes) {
  const n = state.current;
  const existing = state.drafts[n];
  state.drafts[n] = {status, notes, base_version: existing?.base_version ?? (review(n).version || 0), id: Date.now() + Math.random()};
  saveLocalDrafts(); renderStatus(); saving('Cambios pendientes de guardar…');
  clearTimeout(state.timer);
  state.timer = setTimeout(() => saveDraft(n), 600);
}
async function flushDrafts() {
  clearTimeout(state.timer);
  await state.chain;
  for (const n of Object.keys(state.drafts)) if (!await saveDraft(n)) return false;
  return true;
}
function savePosition(n) {
  return queue(async () => {
    try {
      state.review = await request('/api/revision', {last_page: n});
      renderStatus();
      if (!Object.keys(state.drafts).length) saving('Última página guardada · ' + n);
      return true;
    } catch {
      saving('No se pudo recordar la última página. El texto sigue disponible.', true);
      notice('No se pudo guardar el avance. Comprueba que la ventana del visor siga abierta y pulsa Reintentar.', true);
      return false;
    }
  });
}
function html(markdown) {
  return DOMPurify.sanitize(marked.parse(markdown, {gfm: true, breaks: false}), {USE_PROFILES: {html: true}, FORBID_TAGS: ['img', 'style', 'form', 'input', 'button', 'iframe']});
}
function emptyPhoto(title, text, symbol = '—') {
  $('photoStage').hidden = true; image.hidden = true;
  const box = $('photoEmpty'); box.replaceChildren(); box.hidden = false;
  for (const [tag, content, cls] of [['span', symbol, 'empty-symbol'], ['h3', title, ''], ['p', text, '']]) {
    const element = document.createElement(tag); element.textContent = content; element.className = cls; box.append(element);
  }
  for (const id of ['zoomIn','zoomOut','fitPhoto','rotatePhoto','contrastPhoto']) $(id).disabled = true;
  $('zoomLevel').textContent = '—';
}
async function goTo(n, force = false, recovering = false) {
  if (!state.ready || !Number.isInteger(n) || !row(n)) { if (state.ready) notice('Elige un número entre 1 y ' + state.rows.length + '.'); return; }
  if (!force && n === state.current) return;
  if (!recovering && !await flushDrafts()) return;
  const sequence = ++state.sequence;
  state.current = n;
  $('pageNumber').value = n;
  $('sectionName').textContent = row(n).section;
  $('previous').disabled = n === 1; $('next').disabled = n === state.rows.length;
  $('transcriptionNotes').open = false; $('transcriptionNotes').hidden = true;
  $('conflictTools').hidden = true;
  $('texto').className = 'book-text';
  $('texto').innerHTML = '<p class="loading">Cargando la transcripción…</p>';
  $('sourceName').textContent = '';
  $('textScroll').scrollTop = 0; $('photoScroll').scrollTo(0, 0);
  image.hidden = true; image.removeAttribute('src'); image.onload = null;
  for (const id of ['zoomIn','zoomOut','fitPhoto','rotatePhoto','contrastPhoto']) $(id).disabled = true;
  $('photoStage').hidden = true; $('photoEmpty').hidden = true;
  state.zoom = 1; state.rotation = 0; state.contrast = false;
  $('contrastPhoto').setAttribute('aria-pressed', 'false');
  renderStatus();
  const p = row(n);
  if (!p.photo) {
    emptyPhoto(p.kind === 'blanco' ? 'Página en blanco' : 'Sin fotografía', p.kind === 'blanco' ? 'El propietario confirmó este blanco. Se conserva su lugar en la numeración del libro.' : 'El título de la página 373 fue descrito por el propietario: «indice», centrado vertical y horizontalmente. Su tipografía queda por comprobar.');
    $('photoName').textContent = 'Según descripción del propietario';
  } else {
    $('photoName').textContent = 'pagina ' + String(n).padStart(2,'0') + '.jpeg';
    image.alt = 'Fotografía original de la página ' + n;
    image.onload = () => {
      if (sequence !== state.sequence) return;
      image.hidden = false; $('photoStage').hidden = false;
      for (const id of ['zoomIn','zoomOut','fitPhoto','rotatePhoto','contrastPhoto']) $(id).disabled = false;
      fitImage();
    };
    image.onerror = () => { if (sequence === state.sequence) emptyPhoto('No se pudo abrir la fotografía', 'Comprueba que el archivo esté en su carpeta y pulsa Ir para volver a cargar esta página.'); };
    image.src = '/foto/' + n;
  }
  try {
    const data = await request('/api/pagina/' + n);
    if (sequence !== state.sequence) return;
    if (p.kind === 'blanco') {
      $('texto').innerHTML = '<div class="blank-text"><h1>Página en blanco</h1><p>Este espacio pertenece al libro original.</p></div>';
      $('sourceName').textContent = 'Blanco confirmado por el propietario · 7 de octubre de 2026';
    } else if (p.kind === 'descripcion') {
      $('texto').innerHTML = '<div class="human-title">' + html(data.body) + '</div><p class="description-note">Contenido registrado según la descripción del propietario. No se dispone de fotografía de esta página.</p>';
    } else $('texto').innerHTML = html(data.body) || '<p>No hay transcripción disponible para esta página.</p>';
    if (data.notes) { $('sourceNotes').innerHTML = html(data.notes); $('transcriptionNotes').hidden = false; }
    if (data.source) $('sourceName').textContent = data.source;
    document.title = `Página ${n} · Cuaderno de cotejo`;
    history.replaceState(null, '', '?pagina=' + n);
    await savePosition(n);
  } catch (error) {
    if (sequence !== state.sequence) return;
    $('texto').textContent = 'No se pudo cargar esta página. Tu registro de revisión se conserva.';
    notice(error.message || 'Comprueba que el visor siga abierto y reintenta.', true);
  }
}
function fitImage() {
  if (image.hidden || !image.naturalWidth) return;
  const rotated = state.rotation % 180 !== 0;
  const w = rotated ? image.naturalHeight : image.naturalWidth;
  const h = rotated ? image.naturalWidth : image.naturalHeight;
  state.fit = Math.max(.05, Math.min(($('photoScroll').clientWidth - 38) / w, ($('photoScroll').clientHeight - 44) / h));
  drawImage();
}
function drawImage() {
  if (image.hidden) return;
  const scale = state.fit * state.zoom;
  const w = image.naturalWidth * scale, h = image.naturalHeight * scale;
  const rotated = state.rotation % 180 !== 0;
  $('photoStage').style.width = (rotated ? h : w) + 'px';
  $('photoStage').style.height = (rotated ? w : h) + 'px';
  image.style.width = w + 'px'; image.style.height = h + 'px';
  image.style.transform = `translate(-50%, -50%) rotate(${state.rotation}deg)`;
  image.style.filter = state.contrast ? 'contrast(1.5) grayscale(1)' : 'none';
  $('zoomLevel').textContent = Math.round(state.zoom * 100) + '%';
  $('photoScroll').classList.toggle('pannable', state.zoom > 1);
  $('zoomOut').disabled = state.zoom <= .5;
  $('zoomIn').disabled = state.zoom >= 6;
}
function zoomImage(factor, point) {
  if (image.hidden) return;
  const area = $('photoScroll');
  const x = point?.x ?? area.clientWidth / 2, y = point?.y ?? area.clientHeight / 2;
  const old = state.zoom;
  state.zoom = Math.max(.5, Math.min(6, state.zoom * factor));
  drawImage();
  const ratio = state.zoom / old;
  area.scrollLeft = (area.scrollLeft + x) * ratio - x;
  area.scrollTop = (area.scrollTop + y) * ratio - y;
}
function renderPageList() {
  const needle = $('pageSearch').value.trim().toLocaleLowerCase('es');
  const filter = $('statusFilter').value;
  const list = $('pageList'); list.replaceChildren(); let section = null;
  for (const p of state.rows) {
    const status = statusFor(p);
    if (filter !== 'todas' && status !== filter) continue;
    if (needle && !(`${p.number} ${p.section}`.toLocaleLowerCase('es').includes(needle))) continue;
    if (section !== p.section) { const heading = document.createElement('div'); heading.className = 'page-group'; heading.textContent = p.section; list.append(heading); section = p.section; }
    const button = document.createElement('button'); button.className = 'page-row'; button.type = 'button';
    if (p.number === state.current) button.setAttribute('aria-current','page');
    const name = document.createElement('span'); name.textContent = 'Página ' + p.number;
    if (p.kind === 'descripcion') { const detail = document.createElement('small'); detail.textContent = ' · sin fotografía'; name.append(detail); }
    const badge = document.createElement('span'); badge.className = 'status ' + status; badge.textContent = labels[status];
    button.append(name,badge); button.addEventListener('click', () => { $('pagesDialog').close(); goTo(p.number); }); list.append(button);
  }
  if (!list.childElementCount) { const message = document.createElement('p'); message.textContent = 'No hay páginas que coincidan. Prueba otro número o filtro.'; message.className = 'drawer-hint'; list.append(message); }
}
function adjustDivider(value) {
  const clamped = Math.round(Math.max(25,Math.min(75,value)));
  document.documentElement.style.setProperty('--left',clamped + '%');
  $('divider').setAttribute('aria-valuenow',String(clamped)); settings.split = clamped; remember(settingsKey,settings); fitImage();
}
function adjustText(delta) {
  state.textSize = Math.max(16,Math.min(30,state.textSize + delta));
  document.documentElement.style.setProperty('--text-size',state.textSize + 'px'); settings.textSize = state.textSize; remember(settingsKey,settings);
  $('smallerText').disabled = state.textSize <= 16; $('largerText').disabled = state.textSize >= 30;
}
$('pageForm').addEventListener('submit',event => {event.preventDefault();goTo(Number($('pageNumber').value),true);});
$('previous').addEventListener('click',()=>goTo(state.current-1)); $('next').addEventListener('click',()=>goTo(state.current+1));
$('pagesButton').addEventListener('click',()=>{if(!state.ready)return;renderPageList();$('pagesDialog').showModal();});
$('pageSearch').addEventListener('input',renderPageList); $('statusFilter').addEventListener('change',renderPageList);
$('reviewButton').addEventListener('click',()=>{if(!state.ready)return;renderStatus();$('reviewDialog').showModal();});
$('helpButton').addEventListener('click',()=>$('helpDialog').showModal());
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click',()=>$(button.dataset.close).close()));
$('markReviewed').addEventListener('click',()=>{changeReview(review().status==='revisada'?'pendiente':'revisada',review().notes);clearTimeout(state.timer);saveDraft(state.current);});
$('reviewStatus').addEventListener('change',()=>changeReview($('reviewStatus').value,$('reviewNotes').value));
$('reviewNotes').addEventListener('input',()=>{const notes=$('reviewNotes').value;const status=notes.trim()?'observaciones':$('reviewStatus').value;changeReview(status,notes);});
$('saveReview').addEventListener('click',flushDrafts);
$('downloadDraft').addEventListener('click',()=>{
  const value=review();const blob=new Blob([`Página ${state.current}\nEstado: ${labels[value.status]}\n\n${value.notes}\n`],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`observacion-pagina-${state.current}.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
$('reloadSaved').addEventListener('click',async()=>{
  if(!confirm('Se recuperará la revisión guardada y se retirará el borrador de esta página. Descárgalo primero si quieres conservarlo. ¿Continuar?'))return;
  clearTimeout(state.timer);await state.chain;
  try{const data=await request('/api/catalogo');remember(draftKey+'-respaldo',state.drafts);delete state.drafts[state.current];saveLocalDrafts();state.review=data.review;state.token=data.token;$('conflictTools').hidden=true;renderStatus();notice('');saving('Revisión guardada recuperada.');}catch(error){notice(error.message,true);}
});
$('retryButton').addEventListener('click',async()=>{
  if(!state.ready)return boot();
  try{
    const data=await request('/api/catalogo');state.token=data.token;state.review=data.review;
    for(const [n,draft]of Object.entries(state.drafts)){const saved=state.review.pages[n];if(saved&&saved.status===draft.status&&saved.notes===draft.notes&&saved.version>draft.base_version)delete state.drafts[n];}
    saveLocalDrafts();renderStatus();
    if(await flushDrafts())await goTo(state.current,true);
  }catch(error){notice(error.message||'El visor todavía no está disponible. Vuelve a abrirlo y reintenta.',true);}
});
$('smallerText').addEventListener('click',()=>adjustText(-1)); $('largerText').addEventListener('click',()=>adjustText(1));
$('zoomIn').addEventListener('click',()=>zoomImage(1.25)); $('zoomOut').addEventListener('click',()=>zoomImage(.8));
$('fitPhoto').addEventListener('click',()=>{state.zoom=1;fitImage();$('photoScroll').scrollTo(0,0);});
$('rotatePhoto').addEventListener('click',()=>{state.rotation=(state.rotation+90)%360;fitImage();});
$('contrastPhoto').addEventListener('click',()=>{state.contrast=!state.contrast;$('contrastPhoto').setAttribute('aria-pressed',String(state.contrast));drawImage();});
$('photoScroll').addEventListener('wheel',event=>{if(!event.ctrlKey||image.hidden)return;event.preventDefault();const box=$('photoScroll').getBoundingClientRect();zoomImage(event.deltaY<0?1.12:1/1.12,{x:event.clientX-box.left,y:event.clientY-box.top});},{passive:false});
let pan = null;
$('photoScroll').addEventListener('pointerdown',event=>{if(event.button!==0||state.zoom<=1||image.hidden)return;pan={x:event.clientX,y:event.clientY,left:$('photoScroll').scrollLeft,top:$('photoScroll').scrollTop};$('photoScroll').setPointerCapture(event.pointerId);$('photoScroll').classList.add('dragging');});
$('photoScroll').addEventListener('pointermove',event=>{if(!pan)return;$('photoScroll').scrollLeft=pan.left-event.clientX+pan.x;$('photoScroll').scrollTop=pan.top-event.clientY+pan.y;});
for(const name of ['pointerup','pointercancel','lostpointercapture'])$('photoScroll').addEventListener(name,()=>{pan=null;$('photoScroll').classList.remove('dragging');});
let dividing=false;
$('divider').addEventListener('pointerdown',event=>{dividing=true;$('divider').setPointerCapture(event.pointerId);});
$('divider').addEventListener('pointermove',event=>{if(!dividing)return;const box=$('comparison').getBoundingClientRect();adjustDivider((event.clientX-box.left)/box.width*100);});
for(const name of ['pointerup','pointercancel'])$('divider').addEventListener(name,()=>{dividing=false;});
$('divider').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();adjustDivider(Number($('divider').getAttribute('aria-valuenow'))+(event.key==='ArrowLeft'?-2:2));});
document.addEventListener('keydown',event=>{if(!state.ready||event.ctrlKey||event.altKey||event.metaKey||event.defaultPrevented||document.querySelector('dialog[open]')||event.target.closest('input,textarea,select,[role=separator]'))return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();goTo(state.current+(event.key==='ArrowLeft'?-1:1));}});
window.addEventListener('resize',fitImage);
window.addEventListener('beforeunload',event=>{if(Object.keys(state.drafts).length){saveLocalDrafts();event.preventDefault();event.returnValue='';}});
async function boot() {
  try {
    const data=await request('/api/catalogo');
    state.rows=data.pages;state.review=data.review;state.token=data.token;
    draftKey='cotejo-borradores-'+data.review.book;settingsKey='cotejo-preferencias-'+data.review.book;
    const drafts=stored(draftKey,{});
    state.drafts={};
    if(drafts&&typeof drafts==='object')for(const [n,draft]of Object.entries(drafts))if(row(Number(n))&&row(Number(n)).kind!=='blanco'&&draft&&labels[draft.status]&&typeof draft.notes==='string'&&Number.isInteger(draft.base_version))state.drafts[n]=draft;
    settings=stored(settingsKey,{})||{};
    if(Number.isFinite(settings.textSize))state.textSize=Math.max(16,Math.min(30,settings.textSize));
    adjustText(0);if(Number.isFinite(settings.split))adjustDivider(settings.split);
    $('pageNumber').max=state.rows.length;$('pageTotal').textContent='/ '+state.rows.length;
    state.ready=true;
    const candidate=Number(new URLSearchParams(location.search).get('pagina'));
    const n=row(candidate)?candidate:state.review.last_page;
    if(Object.keys(state.drafts).length){
      await goTo(Number(Object.keys(state.drafts)[0]),true,true);
      $('reviewDialog').showModal();
      notice('Recuperamos una observación que no se había guardado. Pulsa Guardar ahora; si cambió en otra ventana, copia el texto antes de recargar.',true);
      saving('Observación recuperada de este navegador.',true);
    }else{notice('');await goTo(n,true);}
  }catch(error){saving('No se pudo abrir el libro.',true);notice(error.message||'Comprueba que el visor siga abierto y pulsa Reintentar.',true);}
}
boot();
