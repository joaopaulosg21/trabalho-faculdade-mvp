import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, TrendingUp, Users } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre o Match Empreendedor
            </h1>
            <p className="text-xl text-muted-foreground">
              Conectando pessoas, fortalecendo comunidades
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Nossa Missão</h2>
                  <p className="text-muted-foreground">
                    Facilitar o acesso ao primeiro emprego para jovens brasileiros, ao mesmo tempo 
                    em que apoiamos pequenos empreendedores locais a encontrarem ajuda qualificada 
                    de forma simples e direta, fortalecendo a economia das comunidades.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">O Problema</h2>
                  <p className="text-muted-foreground mb-4">
                    Identificamos dois desafios críticos:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Para Jovens:</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Dificuldade para conseguir o primeiro emprego sem experiência</li>
                        <li>Falta de networking e contatos profissionais</li>
                        <li>Processos seletivos longos e burocráticos</li>
                        <li>Não saber onde procurar oportunidades</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Para Empreendedores:</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Dificuldade em encontrar candidatos locais</li>
                        <li>Processos de recrutamento complexos e caros</li>
                        <li>Preferência por ajuda da própria região</li>
                        <li>Necessidade de contratar rapidamente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Nossa Solução</h2>
                  <p className="text-muted-foreground mb-4">
                    Criamos uma plataforma simples e direta que:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Permite que jovens criem perfis destacando suas habilidades e disponibilidade</li>
                    <li>Facilita para empreendedores postarem vagas rapidamente</li>
                    <li>Faz matches automáticos baseados em localização e compatibilidade</li>
                    <li>Conecta as partes diretamente via WhatsApp, sem burocracia</li>
                    <li>Elimina processos seletivos longos e complexos</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Alinhamento ao ODS 8</h2>
                  <p className="text-muted-foreground mb-4">
                    O Match Empreendedor contribui diretamente para o <strong>Objetivo de Desenvolvimento 
                    Sustentável 8</strong> da ONU: Trabalho Decente e Crescimento Econômico.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-foreground font-semibold">Como contribuímos:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Promovemos o emprego juvenil e o acesso ao primeiro emprego</li>
                      <li>Incentivamos o trabalho decente com condições justas</li>
                      <li>Fortalecemos a economia local e os pequenos negócios</li>
                      <li>Reduzimos barreiras de entrada no mercado de trabalho</li>
                      <li>Fomentamos o empreendedorismo comunitário</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">Nosso Impacto</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p>Jovens Cadastrados</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <p>Empreendedores Ativos</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">350+</div>
                  <p>Conexões Realizadas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
