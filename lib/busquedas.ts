// Páginas de Mostrador escritas para una búsqueda concreta. Cada una responde esa pregunta
// y lleva al registro. Las frases salen de lo que sugiere Google en Argentina (noviembre de 2026).

export type Busqueda = {
  slug: string
  /** Lo que la gente escribe en el buscador. */
  titulo: string
  descripcion: string
  encabezado: string
  /** La respuesta corta, arriba de todo. */
  respuesta: string
  secciones: { titulo: string; texto: string }[]
  preguntas: { q: string; a: string }[]
  /** Qué captura de la app acompaña mejor. */
  pantalla: "vender" | "fiado" | "caja"
}

export const BUSQUEDAS: Busqueda[] = [
  {
    slug: "sistema-para-kiosco",
    titulo: "Sistema para kiosco: ventas y caja desde el celular, gratis un mes · Mostrador",
    descripcion:
      "Mostrador es un sistema simple para kioscos: anotás cada venta en dos toques, cerrás la caja del día y llevás el fiado. Desde el celular, sin instalar nada. Gratis un mes.",
    encabezado: "Sistema para kiosco, desde el celular",
    respuesta:
      "Mostrador es un sistema de ventas y caja para kioscos que se usa desde el celular. Anotás cada venta poniendo el monto y cómo te pagaron, y a la noche la caja ya está hecha. Lo probás gratis un mes, sin tarjeta; después es una cuota mensual.",
    secciones: [
      {
        titulo: "Para qué le sirve a un kiosco",
        texto:
          "Para saber cuánto entró hoy y por dónde: efectivo, Mercado Pago, Cuenta DNI, transferencia o tarjeta. Para anotar los gastos y retiros del día y ver si el cajón da. Y para llevar el fiado de los clientes de siempre, con qué se llevó cada uno y qué día.",
      },
      {
        titulo: "Cómo se usa en el mostrador",
        texto:
          "Con una mano y con gente esperando. Ponés el monto, tocás cómo pagó y listo. No hace falta cargar los productos: si querés saber qué se vende más, los vas sumando de a poco.",
      },
      {
        titulo: "Lo que no tiene",
        texto:
          "No tiene control de stock, lector de código de barras ni factura electrónica. Si necesitás eso hoy, Mostrador puede ir al lado del sistema que uses para facturar, solo con las ventas, la caja y el fiado.",
      },
    ],
    preguntas: [
      { q: "¿Es un sistema para kiosco gratis?", a: "Es gratis durante un mes, sin tarjeta. Después tiene una cuota mensual fija. Si no seguís, tus datos quedan guardados y los podés descargar." },
      { q: "¿Necesito una computadora o un lector?", a: "No. Se usa desde el celular, en el navegador, sin instalar nada." },
      { q: "¿Sirve para un maxikiosco con empleados?", a: "Sirve para anotar ventas y cerrar la caja. Hoy cada negocio tiene un solo usuario, así que todos entran con la misma cuenta." },
    ],
    pantalla: "vender",
  },
  {
    slug: "programa-para-almacen",
    titulo: "Programa para almacén: ventas, caja y fiado en el celular · Mostrador",
    descripcion:
      "Mostrador es un programa para almacenes y despensas: ventas en dos toques, caja del día y fiado con detalle y fecha. Desde el celular, sin instalar nada. Gratis un mes.",
    encabezado: "Programa para almacén, con el fiado incluido",
    respuesta:
      "Mostrador es un programa para almacenes y despensas que reemplaza el cuaderno: anotás las ventas, cerrás la caja del día y llevás el fiado de cada cliente con lo que se llevó y la fecha. Funciona en el celular y se prueba gratis un mes.",
    secciones: [
      {
        titulo: "El fiado, sin sumar el cuaderno",
        texto:
          "Ves cuánto te debe cada cliente y hace cuántos días. Anotás lo que deja a cuenta y se descuenta solo. Y le mandás un recordatorio por WhatsApp, desde tu teléfono, con el detalle de lo que debe.",
      },
      {
        titulo: "La caja de cada día",
        texto:
          "Todo lo que entró, separado por cómo te pagaron. Anotás lo que sacaste del cajón, contás el efectivo y te dice si sobra o falta. Podés volver a mirar la caja de cualquier día y el resumen del mes.",
      },
      {
        titulo: "Lo que no tiene",
        texto:
          "No lleva stock, no lee códigos de barras y no emite factura. Está pensado para el almacén que hoy anota en un cuaderno y quiere ordenar la plata y el fiado, no para reemplazar un sistema de facturación.",
      },
    ],
    preguntas: [
      { q: "¿Es un programa para almacén gratis?", a: "El primer mes es gratis y no pedimos tarjeta. Después es una cuota mensual fija." },
      { q: "¿Tengo que pasar todo el cuaderno?", a: "No hace falta de entrada. Empezás anotando las ventas y vas pasando lo que te deben cliente por cliente, con la fecha que tenía en el cuaderno." },
      { q: "¿Anda en la computadora?", a: "Sí, también, pero está pensado para el celular. No se instala: se abre desde el navegador." },
    ],
    pantalla: "fiado",
  },
  {
    slug: "como-llevar-la-caja-diaria",
    titulo: "Cómo llevar la caja diaria de un negocio (y hacerlo desde el celular) · Mostrador",
    descripcion:
      "Cómo llevar la caja diaria de un negocio chico paso a paso: qué anotar, cómo separar los medios de pago y cómo cerrar. Y cómo hacerlo desde el celular con Mostrador.",
    encabezado: "Cómo llevar la caja diaria de un negocio",
    respuesta:
      "Para llevar la caja diaria hay que anotar cada venta con cómo te pagaron, anotar aparte lo que sale del cajón, y al cierre comparar el efectivo que debería haber con el que contás. Se puede hacer en un cuaderno; con Mostrador lo hacés desde el celular y la cuenta sale sola.",
    secciones: [
      {
        titulo: "1. Anotá cada venta con el medio de pago",
        texto:
          "El error más común es anotar solo el total. Si no separás efectivo, transferencia, Mercado Pago y tarjeta, a la noche no sabés cuánta plata tiene que haber en el cajón y cuánta está en el banco.",
      },
      {
        titulo: "2. Anotá lo que sale",
        texto:
          "Pagos a proveedores, retiros tuyos y gastos chicos. Todo lo que sale del cajón en efectivo se anota en el momento; si no, al cierre parece que falta plata.",
      },
      {
        titulo: "3. Cerrá contando el efectivo",
        texto:
          "Lo que tendría que haber es el cambio con el que abriste, más lo cobrado en efectivo, menos lo que salió. Contás, comparás y anotás la diferencia. Si siempre falta un poco, ya sabés dónde mirar.",
      },
      {
        titulo: "Cómo lo hace Mostrador",
        texto:
          "Cada venta que anotás ya queda con su medio de pago, así que el total del día y el efectivo que tendría que haber salen solos. Vos cargás los gastos y retiros, contás el cajón y te dice si sobra o falta.",
      },
    ],
    preguntas: [
      { q: "¿Sirve una planilla de Excel?", a: "Sí, sirve. El problema suele ser cargarla en el momento, con clientes esperando. Por eso Mostrador se usa desde el celular y con dos toques por venta." },
      { q: "¿Cada cuánto conviene cerrar la caja?", a: "Todos los días, al terminar. Si lo dejás para el fin de semana, ya no te acordás de qué salió del cajón." },
      { q: "¿Mostrador es gratis?", a: "Durante un mes, sin tarjeta. Después es una cuota mensual fija." },
    ],
    pantalla: "caja",
  },
]

export function buscarBusqueda(slug: string) {
  return BUSQUEDAS.find((b) => b.slug === slug)
}
