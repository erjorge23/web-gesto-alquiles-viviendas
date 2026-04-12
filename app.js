// ==== MOCK DATA EXTENDIDO ====
const data = {
    viviendas: [
        { id: 'V01', nombre: 'Apartamento Sol', estado: 'lista', checkin: '15:00', checkout: '11:00', prioridad: 'baja', img: 'images/apartamento_sol_1776014972657.png' },
        { id: 'V02', nombre: 'Loft Centro', estado: 'limpieza', checkin: '16:30', checkout: '11:00', prioridad: 'media', img: 'images/loft_centro_1776014985148.png' },
        { id: 'V03', nombre: 'Ático Vistas', estado: 'incidencia', checkin: '14:00', checkout: '10:00', prioridad: 'alta', img: 'images/atico_vistas_1776015004008.png' },
        { id: 'V04', nombre: 'Estudio Playa', estado: 'pendiente', checkin: '17:00', checkout: '12:00', prioridad: 'baja', img: 'images/estudio_playa_1776015021367.png' },
        { id: 'V05', nombre: 'Casa Jardín', estado: 'ocupada', checkin: '-', checkout: '-', prioridad: '-', img: 'images/casa_jardin_1776015036940.png' },
        { id: 'V06', nombre: 'Chalet Montaña', estado: 'lista', checkin: '18:00', checkout: '10:00', prioridad: 'baja', img: 'images/chalet_montana_1776015662118.png' },
        { id: 'V07', nombre: 'Villa Piscina', estado: 'limpieza', checkin: '15:30', checkout: '11:00', prioridad: 'alta', img: 'images/villa_piscina_1776015679284.png' },
        { id: 'V08', nombre: 'Apartamento Zen', estado: 'lista', checkin: '16:00', checkout: '09:00', prioridad: 'media', img: 'images/apartamento_zen_1776015694326.png' },
        { id: 'V09', nombre: 'Piso Estudiantes', estado: 'pendiente', checkin: '14:30', checkout: '11:30', prioridad: 'alta', img: 'images/piso_estudiantes_1776015713333.png' },
        { id: 'V10', nombre: 'Ático Lujo', estado: 'ocupada', checkin: '-', checkout: '-', prioridad: '-', img: 'images/atico_lujo_1776015731102.png' }
    ],
    alertas: [
        { id: 101, tipo: 'critica', mensaje: 'Fuga de agua grave en Ático Vistas', time: 'Hace 5 min' },
        { id: 102, tipo: 'retraso', mensaje: 'Retraso Check-in: Estudio Playa', time: 'Hace 15 min' },
        { id: 103, tipo: 'stock', mensaje: 'Falta de stock: Toallas bajo mínimo', time: 'Hace 1 hora' },
        { id: 104, tipo: 'lista', mensaje: 'Vivienda Lista: Apartamento Sol', time: 'Hace 2 horas' }
    ],
    tareasLimpieza: [
        { id: 'L102', titulo: 'Limpieza Estudio Playa', estado: 'pendiente', limite: '16:00', pri: 'alta', asignado: 'Pendiente' },
        { id: 'L103', titulo: 'Limpieza Loft Centro', estado: 'encurso', limite: '15:30', pri: 'media', asignado: 'Jorge C.' },
        { id: 'L104', titulo: 'Limpieza Apartamento Sol', estado: 'completada', limite: '14:00', pri: 'baja', asignado: 'Luisa P.' },
        { id: 'L105', titulo: 'Limpieza Villa Piscina', estado: 'encurso', limite: '15:30', pri: 'alta', asignado: 'María G.' },
        { id: 'L106', titulo: 'Limpieza Piso Estudiantes', estado: 'pendiente', limite: '14:30', pri: 'alta', asignado: 'Pendiente' }
    ],
    incidencias: [
        { id: 'INC-001', vivienda: 'Ático Vistas', problema: 'Tubería rota lavabo', estado: 'Asignada', tecnico: 'Carlos T.', gravedad: 'Alta' },
        { id: 'INC-002', vivienda: 'Loft Centro', problema: 'Bombilla fundida', estado: 'Resuelta', tecnico: 'Ana M.', gravedad: 'Baja' },
        { id: 'INC-003', vivienda: 'Estudio Playa', problema: 'Silla coja', estado: 'Reportada', tecnico: 'Pendiente', gravedad: 'Media' }
    ],
    mantenimiento: [
        { id: 'MT-01', incidencia: 'INC-001', tecnico: 'Carlos T.', tiempo: '2 horas', estado: 'En curso' },
        { id: 'MT-02', incidencia: 'INC-003', tecnico: 'Pendiente', tiempo: '30 min', estado: 'Pendiente asignación' }
    ],
    usuarios: [
        { nombre: 'Laura Medina', rol: 'Coordinador', config: 'Acceso Total', status: 'Activo' },
        { nombre: 'David Román', rol: 'Recepción', config: 'Viviendas, Dashboard', status: 'Activo' },
        { nombre: 'María G.', rol: 'Limpieza', config: 'Limpieza, Inventario', status: 'Activo' },
        { nombre: 'Jorge C.', rol: 'Limpieza', config: 'Limpieza', status: 'Activo' },
        { nombre: 'Luisa P.', rol: 'Limpieza', config: 'Limpieza', status: 'Activo' },
        { nombre: 'Carlos T.', rol: 'Mantenimiento', config: 'Incidencias, Mant.', status: 'En Servicio' },
        { nombre: 'Roberto S.', rol: 'Mantenimiento', config: 'Incidencias, Mant.', status: 'En Servicio' },
        { nombre: 'Javier M.', rol: 'Mantenimiento', config: 'Incidencias, Mant.', status: 'Activo' }
    ]
};

// ==== LOGIN SYSTEM ====
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-view').classList.remove('active');
    document.getElementById('app-view').style.display = 'flex';
    initApp();
});

// ==== ALERTS SYSTEM TRAY ====
document.querySelector('.notification-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('alerts-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', (e) => {
    if(!e.target.closest('.header-actions')) {
        document.getElementById('alerts-dropdown').style.display = 'none';
    }
});

// ==== MODAL SYSTEM (Imágenes y Formularios) ====
window.openModal = function(imgSrc, title) {
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('image-modal').style.display = 'flex';
};
window.closeModal = function(id) {
    if(!id) id = 'image-modal';
    document.getElementById(id).style.display = 'none';
};

window.openFormModal = function(modalId, extraData = null) {
    document.getElementById('form-modal-overlay').style.display = 'flex';
    document.querySelectorAll('.modal-content').forEach(m => m.style.display = 'none');
    document.getElementById(modalId).style.display = 'block';

    if(modalId === 'modal-incidencia') {
        const sel = document.getElementById('inc-vivienda');
        sel.innerHTML = data.viviendas.map(v => `<option value="${v.nombre}">${v.nombre}</option>`).join('');
    }
    if(modalId === 'modal-tecnico') {
        document.getElementById('mt-id-hidden').value = extraData;
        const sel = document.getElementById('mt-tecnico');
        const tecs = data.usuarios.filter(u => u.rol === 'Mantenimiento');
        sel.innerHTML = tecs.map(t => `<option value="${t.nombre}">${t.nombre}</option>`).join('');
    }
}

window.closeFormModal = function() {
    document.getElementById('form-modal-overlay').style.display = 'none';
}

// ==== LOGICA DE FORMULARIOS ====
window.saveIncidencia = function() {
    const viv = document.getElementById('inc-vivienda').value;
    const prob = document.getElementById('inc-problema').value;
    const grav = document.getElementById('inc-gravedad').value;
    if(!prob) return alert('Describe el problema');
    
    let id = 'INC-00' + (data.incidencias.length + 1);
    data.incidencias.push({ id, vivienda: viv, problema: prob, estado: 'Reportada', tecnico: 'Pendiente', gravedad: grav });
    data.mantenimiento.push({ id: 'MT-' + Date.now().toString().slice(-4), incidencia: id, tecnico: 'Pendiente', tiempo: '-', estado: 'Pendiente asignación' });
    
    const v = data.viviendas.find(x => x.nombre === viv);
    if(v) v.estado = 'incidencia';

    data.alertas.unshift({ id: Date.now(), tipo: 'critica', mensaje: `Nueva Incidencia: ${prob}`, time: 'Ahora mismo' });
    
    document.getElementById('inc-problema').value = '';
    closeFormModal();
    renderTodo();
}

window.saveTecnicoAsignado = function() {
    const id = document.getElementById('mt-id-hidden').value;
    const tec = document.getElementById('mt-tecnico').value;
    const m = data.mantenimiento.find(x => x.id === id);
    if(m) {
        m.tecnico = tec;
        m.estado = 'En curso';
        const inc = data.incidencias.find(i => i.id === m.incidencia);
        if(inc) { inc.tecnico = tec; inc.estado = 'Asignada'; }
    }
    closeFormModal();
    renderTodo();
}

window.savePedidoStock = function() {
    const toallasVal = document.getElementById('stock-toallas');
    if(toallasVal) toallasVal.innerHTML = '52<span> u.</span>';
    const tag = toallasVal.nextElementSibling;
    tag.className = 'tag bg-success mt-2';
    tag.innerText = 'Disponible';
    
    data.alertas.unshift({ id: Date.now(), tipo: 'stock', mensaje: 'Stock reestablecido (Toallas)', time: 'Ahora mismo' });
    if(data.alertas.length > 5) data.alertas.pop();

    closeFormModal();
    renderDashboard();
}

window.saveNuevoUsuario = function() {
    const n = document.getElementById('usr-nombre').value;
    const r = document.getElementById('usr-rol').value;
    if(!n) return alert('Escribe el nombre');
    data.usuarios.push({ nombre: n, rol: r, config: 'Asignado Manual', status: 'Activo' });
    document.getElementById('usr-nombre').value = '';
    closeFormModal();
    renderTodo();
}

window.resolverInc = function(id) {
    const inc = data.incidencias.find(i => i.id === id);
    if(inc) {
        inc.estado = 'Resuelta';
        const mant = data.mantenimiento.find(m => m.incidencia === id);
        if(mant) mant.estado = 'Resuelto';
        
        const viv = data.viviendas.find(v => v.nombre === inc.vivienda);
        if(viv) viv.estado = 'limpieza'; // De avería pasa a limpiar
        renderTodo();
    }
}

// ==== BUSCADOR ====
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    // Filtro básico en Viviendas
    document.querySelectorAll('#viviendas-list tr').forEach(tr => {
        tr.style.display = tr.innerText.toLowerCase().includes(val) ? '' : 'none';
    });
});

// ==== NAVIGATION ====
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
            
            const target = e.currentTarget;
            target.classList.add('active');
            document.getElementById(target.dataset.target).classList.add('active');
        });
    });
}

// ==== RENDERS ====
function getBadge(txt, bgClass) { return `<span class="tag ${bgClass}">${txt}</span>`; }
function getPriClass(pri) { return pri === 'alta' ? 'pri-alta' : pri === 'media' ? 'pri-media' : 'pri-baja'; }

function renderDashboard() {
    const alertsBox = document.getElementById('alerts-list');
    const dropdownBox = document.getElementById('dropdown-alerts-list');
    alertsBox.innerHTML = '';
    dropdownBox.innerHTML = '';

    data.alertas.forEach((a, idx) => {
        let icon = 'ph-bell'; let bgClass = 'bg-primary';
        if (a.tipo === 'critica') { bgClass = 'bg-danger'; icon = 'ph-warning-circle'; }
        if (a.tipo === 'retraso') { bgClass = 'bg-warning'; icon = 'ph-clock'; }
        if (a.tipo === 'lista') { bgClass = 'bg-success'; icon = 'ph-check-circle'; }
        if (a.tipo === 'stock') { bgClass = 'bg-warning'; icon = 'ph-package'; }

        const itemHTML = `
            <div class="list-item" style="animation: fadeIn 0.4s ease forwards ${idx*0.1}s; opacity: 0; transform: translateY(5px);">
                <div class="item-info">
                    <div class="icon-box ${bgClass}"><i class="ph ${icon}"></i></div>
                    <div>
                        <div style="font-weight:600; font-size:13px;">${a.mensaje}</div>
                        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${a.time}</div>
                    </div>
                </div>
            </div>`;
        alertsBox.innerHTML += itemHTML;
        dropdownBox.innerHTML += itemHTML;
    });
    document.getElementById('notif-badge').innerText = data.alertas.length;

    const checkinBox = document.getElementById('checkin-list');
    checkinBox.innerHTML = '';
    const pend = data.viviendas.filter(v => ['pendiente', 'limpieza', 'incidencia'].includes(v.estado)).sort((a,b) => a.checkin.localeCompare(b.checkin));
    
    pend.forEach((v, idx) => {
        let tagClass = v.estado === 'incidencia' ? 'bg-danger' : v.estado === 'limpieza' ? 'bg-warning' : 'bg-primary';
        checkinBox.innerHTML += `
            <div class="list-item" style="animation: fadeIn 0.4s ease forwards ${idx*0.1}s; opacity: 0; transform: translateY(5px);">
                <div class="item-info">
                    <div style="font-size: 15px; font-weight: 700; width: 50px;">${v.checkin}</div>
                    <div>
                        <div style="font-weight:600; font-size:14px">${v.nombre}</div>
                        <div style="font-size:11px; color:var(--text-muted);">PRIORIDAD: <span class="${getPriClass(v.prioridad)}">${v.prioridad.toUpperCase()}</span></div>
                    </div>
                </div>
                ${getBadge(v.estado.toUpperCase(), tagClass)}
            </div>
        `;
    });

    document.getElementById('kpi-listas').innerHTML = `${data.viviendas.filter(v=>v.estado==='lista').length}<span>/25</span>`;
    document.getElementById('kpi-limpieza').innerText = data.tareasLimpieza.filter(t=>t.estado!=='completada').length;
    document.getElementById('kpi-incidencias').innerText = data.incidencias.filter(i=>i.estado!=='Resuelta').length;
}

function renderViviendas() {
    const list = document.getElementById('viviendas-list');
    list.innerHTML = '';
    data.viviendas.forEach(v => {
        let sc = v.estado === 'ocupada' ? 'bg-warning' : v.estado === 'lista' ? 'bg-success' : v.estado === 'incidencia' ? 'bg-danger' : 'bg-primary';
        list.innerHTML += `
            <tr>
                <td>
                    <div class="prop-cell" style="cursor:pointer;" onclick="openModal('${v.img}', '${v.nombre}')" title="Clic para ver foto grande">
                        <img src="${v.img}" alt="${v.nombre}" class="prop-thumb" style="transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                        <div>
                            <strong>${v.nombre}</strong> <br><small class="text-muted">ID: ${v.id}</small>
                        </div>
                    </div>
                </td>
                <td><i class="ph ph-sign-out"></i> ${v.checkout}</td>
                <td><i class="ph ph-sign-in"></i> ${v.checkin}</td>
                <td class="${getPriClass(v.prioridad)}">${v.prioridad.toUpperCase()}</td>
                <td>${getBadge(v.estado, sc)}</td>
            </tr>
        `;
    });
}

function renderLimpieza() {
    const pendBox = document.getElementById('kb-pendientes');
    const onBox = document.getElementById('kb-encurso');
    const doneBox = document.getElementById('kb-completadas');
    
    pendBox.innerHTML = ''; onBox.innerHTML = ''; doneBox.innerHTML = '';
    let cPend = 0, cOn = 0, cDone = 0;

    const limpiadores = data.usuarios.filter(u => u.rol === 'Limpieza').map(u => u.nombre);

    data.tareasLimpieza.forEach(t => {
        let btnHTML = '';
        let bClass = t.pri === 'alta' ? 'kc-urgent' : 'kc-pending';
        let iconHtml = '<i class="ph ph-clock"></i>';
        
        let optionsHtml = `<option value="Pendiente" ${t.asignado === 'Pendiente' ? 'selected' : ''}>-- Asignar Empleado --</option>`;
        limpiadores.forEach(lim => {
            optionsHtml += `<option value="${lim}" ${t.asignado === lim ? 'selected' : ''}>${lim}</option>`;
        });
        const assignerHtml = `<select style="width:100%; margin-top:8px; padding:6px; border-radius:4px; border:1px solid var(--border-color); font-size:12px;" onchange="assignEmpleado('${t.id}', this.value)">${optionsHtml}</select>`;

        if(t.estado === 'pendiente') {
            btnHTML = `<button onclick="cambiarLimpieza('${t.id}', 'encurso')"><i class="ph ph-play"></i> Iniciar Tarea</button>`;
            cPend++;
        } else if (t.estado === 'encurso') {
            bClass = 'kc-pending';
            iconHtml = '<i class="ph ph-spinner-gap" style="animation: spin 1s linear infinite; display:inline-block;"></i>';
            btnHTML = `
                <button style="background:var(--success-color);" onclick="cambiarLimpieza('${t.id}', 'completada')"><i class="ph ph-check"></i> Finalizar</button>
                <button style="background:var(--warning-color);" onclick="cambiarLimpieza('${t.id}', 'pendiente')"><i class="ph ph-arrow-u-up-left"></i> Revertir</button>
            `;
            cOn++;
        } else {
            bClass = 'kc-ready';
            iconHtml = '<i class="ph ph-check-circle" style="color:var(--success-color)"></i>';
            btnHTML = `
                <button style="background:#E2E8F0; color:var(--text-muted); width: 60%;" disabled>Validada</button>
                <button style="background:var(--warning-color); width: 40%;" onclick="cambiarLimpieza('${t.id}', 'encurso')" title="Revertir estado a en curso"><i class="ph ph-arrow-counter-clockwise"></i></button>
            `;
            cDone++;
        }

        const card = `
            <div class="kanban-card ${bClass}">
                <h4>${t.titulo}</h4>
                <div style="margin-bottom:12px; font-size:13px;">
                    👤 Asignado: ${assignerHtml}
                </div>
                <p>${iconHtml} <span style="margin-left:4px;">Límite: <strong>${t.limite}</strong> (<span class="${getPriClass(t.pri)}">${t.pri}</span>)</span></p>
                <div class="k-actions">${btnHTML}</div>
            </div>`;

        if(t.estado === 'pendiente') pendBox.insertAdjacentHTML('beforeend', card);
        if(t.estado === 'encurso') onBox.insertAdjacentHTML('beforeend', card);
        if(t.estado === 'completada') doneBox.insertAdjacentHTML('beforeend', card);
    });
    document.getElementById('count-pendientes').innerText = cPend;
    document.getElementById('count-encurso').innerText = cOn;
    document.getElementById('count-completadas').innerText = cDone;
}

window.assignEmpleado = function(id, name) {
    const t = data.tareasLimpieza.find(x => x.id === id);
    if(t) t.asignado = name;
    renderLimpieza();
}

window.cambiarLimpieza = function(id, newState) {
    const t = data.tareasLimpieza.find(x => x.id === id);
    if(t) {
        const oldState = t.estado;
        t.estado = newState;
        
        if(newState === 'completada') {
            data.alertas.unshift({ id: Date.now(), tipo: 'lista', mensaje: `Limpieza terminada: ${t.titulo.replace('Limpieza ', '')}`, time: 'Hace un instante' });
            if(data.alertas.length > 6) data.alertas.pop();
            const viv = data.viviendas.find(v => t.titulo.includes(v.nombre));
            if(viv) viv.estado = 'lista';
        }
        
        if(oldState === 'completada' && newState !== 'completada') {
            const viv = data.viviendas.find(v => t.titulo.includes(v.nombre));
            if(viv) viv.estado = newState === 'encurso' ? 'limpieza' : 'pendiente';
        }

        renderTodo();
    }
}

function renderIncidencias() {
    const list = document.getElementById('incidencias-list');
    list.innerHTML = '';
    data.incidencias.forEach(i => {
        let tag = i.estado === 'Resuelta' ? 'bg-success' : i.estado === 'Reportada' ? 'bg-warning' : 'bg-danger';
        list.innerHTML += `
            <tr>
                <td><strong>${i.id}</strong></td>
                <td>${i.vivienda}</td>
                <td>${i.problema} <br><small class="text-muted">Gravedad: ${i.gravedad}</small></td>
                <td>${getBadge(i.estado, tag)}</td>
                <td>${i.tecnico}</td>
                <td>
                    ${i.estado !== 'Resuelta' ? `<button class="btn-primary" style="padding: 4px 8px; font-size: 11px;" onclick="resolverInc('${i.id}')">Resolver</button>` : `<button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;" disabled>Completada</button>`}
                </td>
            </tr>
        `;
    });
}

function renderMantenimiento() {
    const list = document.getElementById('mantenimiento-list');
    list.innerHTML = '';
    data.mantenimiento.forEach(m => {
        let tag = m.estado.includes('Pendiente') ? 'bg-warning' : m.estado.includes('Resuelto') ? 'bg-success' : 'bg-primary';
        list.innerHTML += `
            <tr>
                <td><strong>${m.id}</strong></td>
                <td>${m.incidencia}</td>
                <td>${m.tecnico}</td>
                <td>${m.tiempo}</td>
                <td>${getBadge(m.estado, tag)}</td>
                <td>
                    ${m.estado.includes('Pendiente') ? `<button class="btn-primary" style="padding: 4px 10px;font-size:11px;" onclick="openFormModal('modal-tecnico', '${m.id}')">Asignar Téc.</button>` : `<button class="btn-secondary" disabled style="padding: 4px 10px;font-size:11px;opacity:0.5;">Ya asignada</button>`}
                </td>
            </tr>
        `;
    });
}

function renderUsuarios() {
    const list = document.getElementById('usuarios-list');
    list.innerHTML = '';
    data.usuarios.forEach(u => {
        let tag = u.status === 'Activo' ? 'bg-success' : u.status === 'En Servicio' ? 'bg-primary' : 'bg-warning';
        list.innerHTML += `
            <tr>
                <td><strong>${u.nombre}</strong></td>
                <td>${u.rol}</td>
                <td style="color:var(--text-muted);font-size:12px;">${u.config}</td>
                <td>${getBadge(u.status, tag)}</td>
            </tr>
        `;
    });
}

function renderTodo() {
    renderDashboard();
    renderViviendas();
    renderLimpieza();
    renderIncidencias();
    renderMantenimiento();
    renderUsuarios();
}

function initApp() {
    setupNavigation();
    renderTodo();
}

// Keyframes dynamico
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);
