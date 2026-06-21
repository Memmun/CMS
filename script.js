let currentUser = null;

const categorias = [
  { id:'personal',    nombre:'Memoria personal',          color:'var(--caqui)' },
  { id:'aldeas',      nombre:'Historia de las aldeas',     color:'var(--ocre)' },
  { id:'verdad',      nombre:'Verdad sobre Memun',         color:'var(--violeta)' },
  { id:'resistencia', nombre:'Resistencia',                 color:'var(--rojo)' },
  { id:'conexion',    nombre:'Conexión entre personajes',  color:'var(--amber)' },
];

const contenido = [
  { id:'ng1', tipo:'novela', titulo:'Capítulo 1 — El despertar', categoria:'personal', peso:1, completado:false },
  { id:'ng2', tipo:'novela', titulo:'Capítulo 2 — La aldea ausente', categoria:'aldeas', peso:1, completado:false },
  { id:'ng3', tipo:'novela', titulo:'Capítulo 3 — Visiones de Memun', categoria:'verdad', peso:1, completado:false },
  { id:'ng4', tipo:'novela', titulo:'Capítulo 4 — El primer recuerdo', categoria:'personal', peso:1, completado:false },

  { id:'vj1', tipo:'juego', titulo:'Misión — Cruzar el umbral', categoria:'resistencia', peso:1, completado:false },
  { id:'vj2', tipo:'juego', titulo:'Misión — El pacto olvidado', categoria:'verdad', peso:1, completado:false },
  { id:'vj3', tipo:'juego', titulo:'Misión — Reencuentro', categoria:'conexion', peso:1, completado:false },

  { id:'wk1', tipo:'wiki', titulo:'Entrada — Aldea de Cinder', categoria:'aldeas', peso:1, completado:false },
  { id:'wk2', tipo:'wiki', titulo:'Entrada — Los Emirec', categoria:'conexion', peso:1, completado:false },
  { id:'wk3', tipo:'wiki', titulo:'Entrada — Resistencia del Norte', categoria:'resistencia', peso:1, completado:false },
];

const tipoLabels = {
  novela: { tag:'Novelas Gráficas', titulo:'Cómics oficiales', unidad:'fragmentos leídos', meta:'meta-novela' },
  juego:  { tag:'Videojuego', titulo:'Experiencia interactiva', unidad:'misiones completadas', meta:'meta-juego' },
  wiki:   { tag:'Wikimemun', titulo:'Historia oficial', unidad:'entradas consultadas', meta:'meta-wiki' },
};

function handleLogin(){
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('login-error');
  if(!user || !pass){ errorEl.textContent = 'Ingresá usuario y contraseña para continuar.'; return; }
  errorEl.textContent = '';
  currentUser = { name: user.toUpperCase() };
  document.getElementById('display-name').textContent = currentUser.name;
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-screen').style.display = 'block';
  renderAll();
  showToast('Sesión iniciada como ' + currentUser.name);
}

function handleLogout(){
  currentUser = null;
  document.getElementById('account-dropdown').classList.remove('show');
  document.getElementById('app-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function toggleAccountMenu(e){
  e.stopPropagation();
  const dd = document.getElementById('account-dropdown');
  dd.classList.toggle('show');
  document.getElementById('account-chip').classList.toggle('open');
}
document.addEventListener('click', () => {
  document.getElementById('account-dropdown').classList.remove('show');
  document.getElementById('account-chip').classList.remove('open');
});

const SECTIONS = ['dashboard','video-demo','visados','afiches','app','instagram'];

function goSection(name){
  if(!SECTIONS.includes(name)) return;
  document.querySelectorAll('.nav-item, .mobile-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('[data-section="'+name+'"]').forEach(el => el.classList.add('active'));
  SECTIONS.forEach(s=>{
    document.getElementById('section-'+s).classList.toggle('hidden', s !== name);
  });
}

function openExternal(url){
  window.open(url, '_blank', 'noopener,noreferrer');
}

function showComingSoon(msg){
  showToast(msg || 'Contenido próximamente disponible.');
}

let activeModalTipo = null;
function openModule(tipo){
  activeModalTipo = tipo;
  const info = tipoLabels[tipo];
  document.getElementById('modal-tag').textContent = info.tag;
  document.getElementById('modal-title').textContent = info.titulo;
  const items = contenido.filter(c => c.tipo === tipo);
  const list = document.getElementById('modal-items');
  list.innerHTML = '';
  items.forEach(item => {
    const cat = categorias.find(c => c.id === item.categoria);
    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
      <div class="item-info">
        <div class="item-title">${item.titulo}</div>
        <div class="item-cat">${cat.nombre}</div>
      </div>
      <div class="toggle ${item.completado ? 'on' : ''}" onclick="toggleItem('${item.id}')">
        <div class="toggle-knob"></div>
      </div>
    `;
    list.appendChild(row);
  });
  document.getElementById('modal-overlay').classList.add('show');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('show'); }

function toggleItem(id){
  const item = contenido.find(c => c.id === id);
  item.completado = !item.completado;
  openModule(activeModalTipo);
  renderAll();
  showToast(item.completado ? 'Marcado como completado' : 'Marcado como pendiente');
}

function calcularProgreso(){
  return categorias.map(cat => {
    const items = contenido.filter(c => c.categoria === cat.id);
    const total = items.reduce((sum, i) => sum + i.peso, 0);
    const hecho = items.reduce((sum, i) => sum + (i.completado ? i.peso : 0), 0);
    const pct = total > 0 ? Math.round((hecho / total) * 100) : 0;
    return { ...cat, pct };
  });
}

function renderProgress(){
  const data = calcularProgreso();
  const totalPct = Math.round(data.reduce((s,c) => s + c.pct, 0) / data.length);
  document.getElementById('total-pct').textContent = totalPct + '%';
  document.getElementById('total-fill').style.width = totalPct + '%';

  const verdad = data.find(c => c.id === 'verdad');
  const personal = data.find(c => c.id === 'personal');
  document.getElementById('pct-verdad').textContent = verdad.pct + '%';
  document.getElementById('fill-verdad').style.width = verdad.pct + '%';
  document.getElementById('pct-personal').textContent = personal.pct + '%';
  document.getElementById('fill-personal').style.width = personal.pct + '%';
}

function renderModuleMeta(){
  ['novela','juego','wiki'].forEach(tipo => {
    const items = contenido.filter(c => c.tipo === tipo);
    const done = items.filter(c => c.completado).length;
    document.getElementById(tipoLabels[tipo].meta).textContent =
      `${done} / ${items.length} ${tipoLabels[tipo].unidad}`;
  });
}

function renderAll(){ renderProgress(); renderModuleMeta(); }

let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if(e.target.id === 'modal-overlay') closeModal();
});
document.getElementById('password').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') handleLogin();
});