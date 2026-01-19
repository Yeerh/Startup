export function Footer() {
  const phoneLabel = "(81) 99238-8506";
  const phoneDigits = "81992388506";

  const whatsappLink = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Olá! Vim pelo site da InfinityWeb e gostaria de falar sobre um projeto."
  )}`;

  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca + CTA */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-extrabold text-white">InfinityWeb</h3>

            <p className="mt-3 max-w-xl text-white/70">
              Desenvolvimento web com identidade, performance e propósito.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold
                         bg-gradient-to-r from-[#5D2A9B] to-[#502F78] text-white
                         hover:opacity-90 transition"
            >
              Entre em contato
            </a>
          </div>

          {/* Atendimento */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white/80">
              Atendimento
            </h4>

            <div className="mt-4 space-y-3 text-white/75">
              <div className="flex items-start justify-between gap-6">
                <span className="text-white/60">Dias</span>
                <span className="font-semibold text-white">Segunda a Sábado</span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <span className="text-white/60">Horário</span>
                <span className="font-semibold text-white">08h às 19h</span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <span className="text-white/60">Contato</span>
                <a
                  href={`tel:+55${phoneDigits}`}
                  className="font-semibold text-white hover:underline"
                >
                  {phoneLabel}
                </a>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl
                           border border-white/10 bg-black/30 px-4 py-3 text-white
                           hover:bg-black/40 transition"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} InfinityWeb. Todos os direitos reservados.</span>
          <span>Feito com foco em experiência, desempenho e conversão.</span>
        </div>
      </div>
    </footer>
  );
}
