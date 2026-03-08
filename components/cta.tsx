"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { trackEvent } from "@/lib/analytics";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const schema = z.object({
  name: z.string().min(2, "Ingresá tu nombre completo."),
  email: z.string().email("El email no es válido."),
  message: z.string().min(10, "Contanos un poco más (mínimo 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

export function CTA() {
  const contentAnimation = useScrollAnimation({ animation: "fade-in-up" });
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    setSubmitState("loading");
    setServerError(null);
    try {
      let captchaToken = "";
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        captchaToken = await new Promise<string>((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
              action: "contact",
            });
            resolve(token);
          });
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaToken }),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error ?? "Ocurrió un error.");
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
      trackEvent({
        action: "form_submit",
        category: "conversion",
        label: "contact_form",
      });
      reset();
    } catch {
      setServerError(
        "No pudimos conectarnos. Revisá tu conexión e intentá de nuevo.",
      );
      setSubmitState("error");
    }
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}
      <section
        id="contacto"
        className="relative py-20 md:py-32 bg-primary overflow-hidden"
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={contentAnimation.ref}
            className={`max-w-2xl mx-auto ${contentAnimation.className}`}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-white text-balance">
                Empezá a ahorrar{" "}
                <span className="text-white/75">tiempo hoy</span>
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Contanos qué procesos querés automatizar y te proponemos una
                solución concreta.
              </p>
              <p className="mt-2 text-sm text-white/60 font-medium">
                Consultas gratuitas disponibles esta semana
              </p>
            </div>

            {/* Success state */}
            {submitState === "success" ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-white/80 max-w-sm">
                  Te respondemos a la brevedad. ¡Gracias por contactarte con
                  Figuriz!
                </p>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-white/90">
                    Nombre completo
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Juan García"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-white/80 bg-black/20 px-3 py-1.5 rounded-lg">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-white/90">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="juan@tuempresa.com"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 text-sm"
                  />
                  {errors.email && (
                    <p className="text-xs text-white/80 bg-black/20 px-3 py-1.5 rounded-lg">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-white/90">
                    ¿Qué querés automatizar?
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Ej: Tenemos muchas consultas por WhatsApp que respondemos a mano, quisiera automatizar eso..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-white/80 bg-black/20 px-3 py-1.5 rounded-lg">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {submitState === "error" && serverError && (
                  <p className="text-sm text-white bg-black/25 px-4 py-3 rounded-xl border border-white/20">
                    {serverError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold text-base rounded-xl shadow-lg shadow-black/20 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Quiero mi consulta gratuita
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/50">
                  Te respondemos dentro de las 24 horas hábiles.
                </p>
                {RECAPTCHA_SITE_KEY && (
                  <p className="text-center text-[10px] text-white/35 mt-1">
                    Protegido por reCAPTCHA de Google.{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Privacidad
                    </a>
                    {" y "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Términos
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
