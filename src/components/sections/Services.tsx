// src/components/sections/Services.tsx
import { Globe, LayoutTemplate, NotebookPen, Scissors } from "lucide-react";

const services = [
  {
    title: "Portfólios & Blogs",
    desc: "Presença digital com identidade forte, páginas rápidas e layout moderno. Ideal para profissionais, creators e marcas que precisam mostrar autoridade.",
    bullets: ["Design sob medida", "SEO básico", "Responsivo e rápido"],
    Icon: NotebookPen,
  },
  {
    title: "Websites Profissionais",
    desc: "Sites institucionais e landing pages focados em conversão, credibilidade e performance. Do zero, com estrutura escalável.",
    bullets: ["Alta performance", "Estrutura para crescimento", "Experiência (UI/UX)"],
    Icon: Globe,
  },
  {
    title: "Cardápios Digitais",
    desc: "Cardápio online bonito e prático para restaurantes, lanchonetes e delivery. Atualização simples e experiência otimizada no celular.",
    bullets: ["Mobile-first", "Organização por categorias", "Link para WhatsApp/Delivery"],
    Icon: LayoutTemplate,
  },
  {
    title: "Agendamentos para Barbearia",
    desc: "Sistema de agendamento simples e eficiente para reduzir faltas, organizar horários e melhorar o atendimento ao cliente.",
    bullets: ["Agenda por profissional", "Confirmação de horários", "Gestão de serviços"],
    Icon: Scissors,
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-[#5D2A9B] to-[#502F78] bg-clip-text text-transparent">
            Serviços
          </span>
        </h2>

        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
          Soluções digitais pensadas para performance, presença e resultado. Escolha o
          serviço ideal e evolua seu negócio com a InfinityWeb.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ title, desc, bullets, Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 bg-gradient-to-br from-[#5D2A9B]/40 to-[#502F78]/25 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>

                  <ul className="mt-4 grid gap-2 text-sm text-white/70">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#5D2A9B]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-4 text-xs text-white/50">
                Entrega com layout moderno, responsivo e alinhado à sua identidade.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
