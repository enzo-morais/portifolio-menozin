"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";
import { ChevronDown } from "lucide-react";

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const faqs = [
  {
    category: "Geral",
    questions: [
      {
        q: "Quanto tempo leva para desenvolver um bot?",
        a: "Bots prontos da loja são entregues em até 24h após a compra. Bots personalizados levam de 3 a 7 dias, dependendo da complexidade."
      },
      {
        q: "Qual é o prazo de suporte?",
        a: "Todos os projetos incluem 30 dias de suporte gratuito para correções e ajustes. Suporte estendido pode ser contratado separadamente."
      },
      {
        q: "Os bots ficam online 24/7?",
        a: "Sim! Todos os bots são hospedados em servidores confiáveis com uptime de 99.9%. Você não precisa se preocupar com hospedagem."
      },
      {
        q: "Posso solicitar alterações depois da entrega?",
        a: "Sim, durante os 30 dias de suporte você pode solicitar ajustes e correções sem custo adicional."
      }
    ]
  },
  {
    category: "Preços",
    questions: [
      {
        q: "Quanto custa um bot personalizado?",
        a: "Os valores variam de acordo com a complexidade. Bots simples começam em R$ 50, enquanto sistemas completos podem custar R$ 200+. Use a calculadora de orçamento para uma estimativa."
      },
      {
        q: "Quais são as formas de pagamento?",
        a: "Aceito PIX, transferência bancária e PayPal. Pagamento 50% no início e 50% na entrega para projetos personalizados."
      },
      {
        q: "Há taxa de manutenção mensal?",
        a: "Não! O pagamento é único. A hospedagem está incluída sem custos mensais adicionais."
      },
      {
        q: "Oferecem reembolso?",
        a: "Sim, se o projeto não atender aos requisitos acordados, oferecemos reembolso total nos primeiros 7 dias."
      }
    ]
  },
  {
    category: "Técnico",
    questions: [
      {
        q: "Preciso saber programar para usar os bots?",
        a: "Não! Todos os bots são entregues prontos para uso com comandos simples. Fornecemos documentação completa e suporte para configuração."
      },
      {
        q: "Posso ter acesso ao código-fonte?",
        a: "Para bots personalizados, sim! O código-fonte é entregue junto com o bot. Bots da loja não incluem código-fonte."
      },
      {
        q: "Os bots funcionam em qualquer servidor Discord?",
        a: "Sim! Todos os bots são compatíveis com qualquer servidor Discord, independente do tamanho ou configuração."
      },
      {
        q: "Posso migrar o bot para minha própria hospedagem?",
        a: "Sim, se você tiver o código-fonte (bots personalizados), pode hospedar onde quiser. Fornecemos instruções de deploy."
      }
    ]
  },
  {
    category: "Processo",
    questions: [
      {
        q: "Como funciona o processo de desenvolvimento?",
        a: "1) Você envia os requisitos, 2) Eu envio um orçamento, 3) Após aprovação, inicio o desenvolvimento, 4) Você testa e aprova, 5) Entrego o bot configurado."
      },
      {
        q: "Posso acompanhar o desenvolvimento?",
        a: "Sim! Mantenho contato constante via Discord, enviando atualizações e previews durante o desenvolvimento."
      },
      {
        q: "E se eu não gostar do resultado?",
        a: "Fazemos até 2 rodadas de revisões incluídas no projeto. Se ainda assim não atender, oferecemos reembolso conforme política."
      },
      {
        q: "Vocês fazem projetos urgentes?",
        a: "Sim! Para entregas em menos de 48h, há um acréscimo de 30% no valor do projeto."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VoidCard className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left transition-colors"
        style={{ background: isOpen ? "var(--card-bg-hover)" : "transparent" }}
      >
        <span className="font-semibold pr-4" style={{ color: "var(--text-primary)" }}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "var(--text-muted)" }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-5 pb-5 pt-2" style={{ color: "var(--text-secondary)" }}>
          {answer}
        </div>
      </div>
    </VoidCard>
  );
}

export default function FAQ() {
  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-4xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={stagger}>

            {/* Header */}
            <motion.div className="mb-16 text-center" variants={fadeIn}>
              <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                Perguntas Frequentes
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                FAQ
              </h1>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Tire suas dúvidas sobre desenvolvimento, preços, prazos e suporte.
              </p>
            </motion.div>

            {/* FAQ por categoria */}
            {faqs.map((category, idx) => (
              <motion.div key={category.category} variants={fadeIn} className="mb-12">
                <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIdx) => (
                    <FAQItem key={faqIdx} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div variants={fadeIn} className="mt-16">
              <VoidCard className="p-10 text-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  Ainda tem dúvidas?
                </h3>
                <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                  Entre em contato comigo diretamente pelo Discord ou formulário de contato.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/contato" className="btn-primary inline-flex items-center justify-center">
                    Entrar em Contato
                  </a>
                  <a href="https://discord.gg/voidsystems" target="_blank" rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center">
                    Discord
                  </a>
                </div>
              </VoidCard>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
