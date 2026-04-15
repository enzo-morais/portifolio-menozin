"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";
import { Calculator, ArrowRight, Check, Tag, Info } from "lucide-react";

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const services = [
  { id: "ticket", name: "Sistema de Tickets", price: 25 },
  { id: "verificacao", name: "Bot de Verificação", price: 25 },
  { id: "registro", name: "Bot de Registro", price: 15 },
  { id: "sorteio", name: "Bot de Sorteio", price: 15 },
  { id: "bate-ponto", name: "Bot de Bate-Ponto", price: 15 },
  { id: "anuncio", name: "Bot de Anúncio", price: 10 },
  { id: "boas-vindas", name: "Boas-Vindas + Auto Role", price: 8 },
  { id: "status", name: "Bot de Status de IP", price: 15 },
  { id: "cloner", name: "Cloner", price: 30 },
  { id: "registro-cla", name: "Bot de Registro de Clã", price: 20 },
  { id: "site", name: "Site Institucional", price: 200 },
  { id: "personalizado", name: "Bot Personalizado", price: 0 }, // Sob consulta
];

const extras = [
  { id: "dashboard", name: "Dashboard Web", price: 150 },
  { id: "database", name: "Banco de Dados", price: 50 },
  { id: "urgente", name: "Entrega Urgente (48h)", multiplier: 1.3 },
  { id: "codigo", name: "Código-Fonte Incluído", price: 80 },
];

export default function Orcamento() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let totalBots = 0;
    let totalExtras = 0;
    
    // Soma dos serviços (separando bots de outros serviços)
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        // Site e Bot Personalizado não entram no desconto
        if (serviceId === 'site' || serviceId === 'personalizado') {
          totalExtras += service.price;
        } else {
          totalBots += service.price;
        }
      }
    });

    // Soma dos extras
    selectedExtras.forEach(extraId => {
      const extra = extras.find(e => e.id === extraId);
      if (extra && extra.price) totalExtras += extra.price;
    });

    // Aplicar desconto apenas nos bots
    const numBots = selectedServices.filter(id => id !== 'site' && id !== 'personalizado').length;
    let discount = 0;
    if (numBots >= 3) {
      discount = 0.20; // 20% OFF
    } else if (numBots === 2) {
      discount = 0.15; // 15% OFF
    }

    if (discount > 0) {
      totalBots = totalBots * (1 - discount);
    }

    let total = totalBots + totalExtras;

    // Multiplicador de urgência (aplica no total)
    if (selectedExtras.includes("urgente")) {
      const urgenteExtra = extras.find(e => e.id === "urgente");
      if (urgenteExtra?.multiplier) {
        total *= urgenteExtra.multiplier;
      }
    }

    return Math.round(total);
  };

  const getDiscount = () => {
    const numBots = selectedServices.filter(id => id !== 'site' && id !== 'personalizado').length;
    if (numBots >= 3) return 0.20;
    if (numBots === 2) return 0.15;
    return 0;
  };

  const getSubtotal = () => {
    let subtotal = 0;
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) subtotal += service.price;
    });
    selectedExtras.forEach(extraId => {
      const extra = extras.find(e => e.id === extraId);
      if (extra && extra.price) subtotal += extra.price;
    });
    if (selectedExtras.includes("urgente")) {
      const urgenteExtra = extras.find(e => e.id === "urgente");
      if (urgenteExtra?.multiplier) {
        subtotal *= urgenteExtra.multiplier;
      }
    }
    return Math.round(subtotal);
  };

  const total = calculateTotal();
  const subtotal = getSubtotal();
  const discount = getDiscount();

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={stagger}>

            {/* Header */}
            <motion.div className="mb-16 text-center" variants={fadeIn}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                <Calculator className="w-8 h-8" style={{ color: "var(--text-primary)" }} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Calculadora de Orçamento
              </h1>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Selecione os serviços que você precisa e veja uma estimativa instantânea do valor do projeto.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Seleção de Serviços */}
              <motion.div variants={fadeIn} className="lg:col-span-2 space-y-8">
                
                {/* Serviços */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    Serviços
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map(service => (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className="cursor-pointer"
                      >
                        <VoidCard
                          className={`p-4 transition-all ${
                            selectedServices.includes(service.id) ? "ring-2 ring-[var(--card-border-hover)]" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                selectedServices.includes(service.id) ? "bg-white" : ""
                              }`}
                                style={{
                                  borderColor: selectedServices.includes(service.id) ? "var(--text-primary)" : "var(--input-border)"
                                }}>
                                {selectedServices.includes(service.id) && (
                                  <Check className="w-3 h-3" style={{ color: "var(--bg)" }} />
                                )}
                              </div>
                              <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                                {service.name}
                              </span>
                            </div>
                            <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                              {service.price === 0 ? "Grátis" : `R$ ${service.price}${service.id !== 'site' && service.id !== 'personalizado' ? '/mês' : ''}`}
                            </span>
                          </div>
                        </VoidCard>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    Extras
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {extras.map(extra => (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className="cursor-pointer"
                      >
                        <VoidCard
                          className={`p-4 transition-all ${
                            selectedExtras.includes(extra.id) ? "ring-2 ring-[var(--card-border-hover)]" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                selectedExtras.includes(extra.id) ? "bg-white" : ""
                              }`}
                                style={{
                                  borderColor: selectedExtras.includes(extra.id) ? "var(--text-primary)" : "var(--input-border)"
                                }}>
                                {selectedExtras.includes(extra.id) && (
                                  <Check className="w-3 h-3" style={{ color: "var(--bg)" }} />
                                )}
                              </div>
                              <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                                {extra.name}
                              </span>
                            </div>
                            <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                              {extra.price ? `R$ ${extra.price}` : "+30%"}
                            </span>
                          </div>
                        </VoidCard>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>

              {/* Resumo */}
              <motion.div variants={fadeIn} className="lg:col-span-1">
                <div className="sticky top-24">
                  <VoidCard className="p-6">
                    <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                      Resumo do Orçamento
                    </h3>

                    {selectedServices.length === 0 && selectedExtras.length === 0 ? (
                      <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>
                        Selecione os serviços para ver o orçamento
                      </p>
                    ) : (
                      <>
                        <div className="space-y-3 mb-6">
                          {selectedServices.map(serviceId => {
                            const service = services.find(s => s.id === serviceId);
                            return service ? (
                              <div key={serviceId} className="flex justify-between text-sm">
                                <span style={{ color: "var(--text-secondary)" }}>{service.name}</span>
                                <span style={{ color: "var(--text-primary)" }}>R$ {service.price}</span>
                              </div>
                            ) : null;
                          })}
                          {selectedExtras.map(extraId => {
                            const extra = extras.find(e => e.id === extraId);
                            return extra ? (
                              <div key={extraId} className="flex justify-between text-sm">
                                <span style={{ color: "var(--text-secondary)" }}>{extra.name}</span>
                                <span style={{ color: "var(--text-primary)" }}>
                                  {extra.price ? `R$ ${extra.price}` : "+30%"}
                                </span>
                              </div>
                            ) : null;
                          })}
                        </div>

                        <div className="pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                          {discount > 0 && (
                            <>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                  Subtotal
                                </span>
                                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                  R$ {subtotal}
                                </span>
                              </div>
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-semibold" style={{ color: "#22c55e" }}>
                                  Desconto ({discount * 100}%)
                                </span>
                                <span className="text-sm font-semibold" style={{ color: "#22c55e" }}>
                                  - R$ {subtotal - total}
                                </span>
                              </div>
                            </>
                          )}
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                              Total {discount > 0 ? "com Desconto" : "Estimado"}
                            </span>
                            <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                              R$ {total}
                            </span>
                          </div>
                        </div>

                        <a href="/contato" className="btn-primary w-full inline-flex items-center justify-center mt-6">
                          Solicitar Orçamento <ArrowRight className="w-4 h-4" />
                        </a>

                        <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
                          * Valor estimado. O orçamento final pode variar de acordo com os requisitos específicos.
                        </p>

                        {/* Descontos */}
                        {selectedServices.length >= 2 && (
                          <div className="mt-4 p-3 rounded-lg" style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)" }}>
                            <div className="flex items-center gap-2 mb-2">
                              <Tag className="w-4 h-4" style={{ color: "var(--text-primary)" }} />
                              <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                                Descontos Disponíveis:
                              </p>
                            </div>
                            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                              • 2 bots: 15% OFF
                            </p>
                            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                              • 3+ bots: 20% OFF
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </VoidCard>

                  {/* Info */}
                  <VoidCard className="p-6 mt-4">
                    <h4 className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                      Informações
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <li>✓ Hospedagem incluída</li>
                      <li>✓ 30 dias de suporte</li>
                      <li>✓ Atualizações gratuitas</li>
                      <li>✓ Documentação completa</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--text-secondary)" }} />
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          Os valores dos bots são <strong style={{ color: "var(--text-secondary)" }}>mensais</strong>. Sites têm pagamento único.
                        </p>
                      </div>
                    </div>
                  </VoidCard>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
