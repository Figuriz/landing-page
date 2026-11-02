// Páginas por rubro en /sistema-para/<slug>, pensadas para búsquedas como
// "sistema para taller mecánico". Cada una lleva a su demo en /demos/<demo>.
// Los textos salen de las demos y de lo que entra en la primera etapa.

export type Rubro = {
  slug: string
  demo: string
  /** Para el título: "Sistema para …" */
  para: string
  /** Para frases: "… de tu taller" */
  negocio: string
  title: string
  description: string
  intro: string
  problemas: string[]
  primeraEtapa: string[]
  despues: string[]
  faq: { q: string; a: string }[]
}

export const RUBROS: Rubro[] = [
  {
    slug: "talleres-mecanicos",
    demo: "demo-taller",
    para: "talleres mecánicos",
    negocio: "tu taller",
    title: "Sistema para talleres mecánicos",
    description:
      "Órdenes de trabajo, historial por patente y presupuestos que el cliente aprueba por WhatsApp. Probá la demo gratis y arrancá por una etapa chica con precio cerrado.",
    intro:
      "Órdenes de trabajo, historial por patente y presupuestos que el cliente aprueba desde el celular, con registro. Pensado para usar desde el taller, sin capacitación.",
    problemas: [
      "Las órdenes están en papelitos y nadie sabe bien en qué quedó cada auto.",
      "El cliente aprueba el presupuesto por teléfono y después discute lo que dijo.",
      "Te llaman diez veces por día para preguntar si el auto está listo.",
      "No tenés el historial: no sabés qué se le cambió la última vez.",
      "Nadie le avisa al cliente cuando le toca el service, y se va a otro taller.",
    ],
    primeraEtapa: [
      "Órdenes de trabajo con estado: recibido, en diagnóstico, esperando aprobación, en reparación, listo.",
      "Historial por patente: al cargar la patente aparece todo lo que se le hizo.",
      "Presupuesto en PDF con un link para que el cliente lo apruebe, y queda registrado.",
    ],
    despues: [
      "Aviso de \"listo para retirar\" por WhatsApp.",
      "Recordatorio de service por kilometraje o por fecha.",
      "Stock de repuestos del taller.",
    ],
    faq: [
      {
        q: "¿Necesito una computadora en el taller?",
        a: "No. Funciona desde el celular o una tablet, y también desde la PC si tenés una.",
      },
      {
        q: "¿El cliente tiene que bajarse una app?",
        a: "No. Le llega un link por WhatsApp, abre el presupuesto y lo aprueba con un toque.",
      },
      {
        q: "¿Puedo pasar los datos que ya tengo?",
        a: "Sí. Si tenés clientes o trabajos en un Excel, los pasamos. Se cotiza aparte según cuántos sean y cómo estén.",
      },
    ],
  },
  {
    slug: "corralones-y-ferreterias",
    demo: "demo-corralon",
    para: "corralones y ferreterías",
    negocio: "tu corralón",
    title: "Sistema para corralones y ferreterías",
    description:
      "Presupuestos con seguimiento, cuentas corrientes, agenda del camión y aumentos por proveedor. Se suma a tu sistema de facturación. Probá la demo.",
    intro:
      "Presupuestos que no se pierden, el fiado al día y las entregas del camión ordenadas. Si ya tenés un sistema para facturar, no lo reemplazamos: sumamos lo que le falta.",
    problemas: [
      "Los presupuestos se hacen en Word o en papel, y nadie llama para ver si el cliente los aceptó.",
      "Cada lista nueva de un proveedor es una tarde actualizando precios en Excel.",
      "El fiado está en un cuaderno y no sabés quién debe desde hace dos meses.",
      "Las entregas se arreglan por WhatsApp y el camión sale con una hoja escrita a mano.",
    ],
    primeraEtapa: [
      "Presupuestos en PDF con estado: enviado, aceptado o perdido, y recordatorio para volver a llamar.",
      "Cuentas corrientes: quién debe, cuánto y desde cuándo.",
      "Un presupuesto aceptado pasa a venta con un toque.",
    ],
    despues: [
      "Agenda de entregas del camión.",
      "Actualizar precios por porcentaje según el proveedor.",
      "Importar las listas de los proveedores y facturar con ARCA.",
    ],
    faq: [
      {
        q: "Ya tengo un sistema de gestión. ¿Tengo que dejarlo?",
        a: "No. La mayoría de los corralones ya factura con algo. Sumamos lo que queda afuera, como el seguimiento de presupuestos o la agenda del camión.",
      },
      {
        q: "¿Sirve para varias sucursales?",
        a: "Sí, cada sucursal ve lo suyo y el dueño ve todo junto. Se define en la primera charla.",
      },
      {
        q: "¿Cuánto tarda la primera parte?",
        a: "Entre 5 y 8 semanas, según qué entre en la primera etapa. El alcance y el precio quedan por escrito antes de arrancar.",
      },
    ],
  },
  {
    slug: "agronomias",
    demo: "demo-agronomia",
    para: "agronomías",
    negocio: "tu agronomía",
    title: "Sistema para agronomías y venta de insumos",
    description:
      "La cuenta de cada productor en dólares y pesos, pedidos que llegan por WhatsApp y canje por granos. Sin reemplazar lo que ya usás. Probá la demo.",
    intro:
      "La cuenta de cada productor en dólares y en pesos, los pedidos que llegan por WhatsApp y lo que hay que cobrar a cosecha, en un solo lugar.",
    problemas: [
      "La cuenta de cada productor mezcla dólares y pesos, y vive en un Excel que actualiza una sola persona.",
      "Los pedidos llegan por WhatsApp, a cualquier hora, y se arman a mano.",
      "Calcular un canje por granos es papel, calculadora y la pizarra de Rosario.",
      "A cosecha, cuesta saber quién debe cuánto y desde cuándo.",
    ],
    primeraEtapa: [
      "Cuenta corriente de cada productor, con saldo en dólares y en pesos por separado.",
      "Pedidos cargados con su precio y quién los pidió.",
      "Lo que hay que cobrar a cosecha, por productor.",
    ],
    despues: [
      "Canje por granos y avisos por WhatsApp.",
      "Receta agronómica digital.",
      "Cotización de granos automática y facturación.",
    ],
    faq: [
      {
        q: "Ya uso un sistema del rubro. ¿Esto lo reemplaza?",
        a: "No hace falta. Podemos sumar lo que le falta, como una vista para que el productor consulte su cuenta desde el celular.",
      },
      {
        q: "¿Qué dólar usa para la cuenta?",
        a: "El que uses vos. Se define por operación o por productor, y queda registrado de qué fecha es.",
      },
      {
        q: "¿Trabajan con agronomías de otras provincias?",
        a: "Sí. Las charlas y las entregas son por videollamada y WhatsApp.",
      },
    ],
  },
  {
    slug: "expresos-y-logistica",
    demo: "demo-transporte",
    para: "expresos y logística",
    negocio: "tu expreso",
    title: "Sistema para expresos y empresas de logística",
    description:
      "Seguimiento de envíos para que el cliente vea solo dónde está su paquete, hoja de ruta del chofer y contrareembolsos. Probá la demo.",
    intro:
      "Cada envío con su estado, un link para que el cliente lo siga solo y la hoja de ruta del chofer en el celular. Menos llamadas preguntando \"¿dónde está mi paquete?\".",
    problemas: [
      "El teléfono suena todo el día con \"¿dónde está mi paquete?\".",
      "Los remitos son de papel, y si se pierde uno no hay cómo probar la entrega.",
      "El chofer sale con una lista escrita y nadie sabe qué entregó hasta que vuelve.",
      "Los contrareembolsos cobrados se rinden a mano, y alguno queda en el aire.",
    ],
    primeraEtapa: [
      "Carga de envíos con remito digital.",
      "Hoja de ruta del chofer en el celular, que marca cada entrega.",
      "Link de seguimiento para el cliente, con los estados del envío.",
    ],
    despues: [
      "Contrareembolsos a rendir por chofer.",
      "Foto o firma en la entrega.",
      "Avisos automáticos de \"sale hoy\" y \"entregado\".",
    ],
    faq: [
      {
        q: "¿Muestra el camión en el mapa en tiempo real?",
        a: "En la primera etapa no: el cliente ve los estados y los horarios, que es lo que más pregunta. La ubicación en vivo se puede sumar después.",
      },
      {
        q: "¿El chofer necesita una app?",
        a: "No. Abre la hoja de ruta en el navegador del celular.",
      },
      {
        q: "¿Sirve si trabajo con varias ciudades?",
        a: "Sí. Cada envío tiene origen, destino y su recorrido.",
      },
    ],
  },
  {
    slug: "distribuidoras",
    demo: "demo-pedidos",
    para: "distribuidoras",
    negocio: "tu distribuidora",
    title: "Sistema de pedidos para distribuidoras y mayoristas",
    description:
      "El vendedor carga el pedido en el celular, llega solo a la oficina y nadie lo vuelve a cargar. Precios por lista, stock y remitos. Probá la demo.",
    intro:
      "El vendedor toma el pedido en el celular y llega a la oficina al instante, con el precio de la lista de ese cliente. Nadie lo vuelve a cargar.",
    problemas: [
      "Los pedidos llegan por WhatsApp, audios o papel, y alguien los vuelve a cargar.",
      "El vendedor no sabe si hay stock y vende lo que no hay.",
      "Cada cliente tiene su lista de precios y se equivocan al pasarlos.",
      "Facturar el día es copiar pedido por pedido.",
    ],
    primeraEtapa: [
      "Carga de pedidos desde el celular del vendedor, con el catálogo y el precio de cada lista.",
      "Los pedidos entran a la oficina al instante, con su estado.",
      "Stock básico, remito en PDF y resumen del día.",
    ],
    despues: [
      "Factura electrónica con ARCA desde el pedido y cuentas corrientes.",
      "Recorridos de reparto.",
      "Carga sin señal para zonas rurales.",
    ],
    faq: [
      {
        q: "¿Factura solo?",
        a: "Se puede sumar la factura electrónica en una segunda etapa. Cada factura la confirma una persona antes de emitirla.",
      },
      {
        q: "¿Funciona si el vendedor no tiene señal?",
        a: "En la primera etapa necesita conexión. La carga sin señal se suma después, si hace falta.",
      },
      {
        q: "Ya uso Tango u otro sistema. ¿Lo tengo que dejar?",
        a: "No. Podemos pasarle los pedidos a tu sistema para que no se carguen dos veces.",
      },
    ],
  },
]

export function getRubro(slug: string) {
  return RUBROS.find((r) => r.slug === slug)
}
