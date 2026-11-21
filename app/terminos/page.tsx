import type { Metadata } from "next"
import Link from "next/link"
import { PaginaLegal, Apartado } from "@/components/pagina-legal"

export const metadata: Metadata = {
  title: "Términos de uso de Mostrador",
  description: "Las condiciones para usar Mostrador: la prueba gratis, la cuota mensual, la baja y qué pasa con tus datos.",
  alternates: { canonical: "https://figuriz.com/terminos" },
  robots: { index: true, follow: true },
}

export default function TerminosPage() {
  return (
    <PaginaLegal titulo="Términos de uso de Mostrador" vigencia="20 de noviembre de 2026">
      <Apartado titulo="Qué es Mostrador">
        <p>
          Mostrador es una aplicación de Figuriz para que un comercio lleve sus ventas, su caja y sus fiados desde el
          celular. Al registrarte aceptás estos términos y la <Link href="/privacidad">política de privacidad</Link>.
        </p>
      </Apartado>

      <Apartado titulo="Tu cuenta">
        <ul>
          <li>Te registrás con el nombre de tu negocio, tu celular o tu mail y una contraseña.</li>
          <li>Cuidá tu contraseña: lo que se anote con tu cuenta se toma como anotado por vos.</li>
          <li>Tenés que ser mayor de edad y poder actuar en nombre del negocio.</li>
        </ul>
      </Apartado>

      <Apartado titulo="Prueba gratis y cuota mensual">
        <ul>
          <li>Los primeros 14 días son gratis y no pedimos tarjeta.</li>
          <li>Para seguir después de la prueba se paga una cuota mensual. El monto vigente lo ves dentro de la app antes de pagar.</li>
          <li>Si elegís la suscripción por Mercado Pago, se cobra sola todos los meses hasta que la des de baja.</li>
          <li>Si cambia el precio, te avisamos antes del cobro siguiente, por el celular o el mail de tu cuenta.</li>
        </ul>
      </Apartado>

      <Apartado titulo="Baja">
        <p>
          Te das de baja cuando quieras, desde la app, sin llamar a nadie y sin costo. Lo que ya pagaste te sigue
          valiendo hasta que venza ese mes; no se devuelven meses ya empezados. Si no pagás, la cuenta no se borra:
          queda en modo de solo lectura.
        </p>
      </Apartado>

      <Apartado titulo="Tus datos son tuyos">
        <p>
          Todo lo que cargás es tuyo. Lo podés descargar cuando quieras, también con la cuenta vencida, y podés pedir
          que se borre. El detalle está en la <Link href="/privacidad">política de privacidad</Link>.
        </p>
      </Apartado>

      <Apartado titulo="Qué hace y qué no hace">
        <ul>
          <li>Mostrador es una herramienta para anotar y ordenar. No reemplaza a tu contador ni emite facturas.</li>
          <li>Los números salen de lo que vos cargás: si algo se anota mal, el total sale mal.</li>
          <li>Si conectás Mercado Pago, Mostrador solo lee los cobros. No cobra ni mueve plata.</li>
          <li>Necesita conexión a internet.</li>
        </ul>
      </Apartado>

      <Apartado titulo="Disponibilidad">
        <p>
          Hacemos lo posible para que la app esté siempre disponible y hacemos copias de seguridad todos los días, pero
          no podemos garantizar que nunca se caiga. Si hay un corte programado, tratamos de avisar antes. Te recomendamos
          descargar tus datos cada tanto.
        </p>
      </Apartado>

      <Apartado titulo="Uso correcto">
        <p>
          No uses Mostrador para nada ilegal, no intentes entrar a datos de otros negocios ni perjudicar el
          funcionamiento de la app. Si pasa, podemos suspender la cuenta.
        </p>
      </Apartado>

      <Apartado titulo="Responsabilidad">
        <p>
          Mostrador se ofrece como está. En la medida en que la ley lo permita, Figuriz no responde por ganancias
          que dejes de tener ni por decisiones que tomes con los números de la app, y su responsabilidad se limita a
          lo que hayas pagado por el servicio en los últimos tres meses. Esto no te quita ningún derecho que la ley de
          defensa del consumidor te dé y que no se pueda renunciar.
        </p>
      </Apartado>

      <Apartado titulo="Cambios y ley aplicable">
        <p>
          Podemos actualizar estos términos: los publicamos en esta página con la fecha nueva y, si el cambio es
          importante, te avisamos antes de que rija. Se aplican las leyes de la República Argentina.
        </p>
      </Apartado>

      <Apartado titulo="Contacto">
        <p>
          <a href="mailto:contacto@figuriz.com">contacto@figuriz.com</a>
        </p>
      </Apartado>
    </PaginaLegal>
  )
}
