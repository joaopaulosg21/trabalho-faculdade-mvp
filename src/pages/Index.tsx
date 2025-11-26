import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Briefcase, Users, MapPin, Target, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Primeiro emprego começa
                <span className="text-primary"> perto de você</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Conectamos jovens em busca de oportunidades com empreendedores locais que precisam de ajuda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="trabalho-faculdade-mvp/cadastro-jovem">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Users className="mr-2 h-5 w-5" />
                    Sou Jovem
                  </Button>
                </Link>
                <Link to="trabalho-faculdade-mvp/cadastro-empresa">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Sou Empreendedor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <img
                src={heroImage}
                alt="Jovens e empreendedores se conectando"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Como Funciona?</h2>
            <p className="text-xl text-muted-foreground">É simples e direto ao ponto</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">1. Cadastre-se</h3>
              <p className="text-muted-foreground">
                Jovens criam perfil com habilidades. Empreendedores postam vagas disponíveis.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">2. Match Local</h3>
              <p className="text-muted-foreground">
                Nossa plataforma conecta candidatos com vagas próximas baseado em habilidades e localização.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">3. Conecte-se</h3>
              <p className="text-muted-foreground">
                Entre em contato direto via WhatsApp e agende uma conversa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-card py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Jovens Cadastrados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">200+</div>
              <p className="text-muted-foreground">Empreendedores Ativos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">350+</div>
              <p className="text-muted-foreground">Conexões Realizadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Por Que Escolher o Match Empreendedor?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-elegant transition-smooth">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Economia Local</h3>
              <p className="text-muted-foreground">
                Fortalecemos a economia da sua comunidade conectando talentos locais com oportunidades próximas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-smooth">
              <Award className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Sem Burocracia</h3>
              <p className="text-muted-foreground">
                Processo simples e rápido. Sem currículos complexos ou processos seletivos longos.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-smooth">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Primeiro Emprego</h3>
              <p className="text-muted-foreground">
                Ajudamos jovens a dar o primeiro passo na carreira profissional com oportunidades reais.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-smooth">
              <Briefcase className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Suporte aos Pequenos</h3>
              <p className="text-muted-foreground">
                Facilitamos para pequenos empreendedores encontrarem ajuda qualificada sem complicações.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="gradient-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de jovens e empreendedores que já estão construindo o futuro da sua comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="trabalho-faculdade-mvp/vagas">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Ver Vagas Disponíveis
              </Button>
            </Link>
            <Link to="trabalho-faculdade-mvp/candidatos">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Ver Candidatos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
