import { Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-foreground">
              <Briefcase className="w-6 h-6 text-primary" />
              Match Empreendedor
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando jovens com oportunidades locais desde 2025
            </p>
          </div>

          {/* Para Jovens */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Para Jovens</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/cadastro-jovem" className="hover:text-primary transition-smooth">
                  Criar Perfil
                </Link>
              </li>
              <li>
                <Link to="/vagas" className="hover:text-primary transition-smooth">
                  Buscar Vagas
                </Link>
              </li>
              <li>
                <Link to="/dicas" className="hover:text-primary transition-smooth">
                  Dicas de Emprego
                </Link>
              </li>
            </ul>
          </div>

          {/* Para Empreendedores */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Para Empreendedores</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/cadastro-empresa" className="hover:text-primary transition-smooth">
                  Cadastrar Empresa
                </Link>
              </li>
              <li>
                <Link to="/candidatos" className="hover:text-primary transition-smooth">
                  Ver Candidatos
                </Link>
              </li>
              <li>
                <Link to="/postar-vaga" className="hover:text-primary transition-smooth">
                  Postar Vaga
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/ods-8" className="hover:text-primary transition-smooth">
                  ODS 8
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para fortalecer a economia local
          </p>
        </div>
      </div>
    </footer>
  );
};
