import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Search, MessageCircle, User } from "lucide-react";
import { useState } from "react";

// Mock data
const mockCandidatos = [
  {
    id: 1,
    nome: "João Silva",
    idade: 18,
    localizacao: "Centro, São Paulo",
    disponibilidade: "Meio Período - Tarde",
    habilidades: ["Comunicação", "Informática Básica", "Organização"],
    experiencia: "Primeiro emprego",
    sobre: "Sou comunicativo, aprendo rápido e estou muito motivado para começar minha carreira profissional.",
  },
  {
    id: 2,
    nome: "Maria Santos",
    idade: 20,
    localizacao: "Jardim das Flores",
    disponibilidade: "Tempo Integral",
    habilidades: ["Atendimento ao Cliente", "Vendas", "Redes Sociais"],
    experiencia: "6 meses de estágio",
    sobre: "Tenho facilidade com pessoas e amo trabalhar com público. Já fiz estágio em loja de roupas.",
  },
  {
    id: 3,
    nome: "Pedro Costa",
    idade: 19,
    localizacao: "Vila Nova",
    disponibilidade: "Flexível",
    habilidades: ["Moto própria", "Conhecer região", "Pontualidade"],
    experiencia: "Delivery informal por 1 ano",
    sobre: "Tenho moto e conheço bem a região. Já fiz entregas por aplicativo e sempre fui pontual.",
  },
  {
    id: 4,
    nome: "Ana Paula",
    idade: 17,
    localizacao: "Centro",
    disponibilidade: "Meio Período - Manhã",
    habilidades: ["Organização", "Responsabilidade", "Trabalho em equipe"],
    experiencia: "Primeiro emprego",
    sobre: "Sou organizada e responsável. Procuro uma oportunidade para aprender e crescer profissionalmente.",
  },
];

const Candidatos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidatos = mockCandidatos.filter(
    (candidato) =>
      candidato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidato.habilidades.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
      candidato.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppContact = (candidato: typeof mockCandidatos[0]) => {
    const message = `Olá ${candidato.nome}! Vi seu perfil no Match Empreendedor e tenho uma oportunidade que pode te interessar.`;
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
              Candidatos Disponíveis
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre o talento ideal para o seu negócio
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por habilidades ou localização..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Candidatos Grid */}
          <div className="grid gap-6">
            {filteredCandidatos.map((candidato) => (
              <Card key={candidato.id} className="p-6 hover:shadow-elegant transition-smooth">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {candidato.nome}, {candidato.idade} anos
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{candidato.localizacao}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{candidato.disponibilidade}</span>
                          </div>
                        </div>

                        <p className="text-foreground mb-4">{candidato.sobre}</p>

                        <div className="mb-4">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            Habilidades:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {candidato.habilidades.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          <strong>Experiência:</strong> {candidato.experiencia}
                        </p>
                      </div>

                      <div className="flex md:flex-col gap-2">
                        <Button
                          variant="hero"
                          onClick={() => handleWhatsAppContact(candidato)}
                          className="flex-1 md:flex-none"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Contatar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredCandidatos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhum candidato encontrado. Tente outra busca.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Candidatos;
