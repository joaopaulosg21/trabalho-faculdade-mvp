import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Briefcase } from "lucide-react";

const CadastroEmpresa = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nomeResponsavel: "",
    localizacao: "",
    telefone: "",
    tipoNegocio: "",
    cargoVaga: "",
    tipoContrato: "",
    salario: "",
    horario: "",
    habilidadesDesejadas: "",
    descricaoVaga: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Dados da vaga:", formData);
    
    toast({
      title: "Vaga publicada com sucesso!",
      description: "Jovens da sua região já podem visualizar sua oportunidade.",
    });

    setTimeout(() => {
      window.location.href = "/candidatos";
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
              Cadastro de Empresa
            </h1>
            <p className="text-xl text-muted-foreground">
              Publique sua vaga e encontre talentos locais
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Informações da Empresa</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="nomeEmpresa">Nome da Empresa *</Label>
                  <Input
                    id="nomeEmpresa"
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleChange}
                    placeholder="Nome do seu negócio"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nomeResponsavel">Seu Nome *</Label>
                    <Input
                      id="nomeResponsavel"
                      name="nomeResponsavel"
                      value={formData.nomeResponsavel}
                      onChange={handleChange}
                      placeholder="Nome do responsável"
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

                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="tipoNegocio">Tipo de Negócio *</Label>
                    <Input
                      id="tipoNegocio"
                      name="tipoNegocio"
                      value={formData.tipoNegocio}
                      onChange={handleChange}
                      placeholder="Ex: Padaria, Loja, Salão"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Detalhes da Vaga</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="cargoVaga">Cargo/Função *</Label>
                  <Input
                    id="cargoVaga"
                    name="cargoVaga"
                    value={formData.cargoVaga}
                    onChange={handleChange}
                    placeholder="Ex: Atendente, Auxiliar, Entregador"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tipoContrato">Tipo de Contrato *</Label>
                    <Input
                      id="tipoContrato"
                      name="tipoContrato"
                      value={formData.tipoContrato}
                      onChange={handleChange}
                      placeholder="Meio Período / Tempo Integral"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salario">Salário *</Label>
                    <Input
                      id="salario"
                      name="salario"
                      value={formData.salario}
                      onChange={handleChange}
                      placeholder="R$ 1.000/mês"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario">Horário de Trabalho *</Label>
                  <Input
                    id="horario"
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    placeholder="Ex: Segunda a Sexta, 14h-18h"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="habilidadesDesejadas">Habilidades Desejadas *</Label>
                  <Input
                    id="habilidadesDesejadas"
                    name="habilidadesDesejadas"
                    value={formData.habilidadesDesejadas}
                    onChange={handleChange}
                    placeholder="Ex: Comunicação, Pontualidade (separe por vírgula)"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricaoVaga">Descrição da Vaga *</Label>
                  <Textarea
                    id="descricaoVaga"
                    name="descricaoVaga"
                    value={formData.descricaoVaga}
                    onChange={handleChange}
                    placeholder="Descreva as atividades, o que você busca no candidato..."
                    rows={5}
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Briefcase className="mr-2 h-5 w-5" />
                Publicar Vaga
              </Button>
            </form>
          </Card>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">💡 Dicas para atrair candidatos:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Seja claro sobre as responsabilidades e expectativas</li>
              <li>Destaque que não exige experiência se for primeiro emprego</li>
              <li>Mencione benefícios como flexibilidade de horário</li>
              <li>Responda rapidamente aos interessados no WhatsApp</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CadastroEmpresa;
