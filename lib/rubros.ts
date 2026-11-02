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
  {
    slug: "gimnasios",
    demo: "demo-gimnasio",
    para: "gimnasios",
    negocio: "tu gimnasio",
    title: "Sistema para gimnasios",
    description:
      "Control de cuotas en la entrada con el DNI, recordatorios de pago por WhatsApp y aviso de los socios que dejaron de venir. Probá la demo gratis.",
    intro:
      "El socio pone su DNI en la entrada y ves al instante si tiene la cuota al día. Los vencimientos, los cobros y la caja del mes, en un solo lugar.",
    problemas: [
      "Las cuotas están en una planilla y no sabés quién entra con la cuota vencida.",
      "Cobrar es mandar WhatsApp uno por uno cada principio de mes.",
      "La gente deja de venir y te enterás cuando ya se dio de baja.",
      "No sabés cuánto vas a cobrar en el mes hasta que termina.",
    ],
    primeraEtapa: [
      "Ingreso con DNI desde una tablet o el celular: al día o vencida, en el momento.",
      "Socios con su plan y su vencimiento, y el cobro que deja la cuota al día.",
      "Caja del mes por medio de pago: efectivo, transferencia o Mercado Pago.",
    ],
    despues: [
      "Recordatorio de cuota por WhatsApp, cada uno con su monto y su fecha.",
      "Lista de socios que hace días que no vienen, para escribirles a tiempo.",
      "Recibo del pago por WhatsApp.",
    ],
    faq: [
      {
        q: "¿Necesito un molinete o un lector especial?",
        a: "No. Alcanza con una tablet o un celular en la entrada. El socio escribe su DNI o lo buscás vos por el nombre.",
      },
      {
        q: "¿Sirve si tengo varios planes, como musculación o pase completo?",
        a: "Sí. Cada socio tiene su plan y su precio, y el vencimiento se calcula según los meses que paga.",
      },
      {
        q: "¿Puedo pasar los socios que ya tengo?",
        a: "Sí. Si los tenés en un Excel, los pasamos. Se cotiza aparte según cuántos sean y cómo estén.",
      },
    ],
  },
  {
    slug: "veterinarias",
    demo: "demo-veterinaria",
    para: "veterinarias",
    negocio: "tu veterinaria",
    title: "Sistema para veterinarias",
    description:
      "Ficha de cada mascota con su historia clínica, recordatorio de vacunas por WhatsApp y aviso cuando se le termina el alimento. Probá la demo gratis.",
    intro:
      "Cada mascota con su ficha, sus vacunas y su peso, y el dueño al lado. La agenda del día junta consultas, vacunas y peluquería.",
    problemas: [
      "Las fichas están en papel o en un Excel, y la historia de cada animal se pierde.",
      "Nadie avisa cuándo toca la próxima vacuna, y el dueño se olvida.",
      "El alimento lo terminan comprando en el súper porque nadie les avisó.",
      "Consultas y peluquería se anotan en el mismo cuaderno.",
    ],
    primeraEtapa: [
      "Ficha de cada mascota: especie, raza, dueño, vacunas e historia clínica.",
      "Agenda del día con consultas, vacunas y peluquería separadas.",
      "Lista de vacunas vencidas y por vencer, con el aviso al dueño por WhatsApp.",
    ],
    despues: [
      "Aviso de reposición cuando se le está por terminar la bolsa de alimento.",
      "Avisar de una sola vez a todos los dueños con vacunas por vencer.",
      "Peso de cada control en la ficha, para ver cómo evoluciona.",
    ],
    faq: [
      {
        q: "¿Puedo buscar por el nombre del dueño?",
        a: "Sí. Buscás por el nombre de la mascota, del dueño o por la raza, y abrís la ficha con todo.",
      },
      {
        q: "¿Cómo sabe cuándo se termina el alimento?",
        a: "Con cada compra se anota cuánto dura la bolsa. El sistema calcula cuándo se termina y te avisa unos días antes para que le ofrezcas la reposición.",
      },
      {
        q: "¿Puedo pasar las fichas que ya tengo?",
        a: "Sí, si están en un Excel o en otro sistema. Las fichas en papel se pueden ir cargando de a poco, a medida que vuelve cada paciente.",
      },
    ],
  },
  {
    slug: "consultorios",
    demo: "demo-consultorio",
    para: "consultorios",
    negocio: "tu consultorio",
    title: "Sistema de turnos para consultorios",
    description:
      "Turnos online, recordatorio por WhatsApp el día anterior y los huecos que se liberan ofrecidos a la lista de espera. Probá la demo gratis.",
    intro:
      "El paciente saca turno solo, a cualquier hora, y el día anterior le llega un recordatorio para confirmar o cancelar. Si cancela, el turno se ofrece a quien está esperando.",
    problemas: [
      "El teléfono no para: la secretaria se pasa la mañana dando turnos.",
      "Hay pacientes que no vienen y no avisan.",
      "Cuando alguien cancela, ese hueco queda vacío aunque haya gente esperando turno.",
      "Los recordatorios se mandan a mano, uno por uno, si queda tiempo.",
    ],
    primeraEtapa: [
      "Agenda por profesional, con quién confirmó, quién llegó y quién no vino.",
      "Recordatorio por WhatsApp 24 horas antes: el paciente confirma o cancela con un toque.",
      "Lista de espera por especialidad, para ofrecer los turnos que se liberan.",
    ],
    despues: [
      "Turnos online para que el paciente saque turno sin llamar.",
      "Obra social de cada paciente cargada en el turno.",
      "Resumen de ausencias y turnos recuperados por mes.",
    ],
    faq: [
      {
        q: "¿Sirve para un centro con varios profesionales?",
        a: "Sí. Cada profesional tiene su agenda y su especialidad, y la secretaria ve todas juntas.",
      },
      {
        q: "¿El paciente tiene que bajarse una app?",
        a: "No. Saca el turno desde un link y el recordatorio le llega por WhatsApp.",
      },
      {
        q: "¿Incluye historia clínica?",
        a: "Este sistema está pensado para los turnos. Si necesitás historia clínica, lo charlamos y vemos si conviene sumarla o conectarlo con lo que ya usás.",
      },
    ],
  },
  {
    slug: "inmobiliarias",
    demo: "demo-inmobiliaria",
    para: "inmobiliarias",
    negocio: "tu inmobiliaria",
    title: "Sistema para inmobiliarias",
    description:
      "Cobro de alquileres con recibo, ajustes por IPC o ICL calculados solos y liquidación a cada propietario. Probá la demo gratis.",
    intro:
      "La cartera de alquileres ordenada: quién pagó y quién no, qué contratos ajustan este mes y cuánto hay que transferirle a cada propietario.",
    problemas: [
      "Los ajustes por IPC o ICL se calculan a mano en Excel, contrato por contrato.",
      "Cobrar es perseguir a cada inquilino por WhatsApp y hacer los recibos uno por uno.",
      "Liquidarle a cada propietario lleva días a fin de mes.",
      "Un contrato vence y te enterás cuando el inquilino ya se está yendo.",
    ],
    primeraEtapa: [
      "Cobros del mes por contrato: pagado, pendiente o atrasado, con los intereses por mora calculados.",
      "Ajustes del mes según el índice de cada contrato, con el monto nuevo calculado.",
      "Recibo de cada pago en PDF.",
    ],
    despues: [
      "Liquidación a cada propietario, con comisión y gastos descontados, lista para transferir.",
      "Avisos por WhatsApp: recordatorio de pago y aviso de ajuste al inquilino.",
      "Contratos ordenados por vencimiento, con aviso para consultar la renovación.",
    ],
    faq: [
      {
        q: "¿De dónde saca los índices?",
        a: "El IPC se toma del INDEC y el ICL del BCRA. Cada contrato tiene su índice y su período de ajuste.",
      },
      {
        q: "¿Sirve también para ventas?",
        a: "Este sistema está pensado para la administración de alquileres. Si también necesitás algo para ventas, lo charlamos aparte.",
      },
      {
        q: "¿Puedo pasar los contratos que ya tengo?",
        a: "Sí. Si los tenés en un Excel, los pasamos con su monto, su índice y sus fechas. Se cotiza aparte según cuántos sean y cómo estén.",
      },
    ],
  },
  {
    slug: "casas-de-repuestos",
    demo: "demo-repuestos",
    para: "casas de repuestos",
    negocio: "tu casa de repuestos",
    title: "Sistema para casas de repuestos y autopartes",
    description:
      "Búsqueda por vehículo con equivalencias, stock y precio, cuentas de los talleres y faltantes agrupados por proveedor. Probá la demo gratis.",
    intro:
      "Elegís el vehículo y aparece lo compatible, con equivalencias entre marcas, stock y precio. Lo que sabe el que \"se sabe todo\" queda en el sistema.",
    problemas: [
      "Para saber si hay un repuesto hay que ir al estante o preguntarle al que \"se sabe todo\".",
      "Las equivalencias entre marcas están en la cabeza de una persona.",
      "Todo el día llegan WhatsApp preguntando por un repuesto para tal auto, y se contestan a mano.",
      "Los talleres compran a cuenta y el saldo está en un cuaderno.",
      "Te das cuenta de que falta algo cuando un cliente lo pide.",
    ],
    primeraEtapa: [
      "Búsqueda por vehículo en el mostrador, con equivalencias, stock y precio.",
      "Cuenta corriente de cada taller, con su descuento y su saldo al día.",
      "Faltantes agrupados por proveedor, para que el pedido salga armado.",
    ],
    despues: [
      "Respuesta propuesta para las consultas de WhatsApp, con stock y precio.",
      "Resumen de cuenta por WhatsApp a cada taller.",
      "Importar las listas de precios de los proveedores.",
    ],
    faq: [
      {
        q: "¿Tengo que cargar todo el catálogo a mano?",
        a: "No. Si tenés las listas de los proveedores o un Excel, los importamos. Las equivalencias se van sumando con el uso.",
      },
      {
        q: "¿Las consultas de WhatsApp se contestan solas?",
        a: "No. El sistema arma la respuesta con lo compatible, el stock y el precio, y una persona la revisa antes de mandarla.",
      },
      {
        q: "Ya facturo con otro sistema. ¿Lo tengo que dejar?",
        a: "No. Sumamos lo que le falta, como la búsqueda por vehículo o las cuentas de los talleres.",
      },
    ],
  },
  {
    slug: "fabricas-de-alimentos",
    demo: "demo-fabrica",
    para: "fábricas de alimentos",
    negocio: "tu fábrica",
    title: "Sistema para fábricas de alimentos",
    description:
      "Lotes en maduración, vencimientos, stock de fábrica y locales, pedidos de revendedores y trazabilidad por lote. Pensado para quesos y fiambres. Probá la demo.",
    intro:
      "Cada lote con su fecha de elaboración, cuándo está listo y cuándo vence. El stock de la fábrica y de cada local en tiempo real, y el recorrido de un lote con una búsqueda.",
    problemas: [
      "Los lotes se anotan en un cuaderno o en un Excel que entiende una sola persona.",
      "No sabés qué horma vence primero, y alguna se termina tirando o rematando.",
      "Para saber cuánto queda en cada local hay que llamar o mandar un WhatsApp.",
      "Los revendedores piden por WhatsApp y alguien lo pasa a mano.",
      "Si bromatología pregunta por un lote, rastrearlo lleva horas.",
    ],
    primeraEtapa: [
      "Lotes con fecha de elaboración: el sistema calcula cuándo están listos y cuándo vencen.",
      "Stock de la fábrica y de cada local, con lo que vence en los próximos 30 días arriba.",
      "Trazabilidad: buscás un lote y ves a qué clientes fue.",
    ],
    despues: [
      "Pedidos de revendedores cargados desde WhatsApp, con su remito.",
      "Envíos de fábrica a los locales con un toque.",
      "Ofertas a revendedores de lo que conviene mover antes de que venza.",
    ],
    faq: [
      {
        q: "¿Sirve si no hago quesos?",
        a: "La demo está armada con quesos y fiambres, pero la lógica de lotes, vencimientos y trazabilidad sirve para otros alimentos. Lo vemos en la primera charla.",
      },
      {
        q: "¿Se usa desde la fábrica?",
        a: "Sí. Funciona desde el celular, para cargar un lote o mirar el stock sin ir a la oficina.",
      },
      {
        q: "¿Reemplaza mi sistema de facturación?",
        a: "No hace falta. Se ocupa de lo que pasa en la fábrica y los locales, y puede convivir con lo que ya usás para facturar.",
      },
    ],
  },
  {
    slug: "agencias-de-autos-usados",
    demo: "demo-usados",
    para: "agencias de autos usados",
    negocio: "tu agencia",
    title: "Sistema para agencias de autos usados",
    description:
      "Stock con días en la playa, consultas de MercadoLibre, Instagram y WhatsApp en una sola bandeja y transferencias con checklist. Probá la demo.",
    intro:
      "Cada auto con sus días en la playa y dónde está publicado, todas las consultas juntas y cada transferencia con sus papeles en orden.",
    problemas: [
      "Las consultas llegan por MercadoLibre, Instagram y WhatsApp, y alguna queda sin responder.",
      "Cada auto se publica a mano en cada lado, y cuando se vende hay que bajarlo de todos.",
      "No sabés qué autos están clavados hace dos meses en la playa.",
      "Los papeles de cada transferencia (08, verificación, sellos, turno) se siguen de memoria.",
    ],
    primeraEtapa: [
      "Stock con los días en la playa de cada auto y dónde está publicado.",
      "Transferencias con checklist y aviso antes de que venza la verificación policial.",
      "Visitas agendadas, con recordatorio al cliente el día anterior.",
    ],
    despues: [
      "Consultas de MercadoLibre, Instagram, WhatsApp y la web en una sola bandeja.",
      "Publicar y bajar un auto de todos los canales a la vez.",
      "Tasación de permutas con precio de toma y de venta.",
    ],
    faq: [
      {
        q: "¿Se conecta con MercadoLibre?",
        a: "Se puede sumar en una segunda etapa, para que las consultas entren solas y las publicaciones se actualicen desde el sistema.",
      },
      {
        q: "¿Cómo calcula la tasación de una permuta?",
        a: "Con tus ventas anteriores y los precios publicados del mismo modelo, y tu margen. El precio final lo decidís vos.",
      },
      {
        q: "¿El cliente puede ver cómo va su transferencia?",
        a: "Sí. Le mandás por WhatsApp en qué paso está y qué falta, sin tener que llamarlo.",
      },
    ],
  },
  {
    slug: "restaurantes",
    demo: "demo-restaurante",
    para: "restaurantes",
    negocio: "tu restaurante",
    title: "Sistema de reservas y mesas para restaurantes",
    description:
      "Mesas en tiempo real, lista de espera con aviso por WhatsApp y reservas que se confirman solas. Desde una tablet o el celular. Probá la demo.",
    intro:
      "El salón en tiempo real, la fila de la puerta con aviso por WhatsApp cuando la mesa está lista y todas las reservas juntas, vengan de donde vengan.",
    problemas: [
      "Las reservas llegan por WhatsApp, Instagram y teléfono, y terminan en un cuaderno.",
      "Los sábados se arma fila en la puerta y hay gente que se va sin avisar.",
      "Reservas que no vienen: mesas vacías en el mejor horario.",
      "No sabés cuántos cubiertos hiciste hasta cerrar la caja.",
    ],
    primeraEtapa: [
      "Las mesas del salón en tiempo real: libres, ocupadas y reservadas, desde una tablet.",
      "Lista de espera con tiempo estimado y aviso por WhatsApp cuando la mesa está lista.",
      "Reservas del día en un solo lugar, con confirmación por WhatsApp unas horas antes.",
    ],
    despues: [
      "Si una reserva cancela, la mesa se ofrece a la lista de espera.",
      "Reservas desde la web, sin llamar.",
      "Resumen de cubiertos, ticket promedio y horarios más fuertes.",
    ],
    faq: [
      {
        q: "¿Reemplaza mi sistema de comandas o de caja?",
        a: "No. Se ocupa de las mesas, la espera y las reservas. Lo de cocina y caja sigue como lo tenés.",
      },
      {
        q: "¿El cliente tiene que bajarse una app para anotarse en la espera?",
        a: "No. Le tomás el nombre y el teléfono en la puerta y le llega un WhatsApp cuando la mesa está lista.",
      },
      {
        q: "¿Lo pueden usar los mozos?",
        a: "Sí. Funciona en el celular y en la tablet, así cualquiera ve qué mesa se liberó.",
      },
    ],
  },
  {
    slug: "mueblerias-y-tiendas-de-deco",
    demo: "demo-muebleria",
    para: "mueblerías y tiendas de deco",
    negocio: "tu mueblería",
    title: "Sistema para mueblerías y tiendas de deco",
    description:
      "Stock por color, medida y tela en el local y en depósito, pedidos de WhatsApp e Instagram con seña y saldo, encargos a fábrica y entregas. Probá la demo.",
    intro:
      "Sabés al toque si tenés el sillón en otro color y dónde está, las señas quedan registradas y cada encargo a fábrica tiene su fecha a la vista. Pensado para usar desde el celular, en el local o en el depósito.",
    problemas: [
      "Te preguntan por WhatsApp si hay algo en otro color y tenés que ir al depósito a fijarte.",
      "Las señas de los encargos están anotadas en un cuaderno.",
      "No sabés cuándo llega lo que encargaste a fábrica, y el cliente pregunta todos los días.",
      "Las entregas se arreglan de palabra y el día del flete aparecen las dudas: dirección, horario, si hay que armar.",
      "No sabés qué se vende y qué está parado ocupando lugar en el local.",
    ],
    primeraEtapa: [
      "Stock por variante (color, medida, tela), separado entre el local y el depósito, con búsqueda rápida.",
      "Pedidos con seña y saldo, vengan de WhatsApp, de Instagram o del local.",
      "Encargos a fábrica con la fecha prometida al cliente y la que dio el proveedor, con aviso cuando no coinciden.",
    ],
    despues: [
      "Agenda de entregas y fletes, con franja horaria y si hay que armar.",
      "Saldos en cuotas y recordatorio por WhatsApp.",
      "Qué se vende y qué está parado, para decidir qué reponer y qué liquidar.",
    ],
    faq: [
      {
        q: "¿Tengo que sacarle foto a todo y cargarlo a mano?",
        a: "No. Si tenés una lista en Excel o el catálogo que mandás por WhatsApp, lo pasamos. Las fotos se pueden ir sumando de a poco.",
      },
      {
        q: "¿Sirve si vendo mucho por Instagram?",
        a: "Sí. Los pedidos se cargan desde el celular en el momento, con la seña, sin importar por dónde llegó el cliente.",
      },
      {
        q: "Ya facturo con otro sistema. ¿Lo tengo que dejar?",
        a: "No. Sumamos lo que le falta, como el stock por color y depósito, las señas o los encargos a fábrica.",
      },
    ],
  },
]

export function getRubro(slug: string) {
  return RUBROS.find((r) => r.slug === slug)
}
