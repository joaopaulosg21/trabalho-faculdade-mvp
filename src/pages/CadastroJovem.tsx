import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { UserPlus } from "lucide-react";

const CadastroJovem = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    localizacao: "",
    telefone: "",
    disponibilidade: "",
    habilidades: "",
    sobre: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui seria a integração com backend
    console.log("Dados do formulário:", formData);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Agora você pode ver as vagas disponíveis e se candidatar.",
    });

    // Redirecionar para página de vagas
    setTimeout(() => {
      window.location.href = "/vagas";
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cadastro de Jovem
            </h1>
            <p className="text-xl text-muted-foreground">
              Crie seu perfil e encontre oportunidades perto de você
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="idade">Idade *</Label>
                  <Input
                    id="idade"
                    name="idade"
                    type="number"
                    value={formData.idade}
                    onChange={handleChange}
                    placeholder="Sua idade"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">WhatsApp *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="localizacao">Localização *</Label>
                <Input
                  id="localizacao"
                  name="localizacao"
                  value={formData.localizacao}
                  onChange={handleChange}
                  placeholder="Bairro, Cidade"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disponibilidade">Disponibilidade *</Label>
                <Input
                  id="disponibilidade"
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleChange}
                  placeholder="Ex: Meio período - Tarde, Tempo integral, Finais de semana"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="habilidades">Habilidades *</Label>
                <Input
                  id="habilidades"
                  name="habilidades"
                  value={formData.habilidades}
                  onChange={handleChange}
                  placeholder="Ex: Comunicação, Informática, Organização (separe por vírgula)"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sobre">Sobre Você *</Label>
                <Textarea
                  id="sobre"
                  name="sobre"
                  value={formData.sobre}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre você, suas experiências e o que está buscando..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <UserPlus className="mr-2 h-5 w-5" />
                Criar Meu Perfil
              </Button>
            </form>
          </Card>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">💡 Dicas para um bom perfil:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Seja honesto sobre suas habilidades e disponibilidade</li>
              <li>Liste todas as habilidades que você tem, mesmo que pareçam simples</li>
              <li>Conte sobre sua motivação e vontade de aprender</li>
              <li>Mantenha seu WhatsApp atualizado para receber contatos</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CadastroJovem;
