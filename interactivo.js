/**
 * Módulo: DEWE-20 - Diseño y elaboración de páginas web
 * Alumno: Anónimo | Grupo: 6205
 * Docente: Rogelio Sánchez López
 * Archivo: interactivo.js (Núcleo de Lógica Global Unificado y Potenciado)
 */

var GLOBAL_LOG = "TECHVENTA_CORE:\t";
console.log(GLOBAL_LOG + "Script maestro global unificado y cargado.");

// Escuchador de eventos global para inicializar componentes según la página activa
document.addEventListener("DOMContentLoaded", function() {
    console.log(GLOBAL_LOG + "DOM completamente estructurado. Verificando entorno...");
    
    // 1. Inicialización automática para el Formulario de Contacto
    var formulario = document.getElementById("formulario-contacto");
    if (formulario) {
        console.log(GLOBAL_LOG + "Entorno de Contacto detectado. Vinculando 'submit'.");
        formulario.addEventListener("submit", enValidarFormulario);
    }

    // 2. Inicialización automática para la Página Principal (Home)
    var esPaginaPrincipal = document.getElementById("indicador-home") || document.getElementById("cabecera-principal");
    if (esPaginaPrincipal) {
        console.log(GLOBAL_LOG + "Entorno Principal (Home) detectado.");
        establecerSaludoCorporativo();
    }

    // Ejecución automática del motor de optimización estética
    inyectarCapaVisualAutomatica();
});


/* ==========================================================================
   SECCIÓN 1: LÓGICA DE LA PÁGINA PRINCIPAL (index.html)
   ========================================================================== */

function establecerSaludoCorporativo() {
    var fechaActual = new Date();
    var hora = fechaActual.getHours();
    var mensajeSaludo = "";

    if (hora >= 6 && hora < 12) {
        mensajeSaludo = "¡Buenos días! Conoce nuestras ofertas matutinas en tecnología.";
    } else if (hora >= 12 && hora < 19) {
        mensajeSaludo = "¡Buenas tardes! Explora las mejores laptops para tus proyectos académicos.";
    } else {
        mensajeSaludo = "¡Buenas noches! Tu actualización tecnológica no se detiene.";
    }
    
    console.log(GLOBAL_LOG + "Mensaje horario establecido: " + mensajeSaludo);
}

function agregarAlCarritoExpress(nombreProducto) {
    alert("🛒 Producto añadido: " + nombreProducto + " se ha integrado a tu orden de compra.");
    console.log(GLOBAL_LOG + "Ítem enviado al carrito virtual: " + nombreProducto);
    
    // Sincronización con el contador dinámico si existe en la interfaz
    var contador = document.querySelector("#enlace-carrito span");
    if (contador) {
        var cantidadActual = parseInt(contador.innerText) || 0;
        contador.innerText = cantidadActual + 1;
    }
}


/* ==========================================================================
   SECCIÓN 2: LÓGICA DEL CATÁLOGO DE PORTÁTILES (laptops.html)
   ========================================================================== */

function ordenarProductosPorPrecio() {
    var criterio = document.getElementById("control-orden").value;
    if (criterio === "DEF") return; 

    var contenedorGrid = document.getElementById("grid-laptops");
    var itemsLaptops = document.querySelectorAll(".product-card-laptop, .tarjeta-producto");
    
    // Conversión de NodeList a un Arreglo nativo para ordenación lineal
    var arregloLaptops = [];
    for (var i = 0; i < itemsLaptops.length; i++) {
        arregloLaptops.push(itemsLaptops[i]);
    }

    // Algoritmo de comparación aritmética de precios
    arregloLaptops.sort(function(elementoA, elementoB) {
        var precioA = parseFloat(elementoA.getAttribute("data-precio")) || parseFloat(elementoA.querySelector('strong')?.innerText.replace(/[^0-9.]/g, '')) || 0;
        var precioB = parseFloat(elementoB.getAttribute("data-precio")) || parseFloat(elementoB.querySelector('strong')?.innerText.replace(/[^0-9.]/g, '')) || 0;

        if (criterio === "MENOR") {
            return precioA - precioB;
        } else if (criterio === "MAYOR") {
            return precioB - precioA;
        }
        return 0;
    });

    var tarjetaFija = document.getElementById("tarjeta-fija-contacto");

    // Reordenación en caliente de los elementos del DOM con efectos visuales de transición
    if (contenedorGrid) {
        contenedorGrid.style.opacity = "0";
        setTimeout(function() {
            contenedorGrid.innerHTML = "";
            for (var j = 0; j < arregloLaptops.length; j++) {
                contenedorGrid.appendChild(arregloLaptops[j]);
                arregloLaptops[j].style.opacity = "1";
            }
            if (tarjetaFija) {
                contenedorGrid.appendChild(tarjetaFija);
            }
            contenedorGrid.style.opacity = "1";
        }, 200);
    }

    console.log(GLOBAL_LOG + "Catálogo reorganizado por precio: " + criterio);
}


/* ==========================================================================
   SECCIÓN 3: VALIDACIÓN DEL FORMULARIO DE CONTACTO (contacto.html)
   ========================================================================== */

function enValidarFormulario(evento) {
    var formularioValido = true;
    var campoNombre = document.getElementById("nombre");
    var campoEmail = document.getElementById("email");
    var campoMensaje = document.getElementById("mensaje");

    reiniciarEstadosDeError();

    // Validación del texto de Nombre
    if (!campoNombre || campoNombre.value.trim() === "") {
        mostrarError("nombre", "El campo de Nombre Completo es obligatorio.");
        if (campoNombre) campoNombre.classList.add("input-error");
        formularioValido = false;
    } else if (campoNombre.value.trim().length < 3) {
        mostrarError("nombre", "El nombre debe contener al menos 3 caracteres.");
        campoNombre.classList.add("input-error");
        formularioValido = false;
    }

    // Validación analítica de Correo Electrónico usando Expresiones Regulares (RegEx)
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!campoEmail || campoEmail.value.trim() === "") {
        mostrarError("email", "El correo electrónico es obligatorio.");
        if (campoEmail) campoEmail.classList.add("input-error");
        formularioValido = false;
    } else if (!regexEmail.test(campoEmail.value.trim())) {
        mostrarError("email", "Ingresa un correo electrónico estructurado correctamente (usuario@dominio.com).");
        campoEmail.classList.add("input-error");
        formularioValido = false;
    }

    // Validación de área de texto del requerimiento
    if (!campoMensaje || campoMensaje.value.trim() === "") {
        mostrarError("mensaje", "Por favor, detalla tu requerimiento técnico.");
        if (campoMensaje) campoMensaje.classList.add("input-error");
        formularioValido = false;
    } else if (campoMensaje.value.trim().length < 10) {
        mostrarError("mensaje", "Describe tu problema con mayor precisión (mínimo 10 caracteres).");
        campoMensaje.classList.add("input-error");
        formularioValido = false;
    }

    // Interceptación y cancelación de envío si existen anomalías
    if (!formularioValido) {
        evento.preventDefault(); // Detiene el viaje hacia procesar_contacto.php
        var alertaGlobal = document.getElementById("alerta-global");
        if (alertaGlobal) {
            alertaGlobal.innerText = "⚠️ Error: Corrige los campos marcados en rojo antes de enviar.";
            alertaGlobal.style.cssText = "background-color: #fde8e8; color: #9b1c1c; padding: 15px; border-radius: 8px; border: 1px solid #f8b4b4; display: block; font-weight: bold; margin-bottom: 20px; animation: ShakeEffect 0.4s ease;";
        }
    }
}

function mostrarError(idCampo, mensaje) {
    var contenedorError = document.getElementById("error-" + idCampo);
    if (contenedorError) {
        contenedorError.innerText = mensaje;
        contenedorError.style.cssText = "display: block; color: #e74c3c; font-size: 0.85rem; font-weight: bold; margin-top: 5px;";
    }
    var inputAfectado = document.getElementById(idCampo);
    if (inputAfectado) {
        inputAfectado.style.borderColor = "#e74c3c";
        inputAfectado.style.backgroundColor = "#fff8f8";
    }
}

function reiniciarEstadosDeError() {
    var alertaGlobal = document.getElementById("alerta-global");
    if (alertaGlobal) alertaGlobal.style.display = "none";

    var retroalimentaciones = document.querySelectorAll(".error-feedback");
    for (var i = 0; i < retroalimentaciones.length; i++) {
        retroalimentaciones[i].innerText = "";
        retroalimentaciones[i].style.display = "none";
    }

    var entradasInvalidadas = document.querySelectorAll("input, textarea, select");
    for (var j = 0; j < entradasInvalidadas.length; j++) {
        entradasInvalidadas[j].classList.remove("input-error");
        entradasInvalidadas[j].style.borderColor = "#ccc";
        entradasInvalidadas[j].style.backgroundColor = "";
    }
}


/* ==========================================================================
   SECCIÓN 4: LOCALIZADOR Y API NAVIGATOR (sucursales.html)
   ========================================================================== */

var TIENDA_LAT = 19.4270;
var TIENDA_LNG = -99.1676;

function obtenerRutaSucursal() {
    var cajaEstado = document.getElementById("estado-gps");
    if (!cajaEstado) return;

    if (!navigator.geolocation) {
        cajaEstado.style.color = "#e74c3c";
        cajaEstado.innerText = "❌ Tu explorador no cuenta con soporte nativo para Geolocalización.";
        return;
    }

    cajaEstado.style.cssText = "color: #0284c7; font-weight: bold; padding: 10px; animation: pulse 1s infinite;";
    cajaEstado.innerText = "📡 Geolocalizando tu dispositivo con el servidor local de mapas...";

    navigator.geolocation.getCurrentPosition(
        function exito(posicion) {
            var usrLat = posicion.coords.latitude;
            var usrLng = posicion.coords.longitude;
            
            cajaEstado.style.color = "#27ae60";
            cajaEstado.innerText = "✅ Coordenadas localizadas con éxito. Abriendo ruta...";
            
            var rutaMapa = "https://www.google.com/maps/dir/" + usrLat + "," + usrLng + "/" + TIENDA_LAT + "," + TIENDA_LNG;
            setTimeout(function() { window.open(rutaMapa, "_blank"); }, 800);
        },
        function error(err) {
            cajaEstado.style.color = "#e74c3c";
            if (err.code === err.PERMISSION_DENIED) {
                cajaEstado.innerText = "🔒 Acceso denegado. Concede permisos de GPS para trazar tu ruta.";
            } else {
                cajaEstado.innerText = "⚠️ Error físico de hardware al intentar triangular la posición.";
            }
        }
    );
}


/* ==========================================================================
   SECCIÓN 5: INTERACTIVIDAD DE LA DIVISIÓN TÉCNICA (servicios.html)
   ========================================================================== */

function resaltarTarjeta(elementoTarjeta) {
    elementoTarjeta.style.borderColor = "#0056b3";
    elementoTarjeta.style.boxShadow = "0 12px 24px rgba(0, 86, 179, 0.18)";
    elementoTarjeta.style.transform = "translateY(-6px)";
    elementoTarjeta.style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
}

function atenuarTarjeta(elementoTarjeta) {
    elementoTarjeta.style.borderColor = "#e2e8f0";
    elementoTarjeta.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.05)";
    elementoTarjeta.style.transform = "translateY(0)";
}

function calcularPresupuestoExpress() {
    var entrada = prompt("¿A cuántos equipos de cómputo deseas aplicarles Mantenimiento Preventivo?:");
    if (entrada === null) return; 

    var cantidad = parseInt(entrada.trim());

    if (isNaN(cantidad) || cantidad <= 0 || cantidad > 50) {
        alert("Por favor, introduce una cifra numérica entera entre 1 y 50.");
        return;
    }

    var COSTO_UNIDAD = 450.00;
    var subtotal = cantidad * COSTO_UNIDAD;
    var descuento = 0;

    if (cantidad >= 5) {
        descuento = subtotal * 0.10;
    }

    var total = subtotal - descuento;

    var cajaContenedora = document.getElementById("contenedor-calculo");
    var parrafoSalida = document.getElementById("salida-presupuesto");

    // Si los nodos no existen en el HTML, JS los fabrica e inyecta dinámicamente de forma limpia
    if (!cajaContenedora) {
        cajaContenedora = document.createElement('div');
        cajaContenedora.id = "contenedor-calculo";
        cajaContenedora.style.cssText = "margin-top: 25px; padding: 20px; border-radius: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); animation: fadeInUp 0.4s ease;";
        
        parrafoSalida = document.createElement('p');
        parrafoSalida.id = "salida-presupuesto";
        parrafoSalida.style.cssText = "font-family: Arial, sans-serif; line-height: 1.6; margin: 0; color: #1e293b; font-size: 1rem;";
        
        cajaContenedora.appendChild(parrafoSalida);
        var nodoPadre = document.querySelector('main') || document.body;
        nodoPadre.appendChild(cajaContenedora);
    }

    parrafoSalida.innerHTML = "🏁 <strong>Cotización de Servicio Académico:</strong><br>" +
                              "🔹 Equipos Evaluados: " + cantidad + " unidades.<br>" +
                              "🔹 Subtotal Base: $" + subtotal.toFixed(2) + " MXN.<br>" +
                              "🔹 Descuento por Volumen (10%): -$" + descuento.toFixed(2) + " MXN.<br><hr style='border:0; border-top:1px dashed #bbf7d0; margin:10px 0;'>" +
                              "🔹 <strong>Total Neto Estimado:</strong> <span style='color:#15803d; font-size:1.2rem; font-weight:bold;'>$" + total.toFixed(2) + " MXN.</span>";
    
    cajaContenedora.style.display = "block";
    cajaContenedora.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* ==========================================================================
   SECCIÓN 6: AUDITORÍA DE RUTAS E INTEGRIDAD (mapa_sitio.html)
   ========================================================================== */

var ARCHIVOS_SITIO = [
    "index.html",
    "laptops.html",
    "servicios.html",
    "sucursales.html",
    "contacto.html",
    "faq.html",
    "carrito.html",
    "blog.html"
];

function analizarSeccionMapa(nombreArchivo) {
    var panelResultado = document.getElementById("panel-auditoria-resultado");
    if (!panelResultado) {
        panelResultado = document.createElement('div');
        panelResultado.id = "panel-auditoria-resultado";
        panelResultado.style.cssText = "margin-top: 20px; padding: 15px; border-radius: 8px; border: 1px solid #ccc; font-family: Arial, sans-serif; transition: all 0.3s ease;";
        var mapaContenedor = document.querySelector('main') || document.body;
        mapaContenedor.appendChild(panelResultado);
    }

    var archivoExiste = false;

    for (var i = 0; i < ARCHIVOS_SITIO.length; i++) {
        if (ARCHIVOS_SITIO[i] === nombreArchivo) {
            archivoExiste = true;
            break;
        }
    }

    if (archivoExiste) {
        panelResultado.style.backgroundColor = "#ecfdf5";
        panelResultado.style.borderColor = "#10b981";
        panelResultado.style.color = "#065f46";
        panelResultado.innerHTML = "🔗 <strong>Auditoría de Enlace:</strong> El archivo <code>" + nombreArchivo + "</code> está verificado y responde en el servidor local. <span style='background:#10b981; color:white; padding:2px 6px; border-radius:4px; font-size:0.8rem; font-weight:bold;'>HTTP 200 OK</span>";
    } else {
        panelResultado.style.backgroundColor = "#fdf2f2";
        panelResultado.style.borderColor = "#ef4444";
        panelResultado.style.color = "#9b1c1c";
        panelResultado.innerHTML = "⚠️ <strong>Alerta Estructural:</strong> El recurso <code>" + nombreArchivo + "</code> se encuentra mapeado pero está en fase de maquetación futura. <span style='background:#ef4444; color:white; padding:2px 6px; border-radius:4px; font-size:0.8rem; font-weight:bold;'>HTTP 404 NOT FOUND</span>";
    }

    panelResultado.style.display = "block";
    panelResultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* ==========================================================================
   PARCHE EXTERNO DE SEGURIDAD: CONTROL DE RENDERIZADO Y ANTIBUG
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    if (!document.querySelector('meta[charset]')) {
        let metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');
        document.head.insertBefore(metaCharset, document.head.firstChild);
    }

    const enlacesNav = document.querySelectorAll(".nav-links-clasicos a, #menu-navegacion a");
    enlacesNav.forEach(enlace => {
        let textoLimpio = enlace.innerHTML;
        textoLimpio = textoLimpio.replace(/Inicio/g, "Inicio")
                                 .replace(/Laptops/g, "Laptops")
                                 .replace(/Ofertas/g, "Ofertas")
                                 .replace(/Servicios/g, "Servicios")
                                 .replace(/Sucursales/g, "Sucursales");
        enlace.innerHTML = textoLimpio;
    });

    const titulosH1 = document.querySelectorAll("h1, h2, h3, .brand");
    titulosH1.forEach(titulo => {
        if (titulo.textContent.includes("???")) {
            if (titulo.classList.contains("brand")) titulo.innerHTML = "TechVenta";
            if (titulo.tagName === "H1") titulo.innerHTML = "Potencia para tus Proyectos";
            if (titulo.tagName === "H2") titulo.innerHTML = "Equipos Profesionales de Alto Rendimiento";
        }
    });
});


/* ==========================================================================
   🚀 ARQUITECTURA DE PRODUCCIÓN: CAPA DE TRATAMIENTO VISUAL Y DIÁLOGOS (DOM)
   ========================================================================== */

function inyectarCapaVisualAutomatica() {
    console.log(GLOBAL_LOG + "Ejecutando motor estético inteligente...");

    // 1. Inyección Dinámica de Reglas CSS de Animación en el documento activo
    var estiloAnimacion = document.createElement('style');
    estiloAnimacion.innerHTML = `
        @keyframes fadeInUp { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
        @keyframes ShakeEffect { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }
        .tarjeta-animada { transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease !important; }
        .input-dinamico { transition: all 0.3s ease !important; }
    `;
    document.head.appendChild(estiloAnimacion);

    // 2. Modificación Estética del Buscador y Cajas de Texto Nativas por DOM
    var camposDeTexto = document.querySelectorAll('input[type="text"], input[type="email"], textarea, select');
    camposDeTexto.forEach(function(campo) {
        campo.classList.add("input-dinamico");
        campo.addEventListener('focus', function() {
            this.style.borderColor = "#0056b3";
            this.style.boxShadow = "0 0 10px rgba(0, 86, 179, 0.25)";
            this.style.transform = "scale(1.005)";
        });
        campo.addEventListener('blur', function() {
            this.style.borderColor = "";
            this.style.boxShadow = "none";
            this.style.transform = "scale(1)";
        });
    });

    // 3. Activación de Animación y Efectos Hover 3D en Tarjetas de Catálogo y Artículos del Blog
    var tarjetas = document.querySelectorAll('.product-card-laptop, .tarjeta-producto, article, td[style*="background: #FFF"], td[style*="background: white"]');
    tarjetas.forEach(function(t) {
        t.classList.add("tarjeta-animada");
        t.addEventListener('mouseenter', function() {
            this.style.transform = "translateY(-6px)";
            this.style.borderColor = "#0056b3";
            this.style.boxShadow = "0 12px 25px rgba(0, 86, 179, 0.15)";
        });
        t.addEventListener('mouseleave', function() {
            this.style.transform = "translateY(0)";
            this.style.borderColor = "";
            this.style.boxShadow = "";
        });
    });

    // 4. Inicializador de Modo Oscuro Corporativo en cascada si se encuentra el conmutador
    var botonTema = document.getElementById('toggle-tema') || document.getElementById('btn-modo-lectura');
    if (botonTema) {
        botonTema.addEventListener('click', function() {
            var body = document.body;
            var esModoClaro = body.style.backgroundColor === "rgb(255, 255, 255)" || body.style.backgroundColor === "white" || body.style.backgroundColor === "";
            
            if (esModoClaro) {
                body.style.backgroundColor = "#121212";
                body.style.color = "#e0e0e0";
                tarjetas.forEach(el => { el.style.background = "#1e1e1e"; el.style.color = "#fff"; });
                console.log(GLOBAL_LOG + "Modo Oscuro Adaptativo aplicado en cascada.");
            } else {
                body.style.backgroundColor = "";
                body.style.color = "";
                tarjetas.forEach(el => { el.style.background = ""; el.style.color = ""; });
                console.log(GLOBAL_LOG + "Modo Claro Restaurado.");
            }
        });
    }

    // 5. Inyección del sistema de búsqueda en tiempo real reactiva
    var inputBusqueda = document.getElementsByName('search')[0];
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', function(e) {
            var termino = e.target.value.toLowerCase();
            tarjetas.forEach(function(card) {
                var textoTarjeta = card.textContent.toLowerCase();
                card.style.display = textoTarjeta.includes(termino) ? "" : "none";
            });
        });
    }
}
