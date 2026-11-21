import type { Metadata } from "next"
import Link from "next/link"
import { PaginaLegal, Apartado } from "@/components/pagina-legal"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Qué datos guarda Mostrador, para qué los usa, dónde están y cómo pedir que se borren.",
  alternates: { canonical: "https://figuriz.com/privacidad" },
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <PaginaLegal titulo="Política de privacidad" vigencia="20 de noviembre de 2026">
      <Apartado titulo="En pocas palabras">
        <ul>
          <li>Guardamos lo que vos cargás en Mostrador para que la app funcione. Nada más.</li>
          <li>Los datos de tu negocio son tuyos: los podés descargar cuando quieras y pedir que se borren.</li>
          <li>No vendemos ni compartimos tus datos, ni los de tus clientes, con nadie.</li>
          <li>Cada negocio ve solo lo suyo.</li>
        </ul>
      </Apartado>

      <Apartado titulo="Quién es responsable">
        <p>
          Mostrador es un producto de Figuriz (figuriz.com), de Argentina. Para cualquier consulta sobre tus datos
          escribí a <a href="mailto:contacto@figuriz.com">contacto@figuriz.com</a>.
        </p>
      </Apartado>

      <Apartado titulo="Qué datos guardamos">
        <p><strong>De tu cuenta:</strong> el nombre de tu negocio, el rubro, tu celular o tu mail (es tu usuario) y tu contraseña, que se guarda cifrada: no la podemos leer.</p>
        <p><strong>Lo que cargás al usar la app:</strong> ventas, gastos y cierres de caja; los productos y sus precios; y los fiados, con el nombre que le pongas a cada cliente, lo que se llevó, lo que pagó y, si lo cargás, su celular.</p>
        <p><strong>Si conectás Mercado Pago:</strong> el permiso para leer los cobros que recibís, guardado cifrado. Mostrador solo lee: no puede cobrar, devolver ni mover plata de tu cuenta. Lo desconectás cuando quieras.</p>
        <p><strong>Si aceptás los avisos:</strong> el dato técnico que permite mandarte notificaciones a ese celular.</p>
        <p><strong>Datos de uso:</strong> cuándo entraste por última vez y cuánto usaste la app, para saber si te está sirviendo y darte soporte.</p>
        <p>No guardamos datos de tarjetas. Si te suscribís, el pago lo hacés en Mercado Pago y a nosotros solo nos llega si se cobró.</p>
      </Apartado>

      <Apartado titulo="Los datos de tus clientes">
        <p>
          Los nombres y lo que te debe cada cliente los cargás vos y son tu responsabilidad, igual que en tu cuaderno.
          Nosotros solo los guardamos para que vos los veas. No les escribimos, no los usamos para nada propio y no se
          los mostramos a ningún otro negocio. Los recordatorios de deuda los mandás vos, desde tu WhatsApp.
        </p>
      </Apartado>

      <Apartado titulo="Para qué los usamos">
        <ul>
          <li>Para que la app funcione: mostrarte tus ventas, tu caja y tus fiados.</li>
          <li>Para avisarte cosas de tu cuenta: que se termina la prueba, que venció el mes o que pediste una contraseña nueva.</li>
          <li>Para darte soporte cuando nos escribís.</li>
          <li>Para mejorar la app, mirando el uso en general y no lo que anota cada negocio.</li>
        </ul>
      </Apartado>

      <Apartado titulo="Dónde están y con quién se comparten">
        <p>Los datos de la app están en un servidor contratado por Figuriz, con una copia de seguridad diaria. Viajan siempre cifrados (https).</p>
        <p>Usamos estos servicios de otras empresas, solo para lo que se indica:</p>
        <ul>
          <li><strong>Mercado Pago:</strong> para cobrar la suscripción y, si lo conectás, para leer tus cobros.</li>
          <li><strong>Un servicio de envío de mails:</strong> para mandarte el enlace cuando te olvidás la contraseña.</li>
          <li><strong>Google Analytics:</strong> en este sitio y en las pantallas de registro e ingreso de la app, para saber cuánta gente entra. No se usa dentro de la app, donde están los datos de tu negocio.</li>
        </ul>
        <p>Fuera de eso, solo entregaríamos datos si una autoridad lo exige por ley.</p>
      </Apartado>

      <Apartado titulo="Cuánto tiempo los guardamos">
        <p>
          Mientras tengas la cuenta. Si se termina la prueba o dejás de pagar, la cuenta queda en modo de solo lectura:
          seguís viendo y descargando todo, pero no podés anotar. Si pedís que se borre, la borramos junto con sus datos;
          las copias de seguridad se van renovando solas en los días siguientes.
        </p>
      </Apartado>

      <Apartado titulo="Tus derechos">
        <p>Podés, en cualquier momento y sin costo:</p>
        <ul>
          <li><strong>Ver y descargar tus datos:</strong> desde la app, en Más, en un archivo que se abre con Excel.</li>
          <li><strong>Corregirlos:</strong> desde la app, o escribiéndonos.</li>
          <li><strong>Pedir que se borren:</strong> escribiendo a <a href="mailto:contacto@figuriz.com">contacto@figuriz.com</a> desde el mail de tu cuenta, o por WhatsApp desde el celular de tu cuenta.</li>
        </ul>
        <p>
          En Argentina estos derechos están en la Ley 25.326 de Protección de los Datos Personales. Si creés que no
          respetamos tus datos, podés reclamar ante la Agencia de Acceso a la Información Pública, que es el organismo
          de control.
        </p>
      </Apartado>

      <Apartado titulo="Cambios">
        <p>
          Si cambiamos algo de esta política, lo publicamos en esta página con la fecha nueva. Si el cambio es
          importante, además te avisamos por el celular o el mail de tu cuenta antes de que empiece a regir. También podés leer los <Link href="/terminos">términos de uso</Link>.
        </p>
      </Apartado>
    </PaginaLegal>
  )
}
