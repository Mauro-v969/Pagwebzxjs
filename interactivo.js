/**
 * Módulo: DEWE-20 - Diseño y elaboración de páginas web
 * Alumno: Anónimo | Grupo: 6205
 * Docente: Rogelio Sánchez López
 * Archivo: interactivo.js (Versión 2.0 - Motor Reactivo Estético)
 */

const GLOBAL_LOG = "TECHVENTA_CORE_v2.0: ";
console.log(GLOBAL_LOG + "Inicializando Master Script v2.0...");

// Variables de estado del ecosistema (Reactividad nativa)
let estadoAplicacion = {
    carritoCantidad: 0,
    modoOscuro: false,
    colorSeleccionadoStudent: '#7f8c8d',
    colorSeleccionadoPro: '#34495e'
};

document.addEventListener("DOMContentLoaded", function() {
    console.log(GLOBAL_LOG + "DOM estructurado. Iniciando mutaciones de interfaz...");
    
    // Inicializadores de entornos específicos
    const formulario = document.getElementById("formulario-contacto");
    if (formulario) formulario.addEventListener("submit", enValidarFormulario);

    if (document.getElementById("indicador-home") || document.getElementById("cabecera-principal")) {
        establecerSaludoCorporativo();
    }

    // Ejecución obligatoria de la capa estética avanzada
    inyectarCapaVisualPro();
});

/* ==========================================================================
   SECCIÓN 1: EVENTOS REACTIVOS Y NAVEGACIÓN
   ========================================================================== */

function establecerSaludoCorporativo() {
    const hora = new Date().getHours();
    let saludo = "¡Buenas noches! Tu actualización tecnológica no se detiene.";
    
    if (hora >= 6 && hora < 12) saludo = "¡Buenos días! Conoce nuestras ofertas matutinas.";
    else if (hora >= 12 && hora < 19) saludo = "¡Buenas tardes! Explora las mejores laptops académicas.";
    
    console.log(GLOBAL_LOG + "Saludo del sistema unificado: " + saludo);
}

function agregarAlCarritoExpress(nombreProducto) {
    estadoAplicacion.carritoCantidad++;
    
    // Actualización reactiva del DOM inmediato
    const contenedorContador = document.querySelector("#enlace-carrito span");
    if (contenedorContador) {
        contenedorContador.innerText = estadoAplicacion.carritoCantidad;
        contenedorContador.style.transform = "scale(1.3)";
        setTimeout(() => contenedorContador.style.transform = "scale(1)", 200);
    }
    
    // Notificación flotante no invasiva en lugar de un alert clásico molesto
    mostrarNotificacionFlotante(`🛒 ${nombreProducto} añadido al carrito.`);
}

function mostrarNotificacionFlotante(mensaje) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; background: #0056b3; 
        color: white; padding: 12px 25px; border-radius: 30px; font-family: Arial;
        box-shadow: 0 10px 20px rgba(0,0,0,0.3); z-index: 10000; font-weight: bold;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
    `;
    toast.innerText = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

/* ==========================================================================
   SECCIÓN 2: VARIACIONES DE PRODUCTO Y FILTRADO
   ========================================================================== */

function cambiarColorEquipo(tipo, codigoHex, nombreColor) {
    const tarjeta = document.getElementById('producto-' + tipo);
    const imagen = document.getElementById('img-' + tipo);
    
    if (tarjeta && imagen) {
        tarjeta.style.borderColor = codigoHex;
        tarjeta.style.boxShadow = `0 15px 30px ${codigoHex}33`;
        imagen.style.transform = "scale(1.03)";
        setTimeout(() => imagen.style.transform = "scale(1)", 300);
        
        if (tipo === 'student') estadoAplicacion.colorSeleccionadoStudent = codigoHex;
        if (tipo === 'pro') estadoAplicacion.colorSeleccionadoPro = codigoHex;
        
        console.log(GLOBAL_LOG + `Variación [${tipo}] cambiada a ${nombreColor}`);
    }
}

function ordenarProductosPorPrecio() {
    const criterio = document.getElementById("control-orden").value;
    if (criterio === "DEF") return;

    const contenedorGrid = document.getElementById("grid-laptops");
    const items = Array.from(document.querySelectorAll(".tarjeta-producto"));

    items.sort((a, b) => {
        const precioA = parseFloat(a.getAttribute("data-precio"));
        const precioB = parseFloat(b.getAttribute("data-precio"));
        return criterio === "MENOR" ? precioA - precioB : precioB - precioA;
    });

    if (contenedorGrid) {
        contenedorGrid.style.opacity = "0.3";
        setTimeout(() => {
            // Reordenación limpia manteniendo las estructuras de tablas estables
            const filaUnica = contenedorGrid.querySelector('tr');
            if (filaUnica) {
                filaUnica.innerHTML = "";
                items.forEach(item => filaUnica.appendChild(item));
            }
            contenedorGrid.style.opacity = "1";
        }, 250);
    }
}

/* ==========================================================================
   SECCIÓN 3: CONTROL DE PRESUPUESTOS Y ASISTENCIA
   ========================================================================== */

function calcularPresupuestoExpress() {
    const entrada = prompt("¿A cuántos equipos de cómputo deseas aplicarles Mantenimiento Preventivo?:");
    if (!entrada) return;

    const cantidad = parseInt(entrada.trim());
    if (isNaN(cantidad) || cantidad <= 0 || cantidad > 50) {
        alert("Por favor, introduce una cifra numérica entera entre 1 y 50.");
        return;
    }

    const COSTO_UNIDAD = 450.00;
    const subtotal = cantidad * COSTO_UNIDAD;
    const descuento = cantidad >= 5 ? subtotal * 0.10 : 0;
    const total = subtotal - descuento;

    let cajaContenedora = document.getElementById("contenedor-calculo");
    if (!cajaContenedora) {
        cajaContenedora = document.createElement('div');
        cajaContenedora.id = "contenedor-calculo";
        cajaContenedora.style.cssText = "margin: 20px auto; width: 90%; padding: 25px; border-radius: 15px; text-align: left; box-shadow: 0 10px 25px rgba(0,0,0,0.05); transition: all 0.4s;";
        const insercion = document.getElementById("grid-laptops") || document.body;
        insercion.parentNode.insertBefore(cajaContenedora, insercion.nextSibling);
    }

    // Estilos adaptados dinámicamente según el modo (Claro/Oscuro) activo
    cajaContenedora.style.backgroundColor = estadoAplicacion.modoOscuro ? "#1e293b" : "#f0fdf4";
    cajaContenedora.style.border = estadoAplicacion.modoOscuro ? "1px solid #334155" : "1px solid #bbf7d0";
    cajaContenedora.style.color = estadoAplicacion.modoOscuro ? "#f1f5f9" : "#1e293b";

    cajaContenedora.innerHTML = `
        <h3 style="margin-top:0; color: #28a745;">🏁 Cotización Estructurada v2.0</h3>
        <p>🔹 Equipos Solicitados: <b>${cantidad} unidades</b></p>
        <p>🔹 Costo por Unidad: $${COSTO_UNIDAD.toFixed(2)} MXN</p>
        <p>🔹 Descuento Corporativo (10%): -$${descuento.toFixed(2)} MXN</p>
        <hr style="border:0; border-top: 1px dashed #ccc; margin: 15px 0;">
        <p style="font-size: 1.2rem;">Total Estimado Netos: <span style="color:#28a745; font-weight:bold;">$${total.toFixed(2)} MXN</span></p>
    `;
    cajaContenedora.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ==========================================================================
   SECCIÓN 4: MOTOR DE TRATAMIENTO ESTÉTICO AVANZADO (INTERFAZ MODERNA)
   ========================================================================== */

function inyectarCapaVisualPro() {
    // 1. Crear hojas de estilo virtuales para transiciones fluidas de CSS moderno
    const estiloMecanico = document.createElement('style');
    estiloMecanico.innerHTML = `
        @keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }
        .tarjeta-producto, #banner-recuadro, #barra-lateral, input, select { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; }
        #enlace-carrito span { transition: transform 0.2s ease; display: inline-block; background: #e74c3c; padding: 2px 7px; border-radius: 10px; font-size: 11px; }
    `;
    document.head.appendChild(estiloMecanico);

    // 2. Modificación de los inputs clónicos del DOM
    const entradas = document.querySelectorAll('input[type="text"], select');
    entradas.forEach(input => {
        input.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
        input.addEventListener('focus', () => {
            input.style.borderColor = "#0056b3";
            input.style.boxShadow = "0 0 0 3px rgba(0,86,179,0.25)";
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = "";
            input.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
        });
    });

    // 3. Hover Avanzado en Tarjetas de Catálogo
    const tarjetas = document.querySelectorAll('.tarjeta-producto');
    tarjetas.forEach(tarjeta => {
        tarjeta.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
        tarjeta.addEventListener('mouseenter', () => {
            tarjeta.style.transform = "translateY(-8px)";
            tarjeta.style.boxShadow = "0 20px 30px rgba(0,0,0,0.12)";
        });
        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.style.transform = "translateY(0)";
            tarjeta.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
        });
    });

    // 4. Mecánica del Conmutador de Modo Oscuro Avanzado 2.0
    const botonTema = document.getElementById('btn-modo-lectura');
    if (botonTema) {
        botonTema.addEventListener('click', () => {
            estadoAplicacion.modoOscuro = !estadoAplicacion.modoOscuro;
            const body = document.body;
            const cabecera = document.getElementById('cabecera-principal');
            const barraLateral = document.getElementById('barra-lateral');
            
            if (estadoAplicacion.modoOscuro) {
                body.style.backgroundColor = "#0f172a";
                body.style.color = "#f8fafc";
                if (cabecera) { cabecera.style.backgroundColor = "#1e293b"; cabecera.style.borderColor = "#38bdf8"; }
                if (barraLateral) { barraLateral.style.backgroundColor = "#1e293b"; barraLateral.style.borderColor = "#334155"; }
                tarjetas.forEach(t => { t.style.backgroundColor = "#1e293b"; t.style.borderColor = "#334155"; });
                botonTema.innerText = "☀️ Modo Claro";
                botonTema.style.background = "#f1f5f9";
                botonTema.style.color = "#0f172a";
            } else {
                body.style.backgroundColor = "#FFFFFF";
                body.style.color = "#333333";
                if (cabecera) { cabecera.style.backgroundColor = "#FFFFFF"; cabecera.style.borderColor = "#0056b3"; }
                if (barraLateral) { barraLateral.style.backgroundColor = "#F4F7F6"; barraLateral.style.borderColor = "#E0E0E0"; }
                tarjetas.forEach(t => { t.style.backgroundColor = "#FFFFFF"; t.style.borderColor = "#EEE"; });
                botonTema.innerText = "🕶️ Modo Oscuro";
                botonTema.style.background = "#34495e";
                botonTema.style.color = "white";
            }
        });
    }

    // 5. Motor de filtrado inmediato predictivo en el Buscador
    const buscador = document.getElementsByName('search')[0];
    if (buscador) {
        buscador.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            tarjetas.forEach(t => {
                const visible = t.textContent.toLowerCase().includes(val);
                t.style.display = visible ? "" : "none";
                t.style.opacity = visible ? "1" : "0";
            });
        });
    }
}

// Stubs de seguridad obligatorios contra fallos estructurales
function enValidarFormulario(e) { console.log("Formulario analizado."); }
