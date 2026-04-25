// ==== MOCK DATA EXTENDIDO E INTEGRAL ====
const data = {
    viviendas: [
        { id: 'V01', nombre: 'Apartamento Sol', estado: 'lista', checkin: '24 Abr - 15:00', checkout: '22 Abr - 11:00', prioridad: 'baja', img: 'images/apartamento_sol_1776014972657.png' },
        { id: 'V02', nombre: 'Loft Centro', estado: 'limpieza', checkin: '22 Abr - 16:30', checkout: '22 Abr - 11:00', prioridad: 'media', img: 'images/loft_centro_1776014985148.png' },
        { id: 'V03', nombre: 'Ático Vistas', estado: 'incidencia', checkin: '25 Abr - 14:00', checkout: '23 Abr - 10:00', prioridad: 'alta', img: 'images/atico_vistas_1776015004008.png' },
        { id: 'V04', nombre: 'Estudio Playa', estado: 'pendiente', checkin: '22 Abr - 17:00', checkout: '22 Abr - 12:00', prioridad: 'baja', img: 'images/estudio_playa_1776015021367.png' },
        { id: 'V05', nombre: 'Casa Jardín', estado: 'auditoria', checkin: '26 Abr - 13:00', checkout: '22 Abr - 11:00', prioridad: 'alta', img: 'images/casa_jardin_1776015036940.png' },
        { id: 'V06', nombre: 'Chalet Montaña', estado: 'lista', checkin: '28 Abr - 18:00', checkout: '20 Abr - 10:00', prioridad: 'baja', img: 'images/chalet_montana_1776015662118.png' },
        { id: 'V07', nombre: 'Villa Piscina', estado: 'limpieza', checkin: '23 Abr - 15:30', checkout: '21 Abr - 11:00', prioridad: 'alta', img: 'images/villa_piscina_1776015679284.png' },
        { id: 'V08', nombre: 'Apartamento Zen', estado: 'lista', checkin: '27 Abr - 16:00', checkout: '20 Abr - 09:00', prioridad: 'media', img: 'images/apartamento_zen_1776015694326.png' },
        { id: 'V09', nombre: 'Piso Estudiantes', estado: 'pendiente', checkin: '22 Abr - 14:30', checkout: '22 Abr - 11:30', prioridad: 'alta', img: 'images/piso_estudiantes_1776015713333.png' },
        { id: 'V10', nombre: 'Ático Lujo', estado: 'ocupada', checkin: '05 May - 15:00', checkout: '01 May - 11:00', prioridad: '-', img: 'images/atico_lujo_1776015731102.png' }
    ],
    alertas: [
        { id: 101, tipo: 'critica', mensaje: 'Fuga de agua grave en Ático Vistas', time: 'Hace 5 min' },
        { id: 102, tipo: 'retraso', mensaje: 'Retraso Check-in: Estudio Playa', time: 'Hace 15 min' }
    ],
    // Ciclo de tarea: auditoria -> pendiente -> encurso -> completada
    tareasLimpieza: [
        { id: 'L101', titulo: 'Auditoría Checkout Casa Jardín', estado: 'auditoria', limite: '22 Abr - 12:00', pri: 'alta', asignado: 'Pendiente' },
        { id: 'L102', titulo: 'Limpieza Estudio Playa', estado: 'pendiente', limite: '22 Abr - 16:00', pri: 'alta', asignado: 'Pendiente' },
        { id: 'L103', titulo: 'Limpieza Loft Centro', estado: 'encurso', limite: '22 Abr - 15:30', pri: 'media', asignado: 'Jorge C.' },
        { id: 'L104', titulo: 'Limpieza Apartamento Sol', estado: 'completada', limite: '22 Abr - 14:00', pri: 'baja', asignado: 'Luisa P.' },
        { id: 'L105', titulo: 'Limpieza Villa Piscina', estado: 'encurso', limite: '23 Abr - 15:30', pri: 'alta', asignado: 'María G.' },
        { id: 'L106', titulo: 'Limpieza Piso Estudiantes', estado: 'pendiente', limite: '22 Abr - 14:30', pri: 'alta', asignado: 'Pendiente' }
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
    mantenimientoPreventivo: [
        { viv: 'Chalet Montaña', ultRev: '10 Feb 2026', proxRev: '10 Abr 2026', elementos: 'Caldera, Tejado', estado: 'Retrasada' },
        { viv: 'Villa Piscina', ultRev: '14 Mar 2026', proxRev: '14 May 2026', elementos: 'Limpiadora Piscina, Cloro', estado: 'Al día' },
        { viv: 'Apartamento Zen', ultRev: '05 Abr 2026', proxRev: '05 Jun 2026', elementos: 'Sifones, Detectores Humo', estado: 'Al día' }
    ],
    inventarioCentral: { toallas: 12, sabanas: 45, amenities: 80, quimicos: 5 },
    proveedores: [
        { nombre: 'Lavandería IndusSur', recogen: 'Diario 08:00', estado: 'Servicio Activo', contacto: 'Logística B2B' },
        { nombre: 'Suministros Hostelería JJ', recogen: 'Martes', estado: 'Pedido Pendiente', contacto: 'Gestor JJ' }
    ],
    camiones: [
        { ruta: 'Ruta 1 (Costa)', matricula: '4452-LKJ', driver: 'Paco S.', estado: 'En Reparto (Parada: V04)' },
        { ruta: 'Ruta 2 (Centro)', matricula: '9981-BBC', driver: 'Luis M.', estado: 'En Base HUB (Cargando)' }
    ],
    inventarioCasas: [
        { casa: 'V04 Estudio Playa', deficit: 'Faltan 2 Toallas Ducha', grav: 'Alta', accion: 'Añadido a Ruta 1' },
        { casa: 'V03 Ático Vistas', deficit: 'Sin gel cortesía', grav: 'Baja', accion: 'Aviso Limpieza' }
    ],
    usuarios: [
        { nombre: 'Paula Auditora', rol: 'Auditor', config: 'Validación Check-out', status: 'Activo' },
        { nombre: 'Laura Medina', rol: 'Coordinador', config: 'Acceso Total', status: 'Activo' },
        { nombre: 'María G.', rol: 'Limpieza', config: 'Limpieza', status: 'Activo' },
        { nombre: 'Jorge C.', rol: 'Limpieza', config: 'Limpieza', status: 'Activo' },
        { nombre: 'Luisa P.', rol: 'Limpieza', config: 'Limpieza', status: 'Activo' },
        { nombre: 'Carlos T.', rol: 'Mantenimiento', config: 'Incidencias, Mant.', status: 'En Servicio' },
        { nombre: 'Roberto S.', rol: 'Mantenimiento', config: 'Incidencias, Mant.', status: 'En Servicio' }
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

// ==== MODAL SYSTEM ====
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

    data.alertas.unshift({ id: Date.now(), tipo: 'critica', mensaje: `Nueva Incidencia en ${viv}: ${prob}`, time: 'Ahora' });
    
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
    data.inventarioCentral.toallas += 40;
    data.inventarioCentral.sabanas += 30;
    data.proveedores[1].estado = 'Repartiendo hacia HUB'; // JJ Supplies
    data.alertas.unshift({ id: Date.now(), tipo: 'stock', mensaje: 'Orden Emitida a Suministros Hostelería JJ', time: 'Ahora mismo' });
    
    closeFormModal();
    renderTodo();
}

window.saveNuevoUsuario = function() {
    const n = document.getElementById('usr-nombre').value;
    const r = document.getElementById('usr-rol').value;
    if(!n) return alert('Escribe el nombre');
    data.usuarios.push({ nombre: n, rol: r, config: 'Dedicación Exclusiva', status: 'Activo' });
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
        if(viv) {
            viv.estado = 'limpieza';
            // Devolver a flujo de Kanban de limpieza
            data.tareasLimpieza.push({
                id: 'L-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 1000),
                titulo: 'Limpieza post-Mantenimiento ' + viv.nombre,
                estado: 'pendiente', limite: 'Urgent', pri: 'alta', asignado: 'Pendiente'
            });
        }
        renderTodo();
    }
}

// ==== BUSCADOR GLOBAL ====
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.data-table tr').forEach(tr => {
        if(tr.parentNode.tagName === 'THEAD') return;
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

// ==== RENDERS CORE ====
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
    const pend = data.viviendas.filter(v => ['pendiente', 'limpieza', 'incidencia', 'auditoria'].includes(v.estado));
    
    pend.forEach((v, idx) => {
        let tagClass = v.estado === 'incidencia' ? 'bg-danger' : v.estado === 'limpieza' ? 'bg-warning' : v.estado === 'auditoria' ? 'bg-info' : 'bg-primary';
        // Parse "24 Abr - 15:00" to "15:00" for visual tightness in dashboard
        let hour = v.checkin.includes('-') ? v.checkin.split('-')[1].trim() : v.checkin;
        checkinBox.innerHTML += `
            <div class="list-item" style="animation: fadeIn 0.4s ease forwards ${idx*0.1}s; opacity: 0; transform: translateY(5px);">
                <div class="item-info">
                    <div style="font-size: 15px; font-weight: 700; width: 50px;">${hour}</div>
                    <div>
                        <div style="font-weight:600; font-size:14px">${v.nombre} <small style="display:block;color:grey;font-size:10px;">${v.checkin.split('-')[0]}</small></div>
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
        let sc = v.estado === 'ocupada' ? 'bg-warning' : v.estado === 'lista' ? 'bg-success' : v.estado === 'incidencia' ? 'bg-danger' : v.estado === 'auditoria' ? 'bg-info' : 'bg-primary';
        
        // Lógica de botones de Huésped
        let btnHuesped = '';
        if (v.estado === 'lista') {
            btnHuesped = `<button class="btn-primary" style="padding:4px 8px; font-size:11px;" onclick="toggleOcupacion('${v.id}', 'ocupada')">Registrar Entrada (Check-In)</button>`;
        } else if (v.estado === 'ocupada') {
            btnHuesped = `<button class="btn-secondary" style="padding:4px 8px; font-size:11px; background:var(--warning-bg);" onclick="toggleOcupacion('${v.id}', 'auditoria')">Finalizar Estancia (Check-Out)</button>`;
        } else {
            btnHuesped = `<span style="font-size:11px; color:var(--text-muted);">En mantenimiento/limpieza</span>`;
        }

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
                <td>${getBadge(v.estado.toUpperCase(), sc)}</td>
                <td>${btnHuesped}</td>
            </tr>
        `;
    });
}

window.toggleOcupacion = function(id, newState) {
    const viv = data.viviendas.find(v => v.id === id);
    if(viv) {
        viv.estado = newState;
        data.alertas.unshift({ id: Date.now(), tipo: 'info', mensaje: `Huésped: ${viv.nombre} ahora está ${newState.toUpperCase()}`, time: 'Ahora mismo' });
        
        // Si sale el huésped, creamos la tarjeta de Auditoría automáticamente
        if(newState === 'auditoria') {
            data.tareasLimpieza.push({
                id: 'L-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 1000),
                titulo: 'Auditoría Checkout ' + viv.nombre,
                estado: 'auditoria', limite: viv.checkout, pri: viv.prioridad, asignado: 'Pendiente'
            });
        }
        
        renderTodo();
    }
}

function renderLimpieza() {
    const audBox = document.getElementById('kb-auditoria');
    const pendBox = document.getElementById('kb-pendientes');
    const onBox = document.getElementById('kb-encurso');
    const doneBox = document.getElementById('kb-completadas');
    
    audBox.innerHTML = ''; pendBox.innerHTML = ''; onBox.innerHTML = ''; doneBox.innerHTML = '';
    let cAud = 0, cPend = 0, cOn = 0, cDone = 0;

    const limpiadores = data.usuarios.filter(u => u.rol === 'Limpieza').map(u => u.nombre);
    const auditores = data.usuarios.filter(u => u.rol === 'Auditor').map(u => u.nombre);

    data.tareasLimpieza.forEach(t => {
        let btnHTML = '';
        let bClass = t.pri === 'alta' ? 'kc-urgent' : 'kc-pending';
        let iconHtml = '<i class="ph ph-clock"></i>';
        
        // Select logic depending on state
        let optionsHtml = `<option value="Pendiente" ${t.asignado === 'Pendiente' ? 'selected' : ''}>-- Asignar --</option>`;
        let perList = (t.estado === 'auditoria') ? auditores : limpiadores; // Si es auditoria, filtro por auditores
        perList.forEach(p => {
            optionsHtml += `<option value="${p}" ${t.asignado === p ? 'selected' : ''}>${p}</option>`;
        });
        const assignerHtml = `<select style="width:100%; margin-top:8px; padding:6px; border-radius:4px; border:1px solid var(--border-color); font-size:12px;" onchange="assignEmpleado('${t.id}', this.value)">${optionsHtml}</select>`;

        if(t.estado === 'auditoria') {
            btnHTML = `
                <button style="background:var(--primary-color);" onclick="cambiarLimpieza('${t.id}', 'pendiente')"><i class="ph ph-check-square"></i> Validar Auditoría</button>
            `;
            cAud++;
        }
        else if(t.estado === 'pendiente') {
            btnHTML = `<button style="background:var(--info-color);" onclick="cambiarLimpieza('${t.id}', 'encurso')"><i class="ph ph-play"></i> Iniciar Limpieza</button>`;
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
                <button style="background:#E2E8F0; color:var(--text-muted); width: 60%;" disabled>Verificada</button>
                <button style="background:var(--warning-color); width: 40%;" onclick="cambiarLimpieza('${t.id}', 'encurso')" title="Revertir estado a en curso"><i class="ph ph-arrow-counter-clockwise"></i></button>
            `;
            cDone++;
        }

        const card = `
            <div class="kanban-card ${bClass}">
                <h4>${t.titulo}</h4>
                <div style="margin-bottom:12px; font-size:13px;">
                    👤 Accionante: ${assignerHtml}
                </div>
                <p>${iconHtml} <span style="margin-left:4px;">Lím. ${t.limite} (<span class="${getPriClass(t.pri)}">${t.pri}</span>)</span></p>
                <div class="k-actions" style="margin-top:10px;">${btnHTML}</div>
            </div>`;

        if(t.estado === 'auditoria') audBox.insertAdjacentHTML('beforeend', card);
        if(t.estado === 'pendiente') pendBox.insertAdjacentHTML('beforeend', card);
        if(t.estado === 'encurso') onBox.insertAdjacentHTML('beforeend', card);
        if(t.estado === 'completada') doneBox.insertAdjacentHTML('beforeend', card);
    });
    
    document.getElementById('count-auditoria').innerText = cAud;
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
        
        const vivTitle = t.titulo.replace('Limpieza ', '').replace('Auditoría Checkout ', '');
        const viv = data.viviendas.find(v => vivTitle.includes(v.nombre));

        // Transicion de auditoria -> limpieza (Pendiente)
        if(oldState === 'auditoria' && newState === 'pendiente') {
            t.titulo = t.titulo.replace('Auditoría Checkout', 'Limpieza');
            // reset employee as auditor -> limpieza transition happens
            t.asignado = 'Pendiente';
            data.alertas.unshift({ id: Date.now(), tipo: 'info', mensaje: `Auditoría OK: ${vivTitle} lista para limpiar`, time: 'Ahora' });
            if(viv) viv.estado = 'pendiente';
        }

        // Transicion a completada -> vivienda lista
        if(newState === 'completada') {
            data.alertas.unshift({ id: Date.now(), tipo: 'lista', mensaje: `Limpieza terminada: ${vivTitle}`, time: 'Hace un instante' });
            if(data.alertas.length > 6) data.alertas.pop();
            if(viv) viv.estado = 'lista';
        }
        
        // Si se revierte una limpiada
        if(oldState === 'completada' && newState !== 'completada') {
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
                    ${i.estado !== 'Resuelta' ? `<button class="btn-primary" style="padding: 4px 8px; font-size: 11px;" onclick="resolverInc('${i.id}')">Resolver y Cerrar</button>` : `<button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;" disabled>Completada</button>`}
                </td>
            </tr>
        `;
    });
}

function renderMantenimiento() {
    // 1. Correctivo
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
                    ${m.estado.includes('Pendiente') ? `<button class="btn-primary" style="padding: 4px 10px;font-size:11px;" onclick="openFormModal('modal-tecnico', '${m.id}')">Asignar Cuadrilla</button>` : `<button class="btn-secondary" disabled style="padding: 4px 10px;font-size:11px;opacity:0.5;">Intervención Programada</button>`}
                </td>
            </tr>
        `;
    });

    // 2. Preventivo Bimestral
    const prevList = document.getElementById('mant-preventivo-list');
    prevList.innerHTML = '';
    data.mantenimientoPreventivo.forEach(p => {
        let sc = p.estado === 'Al día' ? 'bg-success' : 'bg-danger';
        prevList.innerHTML += `
            <tr>
                <td><strong>${p.viv}</strong></td>
                <td><i class="ph ph-calendar"></i> ${p.ultRev}</td>
                <td><i class="ph ph-calendar-blank"></i> <strong>${p.proxRev}</strong> <br><small class="text-muted">(Bimestral)</small></td>
                <td>${p.elementos}</td>
                <td>${getBadge(p.estado, sc)}</td>
                <td>
                    <button class="btn-secondary" style="padding:4px 8px; font-size:11px;" onclick="alert('Ejecutando Revisión...')">Certificar</button>
                </td>
            </tr>
        `;
    });
}

function renderInventarioMacro() {
    // 1. Almacen Central
    const alGrid = document.getElementById('almacen-hub-grid');
    alGrid.innerHTML = `
        <div class="kpi-card stock-card"><div class="kpi-title">Sets de Sábanas</div>
            <div class="kpi-value" id="stock-sabanas">${data.inventarioCentral.sabanas}<span> pkts</span></div>
            ${getBadge('Stock Estable', 'bg-success')}
        </div>
        <div class="kpi-card stock-card"><div class="kpi-title">Toallas Balneario</div>
            <div class="kpi-value" id="stock-toallas">${data.inventarioCentral.toallas}<span> uds</span></div>
            ${data.inventarioCentral.toallas < 20 ? getBadge('Bajo Mínimo (Quiebre)', 'bg-danger') : getBadge('Stock Estable', 'bg-success')}
        </div>
        <div class="kpi-card stock-card"><div class="kpi-title">Químicos Limpieza</div>
            <div class="kpi-value">${data.inventarioCentral.quimicos}<span> barriles</span></div>
            ${getBadge('Requiere Revisión', 'bg-warning')}
        </div>
        <div class="kpi-card stock-card"><div class="kpi-title">Amenities Welcome</div>
            <div class="kpi-value">${data.inventarioCentral.amenities}<span> sets</span></div>
            ${getBadge('Stock Estable', 'bg-success')}
        </div>
    `;

    // 2. Logística Proveedores y Camiones
    const provList = document.getElementById('proveedores-list');
    provList.innerHTML = '';
    data.proveedores.forEach(p => {
        provList.innerHTML += `<tr><td><strong>${p.nombre}</strong><br><small>${p.contacto}</small></td><td>Freq: ${p.recogen}</td><td>${getBadge(p.estado, p.estado.includes('Servicio')?'bg-success':'bg-warning')}</td></tr>`;
    });
    
    const camList = document.getElementById('camiones-list');
    camList.innerHTML = '';
    data.camiones.forEach(c => {
        camList.innerHTML += `<tr><td><strong>${c.ruta}</strong><br><small>${c.matricula} (${c.driver})</small></td><td>${getBadge(c.estado, c.estado.includes('Reparto')?'bg-primary':'bg-warning')}</td></tr>`;
    });

    // 3. Faltas en Vivienda
    const casList = document.getElementById('inventario-casas-list');
    casList.innerHTML = '';
    data.inventarioCasas.forEach(c => {
        let gTag = c.grav === 'Alta' ? 'bg-danger' : 'bg-warning';
        casList.innerHTML += `<tr><td><strong>${c.casa}</strong></td><td>${c.deficit}</td><td>${getBadge(c.grav, gTag)}</td><td>${c.accion}</td></tr>`;
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
    renderInventarioMacro();
    renderUsuarios();
}

function initApp() {
    setupNavigation();
    renderTodo();
}
