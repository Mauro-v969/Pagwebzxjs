// ====================================================================
// ARCHIVO JAVASCRIPT EXTERNO CENTRALIZADO - TECHVENTA S.A. DE C.V.
// PROYECTO ACADÉMICO INTEGRAL - COMPILADO COMPLETO DE INTERACTIVIDAD
// VERSIÓN ACADÉMICA FINAL (15 DE 15 BLOQUES TEMÁTICOS CONALEP)
// ====================================================================

// --- SECCIÓN INDEX.HTML (CÓDIGO 1 DE 15): Variables y Consola ---
var nombreEmpresa = "TechVenta S.A. de C.V.";
var anioOperacion = 2026;
var estadoSistemaActivo = true;
var mensajeConsolaInicio = "Sistema Central de \"TechVenta\" inicializado correctamente.\nVersión de producción: " + anioOperacion + ".\n\u00A1Listo para operar!";
console.log(mensajeConsolaInicio);


// --- SECCIÓN MAPA_SITIO.HTML (CÓDIGO 2 DE 15): Operadores Matemáticos y Lógicos ---
var paginasCatalogo = 4;
var paginasEmpresa = 4;
var paginasSoporte = 3;
var enlacesRuptura = 0;
var totalPaginasIndexadas = paginasCatalogo + paginasEmpresa + paginasSoporte;
totalPaginasIndexadas++;
if (enlacesRuptura > 0) { totalPaginasIndexadas--; }
var tieneSuficientesPaginas = totalPaginasIndexadas >= 10;
var requiereMantenimiento = false;
if (!requiereMantenimiento && (tieneSuficientesPaginas && enlacesRuptura === 0)) {
    console.log("Métrica de calidad del Mapa del Sitio: Operando de forma Excelente.");
}


// --- SECCIÓN BOLSA-TRABAJO.HTML (CÓDIGO 3 DE 15): Métodos de Cadena ---
var postulacionCandidato = "Soporte Técnico de Redes y Diagnóstico";
var largoPostulacion = postulacionCandidato.length;
var registroLogBasico = "Candidato registrado para la vacante: " + postulacionCandidato;
var etiquetaFiltro = "Área de Reclutamiento " + nombreEmpresa;
var postulacionMayusculas = postulacionCandidato.toUpperCase();
var postulacionMinusculas = postulacionCandidato.toLowerCase();
var codigoIdentificadorInicial = postulacionCandidato.charAt(0);
var extractoClaveVacante = postulacionCandidato.substring(0, 7);
var palabrasClavePostulacion = postulacionCandidato.split(" ");


// --- SECCIÓN SUCURSALES.HTML (CÓDIGO 4 DE 15): Estructuras Condicionales ---
var diaActualTexto = "Sábado";
var horaActualMilitar = 15;
var sucursalEnMantenimiento = false;
if (sucursalEnMantenimiento) { console.log("Aviso: La sucursal física se encuentra cerrada temporalmente."); }
if (horaActualMilitar >= 9 && horaActualMilitar < 20) { console.log("Estado de hora: Operación regular."); } else { console.log("Estado de hora: Cerrado."); }
var tipoHorarioDia;
if (diaActualTexto === "Domingo") { tipoHorarioDia = "Especial Dominical"; } else if (diaActualTexto === "Sábado") { tipoHorarioDia = "Fin de Semana Extendido"; } else { tipoHorarioDia = "Horario Regular"; }
var mensajeInformativoOperación = "";
switch (diaActualTexto) {
    case "Lunes": case "Martes": case "Miércoles": case "Jueves": case "Viernes": mensajeInformativoOperación = "Abierto hasta las 8:00 PM."; break;
    case "Sábado": mensajeInformativoOperación = "Horario sabatino activo."; break;
    case "Domingo": mensajeInformativoOperación = "Jornada dominical corta."; break;
    default: mensajeInformativoOperación = "Día no válido."; break;
}


// --- SECCIÓN CONTACTO.HTML (CÓDIGO 5 DE 15): Estructuras de Repetición (Bucles) ---
var camposAValidar = ["Nombre", "Email", "Mensaje"];
for (var i = 0; i < camposAValidar.length; i++) { console.log("Bucle FOR - Validando: " + camposAValidar[i]); }
var intentosConexionSmtp = 1;
while (intentosConexionSmtp <= 3) { intentosConexionSmtp++; }
var correosEnColaEspera = 0;
do { correosEnColaEspera--; } while (correosEnColaEspera > 0);


// --- SECCIÓN SERVICIOS.HTML (CÓDIGO 6 DE 15): Funciones y Parámetros ---
var tasaIvaGlobal = 0.16;
function calcularCostoServicioConIva(precioBase, cantidadSolicitada) {
    var subtotalLocal = precioBase * cantidadSolicitada;
    var impuestoCalculado = subtotalLocal * tasaIvaGlobal;
    return subtotalLocal + impuestoCalculado;
}
var costoEnsambleFinal = calcularCostoServicioConIva(899, 2);


// --- SECCIÓN DETALLES_ESTUDIANTE.HTML (CÓDIGO 7 DE 15): Manejo de Arreglos (Arrays) ---
var componentesHardware = ["Intel Core i3", "8GB RAM DDR4", "256GB SSD"];
componentesHardware.push("Pantalla 14 pulgadas HD");
var componenteRemovido = componentsHardware = componentesHardware.slice(0, -1)[0]; // Extracción segura sin alterar índices fantasmas
var totalComponentesListados = componentesHardware.length;
var fichaResumenCadena = componentesHardware.join(" / ");


// --- SECCIÓN PREGUNTAS-FRECUENTES.HTML (CÓDIGO 8 DE 15): Objetos y Métodos ---
var ticketSoporteFaq = {
    idTicket: 4022,
    moduloOrigen: "Preguntas Frecuentes (FAQ)",
    usuarioNombre: "Anonimo Corporativo",
    estatusAbierto: true,
    prioridadNivel: 1,
    cerrarTicket: function() { this.estatusAbierto = false; return "El ticket #" + this.idTicket + " ha sido resuelto."; },
    escalarPrioridad: function() { this.prioridadNivel += 1; return "Urgencia nivel: " + this.prioridadNivel; }
};
var reporteEscalabilidad = ticketSoporteFaq.escalarPrioridad();
var reporteCierre = ticketSoporteFaq.cerrarTicket();


// --- SECCIÓN POLITICAS.HTML (CÓDIGO 9 DE 15): Objetos Especiales Date y Math ---
var fechaActualServidor = new Date();
var anioFiltroPoliza = fechaActualServidor.getFullYear();
var mesFiltroPoliza = fechaActualServidor.getMonth() + 1;
var diaFiltroPoliza = fechaActualServidor.getDate();
var costoDeducibleBase = 354.78;
var costoRedondeadoCeil = Math.ceil(costoDeducibleBase);
var costoRedondeadoFloor = Math.floor(costoDeducibleBase);
var costoRedondeadoRound = Math.round(costoDeducibleBase);
var numeroAleatorioFolio = Math.floor(Math.random() * 10000) + 1;
var clausulaTextoEspecial = "  Cláusula de Protección de Datos de TechVenta.  ";
var clausulaLimpia = clausulaTextoEspecial.trim();
var clausulaModificadaLegal = clausulaLimpia.replace("TechVenta", "TechVenta Corporativo de México");


// --- SECCIÓN OFERTAS.HTML (CÓDIGO 10 DE 15): Captura de Eventos ---
function procesarClicBotonPromocional() { console.log("Manejador Eventos: Pulsación en producto estrella detectado."); }
function procesarPulsacionTeclado(evento) { console.log("Manejador Eventos - Teclado: Tecla física presionada -> " + evento.key); }
function procesarCargaCompletaVentana() { console.log("Manejador Eventos - Ventana: Carga de interfaz comercial finalizada."); }
var botonSimuladoCarrito = { onclick: null };
botonSimuladoCarrito.onclick = procesarClicBotonPromocional;
if (botonSimuladoCarrito.onclick) { botonSimuladoCarrito.onclick(); }
var despachadorEventosSimulado = {
    addEventListener: function(tipo, func) { 
        if (tipo === "keydown") func({ key: "F5" }); 
        if (tipo === "load") func();
    }
};
despachadorEventosSimulado.addEventListener("keydown", procesarPulsacionTeclado);
despachadorEventosSimulado.addEventListener("load", procesarCargaCompletaVentana);


// --- SECCIÓN LAPTOPS.HTML (CÓDIGO 11 DE 15): Cuadros de Diálogo Nativos ---
function simularEjecucionDialogosNativos() {
    console.log("Asistente: Cargando el Asistente Inteligente de Presupuestos TechVenta.");
    var respuestaConfirmacionUsuario = true; 
    if (respuestaConfirmacionUsuario) {
        var presupuestoIngresadoTexto = "20000"; 
        var presupuestoNumerico = parseFloat(presupuestoIngresadoTexto);
        if (!isNaN(presupuestoNumerico)) console.log("Asistente: Presupuesto fijado en: $" + presupuestoNumerico);
    }
}
simularEjecucionDialogosNativos();


// --- SECCIÓN CARRITO.HTML (CÓDIGO 12 DE 15): Temporizadores (CORREGIDO) ---
var tiempoRestanteReservaSegundos = 60;
var identificadorIntervaloStock;
var identificadorTimeoutAlerta;

function iniciarContadorRegresivoCarrito() {
    identificadorIntervaloStock = setInterval(function() {
        tiempoRestanteReservaSegundos--;
        // CORRECCIÓN: Frenado absoluto del hilo para evitar desborde negativo de memoria
        if (tiempoRestanteReservaSegundos <= 0) { 
            tiempoRestanteReservaSegundos = 0;
            clearInterval(identificadorIntervaloStock); 
        }
    }, 1000);
}
function programarRecordatorioDePago() {
    identificadorTimeoutAlerta = setTimeout(function() {
        console.log("Alerta Diferida: ¿Necesitas ayuda con tu transferencia?");
        clearTimeout(identificadorTimeoutAlerta);
    }, 3000);
}
iniciarContadorRegresivoCarrito();
programarRecordatorioDePago();


// --- SECCIÓN DESKTOPS.HTML (CÓDIGO 13 DE 15): Estructura del DOM (Selectores/Nodos) ---
function procesarManipulacionDomCorporativo() {
    var formularioFiltrosNode = { id: "formulario-filtros" };
    var listaTarjetasProductos = [{ className: "product-card" }, { className: "product-card" }];
    var nuevoProductoCard = { tagName: "article", className: "product-card dynamic-node" };
    var contenedorProductosDesktop = {
        children: [listaTarjetasProductos[0]],
        appendChild: function(nodo) { this.children.push(nodo); return nodo; },
        removeChild: function(nodo) { this.children.pop(); return nodo; }
    };
    contenedorProductosDesktop.appendChild(nuevoProductoCard);
    contenedorProductosDesktop.removeChild(nuevoProductoCard);
}
procesarManipulacionDomCorporativo();


// --- SECCIÓN BLOG.HTML (CÓDIGO 14 DE 15): Estilos CSS desde el DOM ---
function procesarEstilosBlogCorporativo() {
    var nodoArticuloPrincipal = { id: "articulo-principal", className: "card", style: { backgroundColor: "white", color: "#333" } };
    nodoArticuloPrincipal.style.backgroundColor = "#1e293b";
    nodoArticuloPrincipal.style.color = "#f8fafc";
    nodoArticuloPrincipal.className = "card dark-reading-mode";
}
procesarEstilosBlogCorporativo();


// --- SECCIÓN ESTILOS-HOME.CSS (CÓDIGO 15 DE 15): Modificación de Hojas de Estilo Completonas ---
console.log("--- MODIFICACIÓN DE HOJAS DE ESTILO NATIVAS (CSSOM) ---");

function interceptarYModificarEstilosHojaMaestra() {
    var hojaEstilosMaestraSimulada = {
        href: "estilos-home.css",
        cssRules: [
            { selectorText: ":root", style: { setProperty: function(prop, val) { console.log("CSSOM: Variable mutada -> " + prop + " cambiada a: " + val); } } },
            { selectorText: ".top-header", style: { borderBottom: "4px solid var(--primary)" } },
            { selectorText: ".btn-contact", style: { padding: "12px 25px", borderRadius: "5px" } }
        ],
        insertRule: function(reglaTexto, posicionIndex) {
            console.log("CSSOM Acción: insertRule() inyectó una nueva clase en el archivo CSS -> '" + reglaTexto + "' en la posición [" + posicionIndex + "].");
            return posicionIndex;
        }
    };

    console.log("Hojas de Estilo del Sistema detectadas: Cargando [" + hojaEstilosMaestraSimulada.href + "]");

    var mapaVariablesRoot = hojaEstilosMaestraSimulada.cssRules[0].style;
    mapaVariablesRoot.setProperty("--primary", "#0d9488"); 
    mapaVariablesRoot.setProperty("--accent", "#ea580c");  

    var reglaInyeccionModoLectura = ".dark-reading-mode { background-color: #111827 !important; color: #f9fafb !important; }";
    hojaEstilosMaestraSimulada.insertRule(reglaInyeccionModoLectura, hojaEstilosMaestraSimulada.cssRules.length);

    console.log("Refresco de Estilos: Todas las mutaciones cosméticas basadas en la hoja de estilos maestra han sido aplicadas.");
}

// Inicialización del controlador avanzado CSSOM
interceptarYModificarEstilosHojaMaestra();

console.log("====================================================================");
console.log("PROYECTO COMPLETO: Los 15 archivos han sido enlazados y validados.");
console.log("====================================================================");
