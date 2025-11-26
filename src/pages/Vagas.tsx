import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, DollarSign, Search, MessageCircle } from "lucide-react";
import { useState } from "react";

// Mock data - em produção viria do backend
const mockVagas = [
  {
    id: 1,
    titulo: "Atendente de Loja",
    empresa: "Loja da Dona Maria",
    localizacao: "Centro, São Paulo",
    tipo: "Meio Período",
    salario: "R$ 800/mês",
    descricao: "Procuramos jovem comunicativo para atendimento ao cliente e organização de produtos.",
    habilidades: ["Comunicação", "Organização"],
    horario: "Segunda a Sexta, 14h-18h",
  },
  {
    id: 2,
    titulo: "Auxiliar de Padaria",
    empresa: "Padaria Pão Quente",
    localizacao: "Jardim das Flores",
    tipo: "Tempo Integral",
    salario: "R$ 1.200/mês",
    descricao: "Vaga para auxiliar na produção e atendimento. Não precisa experiência, ensinamos tudo!",
    habilidades: ["Disponibilidade manhã", "Vontade de aprender"],
    horario: "Segunda a Sábado, 6h-14h",
  },
  {
    id: 3,
    titulo: "Entregador",
    empresa: "Mercadinho do Bairro",
    localizacao: "Vila Nova",
    tipo: "Meio Período",
    salario: "R$ 600/mês + comissão",
    descricao: "Buscamos jovem para entregas locais. Moto própria é um diferencial.",
    habilidades: ["Pontualidade", "Conhecer a região"],
    horario: "Flexível",
  },
  {
    id: 4,
    titulo: "Auxiliar de Limpeza",
    empresa: "Salão Beleza Total",
    localizacao: "Centro",
    tipo: "Meio Período",
    salario: "R$ 700/mês",
    descricao: "Procuramos pessoa organizada para manutenção e limpeza do salão.",
    habilidades: ["Organização", "Responsabilidade"],
    horario: "Segunda a Sexta, 8h-12h",
  },
];

const Vagas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVagas = mockVagas.filter(
    (vaga) =>
      vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vaga.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppContact = (vaga: typeof mockVagas[0]) => {
    const message = `Olá! Vi a vaga de ${vaga.titulo} no Match Empreendedor e tenho interesse.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vagas Disponíveis
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre oportunidades perto de você
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por cargo ou localização..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Vagas Grid */}
          <div className="grid gap-6">
            {filteredVagas.map((vaga) => (
              <Card key={vaga.id} className="p-6 hover:shadow-elegant transition-smooth">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {vaga.titulo}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      {vaga.empresa}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{vaga.localizacao}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{vaga.tipo}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{vaga.salario}</span>
                      </div>
                    </div>

                    <p className="text-foreground mb-4">{vaga.descricao}</p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Habilidades desejadas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {vaga.habilidades.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      <strong>Horário:</strong> {vaga.horario}
                    </p>
                  </div>

                  <div className="flex md:flex-col gap-2">
                    <Button
                      variant="hero"
                      onClick={() => handleWhatsAppContact(vaga)}
                      className="flex-1 md:flex-none"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contatar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredVagas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhuma vaga encontrada. Tente outra busca.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vagas;
