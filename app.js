'use strict';

const icons = {
  home: '<path d="m3 10 9-7 9 7M5 9v11h5v-6h4v6h5V9"/>',
  game: '<path d="M7 7h10c3 0 4 3 5 8s-2 5-4 3l-3-3H9l-3 3c-2 2-5 2-4-3s2-8 5-8Z"/><path d="M7 9v5m-2.5-2.5h5m6.5-1h.01m2.5 2h.01"/>',
  tool: '<path d="M14 7a5 5 0 0 1 6-5l-3 3 2 2 3-3a5 5 0 0 1-6 6L7 21a2 2 0 0 1-3-3l10-11Z"/>',
  book: '<path d="M12 6v15m0-15C9 3 5 3 2 4v14c4-1 7 0 10 3 3-3 6-4 10-3V4c-3-1-7-1-10 2Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  search: '<circle cx="10.7" cy="10.7" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  filter: '<path d="M3 6h18M6 12h12m-9 6h6"/><circle cx="7" cy="6" r="1"/><circle cx="15" cy="12" r="1"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  grid: '<rect x="3.5" y="3.5" width="6" height="6" rx="1"/><rect x="14.5" y="3.5" width="6" height="6" rx="1"/><rect x="3.5" y="14.5" width="6" height="6" rx="1"/><rect x="14.5" y="14.5" width="6" height="6" rx="1"/>',
  list: '<path d="M8 5h12M8 12h12M8 19h12M4 5h.01M4 12h.01M4 19h.01"/>',
  sort: '<path d="M7 20V4m-4 4 4-4 4 4m6-4v16m-4-4 4 4 4-4"/>',
  gauge: '<path d="M3 17a9 9 0 1 1 18 0M12 15l4-5M5 17h14"/>',
  console: '<rect x="2" y="5" width="20" height="14" rx="3"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M5 11v2m14-2h.01m0 3h.01"/>',
  engine: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5m-9 5L3 7m9 5v10"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  tag: '<path d="M20 4h-8L3 13l8 8 9-9V4Zm-4 4h.01"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  flask: '<path d="M9 3h6m-5 0v6l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3M7 14h10"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>'
};

const icon = name => '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const normalized = value => String(value).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const el = id => document.getElementById(id);
const groups = [
  { key: 'consolas', title: 'Por consola', icon: 'console', defaults: ['R36S', 'R36 Max'] },
  { key: 'motor', title: 'Por motor', icon: 'engine', defaults: ['Unity', 'GameMaker', 'Godot', 'Otros'] },
  { key: 'estado', title: 'Estado', icon: 'layers', defaults: ['Jugable', 'Disponible', 'En pruebas', 'En desarrollo'] }
];
const states = {
  'Jugable': { style: 'available', icon: 'check' },
  'Disponible': { style: 'available', icon: 'check' },
  'En pruebas': { style: 'testing', icon: 'flask' },
  'Próximamente': { style: 'upcoming', icon: 'clock' },
  'En desarrollo': { style: 'dev', icon: 'tool' }
};
const pages = {
  tutoriales: {
    title: 'Tutoriales',
    html: '<p>Antes de instalar un port, abre su ficha y revisa las consolas compatibles.</p><ol><li>Descarga el archivo desde la ficha y lee las instrucciones del proyecto.</li><li>Comprueba si requiere archivos de una copia del juego o una versión concreta del sistema.</li><li>Conserva una copia de seguridad de la tarjeta SD y sigue la ruta de instalación indicada en la ficha o el repositorio.</li></ol><a class="button" href="#ports">Ver catálogo ' + icon('arrow') + '</a>'
  },
  info: {
    title: 'Acerca de Ports by Dani',
    html: '<p>Ports y adaptadores para R36S y R36 Max compatibles con ArkOSClone y dArkOSClone.</p><p>Consulta cada ficha para conocer los requisitos, los controles y el rendimiento del port.</p><a class="button" href="#inicio">Volver al inicio ' + icon('arrow') + '</a>'
  }
};

let section = 'inicio';

function projectUrl(value) {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) {
    try { return new URL(value).href; } catch { return ''; }
  }
  return /^(?:\.\/)?(?:assets|descargas)\/[a-z0-9_.%/ -]+$/i.test(value) && !value.includes('..') ? value : '';
}

function tags(project) {
  const state = states[project.estado] || {style: 'dev', icon: 'info'};
  const fps = project.fps;
  const fpsLabel = fps
    ? (fps.estable ? fps.rango + ' FPS estables' : '≈' + fps.rango + ' FPS')
    : 'FPS sin medición';
  const fpsContext = fps?.contexto || 'Todavía no hay una medición publicada para este port.';
  return {
    console: project.consolas.length ? '<span class="tag">' + icon('console') + escape(project.consolas.join(' / ')) + '</span>' : '',
    engine: project.motor ? '<span class="tag engine">' + icon('engine') + escape(project.motor) + '</span>' : '',
    fps: project.estado === 'Próximamente' && !fps ? '' : '<span class="tag fps' + (fps ? '' : ' unmeasured') + '" title="' + escape(fpsContext) + '">' +
      icon('gauge') + escape(fpsLabel) + '</span>',
    status: project.estado ? '<span class="status ' + state.style + '">' + icon(state.icon) + escape(project.estado) + '</span>' : '',
    version: project.version ? '<span class="version">' + icon('tag') + 'v' + escape(project.version) + '</span>' : ''
  };
}

function coverUrl(project) {
  return projectUrl(project.imagen);
}

function card(project) {
  const badges = tags(project);
  const image = coverUrl(project);
  const open = ' data-project="' + escape(project.id) + '"';
  const sample = project.ejemplo ? '<span class="sample">EJEMPLO</span>' : '';
  return '<article class="card" data-color="' + escape(project.color) + '">' +
    '<div class="cover' + (project.estado === 'Próximamente' ? ' upcoming' : '') + '">' +
      sample + (image ? '<img src="' + escape(image) + '" alt="">' : icon(project.estado === 'Próximamente' ? 'clock' : 'game')) + '</div>' +
    '<div class="card-body"><h3><button type="button"' + open + '>' + escape(project.titulo) + '</button></h3>' +
    '<div class="tags">' + badges.console + badges.engine + badges.fps + '</div>' +
    '<div class="card-meta">' + badges.version + badges.status +
    '<button type="button" class="card-cta" aria-label="Ver ficha de ' + escape(project.titulo) + '"' + open + '>' + icon('arrow') + '</button></div></div></article>';
}

function makeFilters() {
  const upcoming = section === 'proximamente';
  const filterProjects = PROYECTOS.filter(project => (project.estado === 'Próximamente') === upcoming);
  el('filters').innerHTML = groups.map(group => {
    const defaults = upcoming && group.key === 'estado' ? [] : group.defaults;
    const values = new Set([...defaults, ...filterProjects.flatMap(project => project[group.key] || [])]);
    if (upcoming && group.key === 'motor' && !filterProjects.some(project => project.motor)) return '';
    return '<details open class="filter-group"><summary><span data-icon="' + group.icon + '"></span>' +
      group.title + '<span class="chevron" data-icon="chevron"></span></summary><div class="filter-options">' +
      [...values].map(value => '<label><input type="checkbox" name="' + group.key + '" value="' +
        escape(value) + '">' + escape(value) + '</label>').join('') + '</div></details>';
  }).join('');
  el('filters').querySelectorAll('[data-icon]').forEach(node => node.innerHTML = icon(node.dataset.icon));
}

function renderCatalog() {
  const selections = new FormData(el('filters'));
  const query = normalized(el('search').value).trim().split(/\s+/).filter(Boolean);
  const category = section === 'adaptadores' ? 'adaptador' : 'port';
  const upcoming = section === 'proximamente';
  const categoryProjects = PROYECTOS.filter(project =>
    project.tipo === category && (project.estado === 'Próximamente') === upcoming
  );
  const results = categoryProjects.filter(project => {
    const haystack = normalized([project.titulo, project.descripcion, project.motor, project.estado, ...project.consolas].join(' '));
    return query.every(word => haystack.includes(word)) && groups.every(group => {
      const selected = selections.getAll(group.key);
      const values = [project[group.key]].flat();
      return selected.length === 0 || selected.some(value => values.includes(value));
    });
  });

  results.sort((a, b) => {
    switch (el('sort').value) {
      case 'name': return a.titulo.localeCompare(b.titulo, 'es');
      case 'status': {
        const order = groups[2].defaults;
        const rank = state => order.includes(state) ? order.indexOf(state) : order.length;
        return rank(a.estado) - rank(b.estado) || b.fecha.localeCompare(a.fecha);
      }
      default: return b.fecha.localeCompare(a.fecha);
    }
  });

  el('catalog-title').textContent = upcoming ? 'Próximamente' : category === 'port' ? 'Todos los ports' : 'Adaptadores';
  el('catalog-intro').hidden = !upcoming;
  el('result-count').textContent = results.length + (results.length === 1 ? ' proyecto' : ' proyectos') +
    (results.length && results.every(project => project.ejemplo) ? ' · Muestra' : '');
  el('cards').innerHTML = results.map(card).join('');
  el('empty').hidden = results.length !== 0;
  const emptyCategory = categoryProjects.length === 0;
  el('empty-title').textContent = emptyCategory ? 'Aún no hay proyectos aquí' : 'No hay coincidencias';
  el('empty-description').textContent = emptyCategory ? 'Las fichas aparecerán cuando se añadan al catálogo.' : 'Prueba con otro término o limpia los filtros.';
  el('empty-action').hidden = emptyCategory;
}

function renderPage() {
  const wasUpcoming = section === 'proximamente';
  section = location.hash.slice(1);
  if (!['inicio', 'ports', 'proximamente', 'adaptadores', 'tutoriales', 'actualizaciones', 'info'].includes(section)) section = 'inicio';
  if (!el('filters').children.length || wasUpcoming !== (section === 'proximamente')) {
    makeFilters();
    el('search').value = '';
  }
  for (const link of document.querySelectorAll('[data-nav]')) {
    if (link.dataset.nav === section) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  const showUpdates = section === 'actualizaciones';
  const page = pages[section];
  el('page').hidden = !page && !showUpdates;
  el('catalogo').hidden = !el('page').hidden;
  if (showUpdates) {
    el('page-title').textContent = 'Actualizaciones';
    const updates = PROYECTOS.filter(project => !project.ejemplo && project.fecha)
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
    el('page-body').innerHTML = updates.length
      ? '<ul>' + updates.map(project => '<li><time datetime="' + escape(project.fecha) + '">' +
        escape(project.fecha) + '</time> · ' + escape(project.titulo) + ' ' + escape(project.version ? 'v' + project.version : '') + '</li>').join('') + '</ul>'
      : '<p>Las versiones de los proyectos publicados se mostrarán aquí.</p>';
  } else if (page) {
    el('page-title').textContent = page.title;
    el('page-body').innerHTML = page.html;
  } else {
    renderCatalog();
  }
}

function resetFilters() {
  el('filters').reset();
  el('search').value = '';
  renderCatalog();
}

function detail(project) {
  const image = coverUrl(project);
  el('detail-image').hidden = !image;
  if (image) el('detail-image').src = image;
  el('detail-title').textContent = project.tituloDetalle || project.titulo;
  el('detail-type').textContent = (project.tipo === 'adaptador' ? 'ADAPTADOR' : 'PORT') + (project.ejemplo ? ' / FICHA DE EJEMPLO' : '');
  el('detail-tags').innerHTML = Object.values(tags(project)).join('');
  el('detail-description').textContent = project.descripcion;
  const guide = el('detail-guide');
  guide.hidden = !project.detalles?.length && !project.nota;
  guide.innerHTML = (project.detalles ?? []).map(({titulo, puntos, numerado}) => {
    const list = numerado ? 'ol' : 'ul';
    return '<section><h3>' + escape(titulo) + '</h3><' + list + '>' +
      puntos.map(point => '<li>' + escape(point) + '</li>').join('') +
      '</' + list + '></section>';
  }).join('') + (project.nota ? '<p class="detail-note">' + escape(project.nota) + '</p>' : '');
  const credit = el('detail-credit');
  credit.hidden = !project.creditoImagen;
  credit.textContent = project.creditoImagen || '';
  const download = projectUrl(project.descarga);
  const repo = projectUrl(project.repositorio);
  el('detail-actions').innerHTML =
    (download ? '<a class="button" href="' + escape(download) + '">' + icon('download') + 'Descargar</a>' : '') +
    (repo ? '<a class="button secondary" href="' + escape(repo) + '">Ver repositorio ' + icon('arrow') + '</a>' : '') +
    (!download && !repo ? '<p>' + (project.ejemplo ? 'Esta ficha de ejemplo no tiene descarga.' : 'Los enlaces de este proyecto aún están pendientes.') + '</p>' : '');
  el('details').showModal();
}

document.querySelectorAll('[data-icon]').forEach(node => node.innerHTML = icon(node.dataset.icon));
renderPage();
window.addEventListener('hashchange', renderPage);
el('search').addEventListener('input', renderCatalog);
el('filters').addEventListener('change', renderCatalog);
el('filters').addEventListener('submit', event => event.preventDefault());
el('sort').addEventListener('change', renderCatalog);
el('reset').addEventListener('click', resetFilters);
el('empty-action').addEventListener('click', () => {
  resetFilters();
  el('search').focus();
});
el('cards').addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) detail(PROYECTOS.find(project => project.id === button.dataset.project));
});
el('details').addEventListener('click', event => {
  if (event.target === el('details')) el('details').close();
});
for (const button of document.querySelectorAll('[data-view]')) {
  button.addEventListener('click', () => {
    for (const option of document.querySelectorAll('[data-view]')) option.setAttribute('aria-pressed', option === button);
    el('cards').classList.toggle('list', button.dataset.view === 'list');
  });
}

function setFiltersOpen(open) {
  el('filter-toggle').setAttribute('aria-expanded', open);
  el('filter-body').hidden = !open;
}
const mobile = window.matchMedia('(max-width: 640px)');
setFiltersOpen(!mobile.matches);
mobile.addEventListener('change', event => setFiltersOpen(!event.matches));
el('filter-toggle').addEventListener('click', () => setFiltersOpen(el('filter-body').hidden));
el('search-shortcut').addEventListener('click', () => {
  if (el('catalogo').hidden) {
    location.hash = 'ports';
    renderPage();
  }
  el('search').focus();
});
