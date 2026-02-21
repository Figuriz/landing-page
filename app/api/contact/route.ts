import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

// Cambiá este valor por el email destino una vez que lo tengas,
// o usá la variable de entorno CONTACT_EMAIL en .env.local
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contacto@figuriz.com"

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 })
  }

  const { name, email, message } = body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Todos los campos son requeridos." },
      { status: 400 }
    )
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "El email ingresado no es válido." },
      { status: 400 }
    )
  }

  try {
    await resend.emails.send({
      // "from" debe ser un dominio verificado en Resend.
      // Durante el desarrollo podés usar: onboarding@resend.dev
      from: "Figuriz <landing@rs.figuriz.com>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1F2933;">
          <h2 style="color: #C1121F; margin-bottom: 4px;">Nueva consulta desde figuriz.com</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #C1121F;">${email}</a></p>
          <p style="margin-top: 16px;"><strong>Mensaje:</strong></p>
          <p style="background: #f9f9f9; padding: 16px; border-left: 3px solid #C1121F; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
          <p style="font-size: 12px; color: #888;">Este mensaje fue enviado desde el formulario de contacto de figuriz.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[contact] Error al enviar email:", error)
    return NextResponse.json(
      { error: "No pudimos enviar tu mensaje. Intentá de nuevo más tarde." },
      { status: 500 }
    )
  }
}
