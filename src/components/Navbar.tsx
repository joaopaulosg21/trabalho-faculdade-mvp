import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, User, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-smooth">
            <Briefcase className="w-6 h-6 text-primary" />
            Match Empreendedor
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/vagas" className="text-foreground hover:text-primary transition-smooth font-medium">
              Vagas
            </Link>
            <Link to="/candidatos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Candidatos
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-smooth font-medium">
              Sobre
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/cadastro-jovem">
                <Button variant="outline" size="sm">
                  Sou Jovem
                </Button>
              </Link>
              <Link to="/cadastro-empresa">
                <Button variant="hero" size="sm">
                  Sou Empreendedor
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/vagas" className="text-foreground hover:text-primary transition-smooth font-medium">
                Vagas
              </Link>
              <Link to="/candidatos" className="text-foreground hover:text-primary transition-smooth font-medium">
                Candidatos
              </Link>
              <Link to="/sobre" className="text-foreground hover:text-primary transition-smooth font-medium">
                Sobre
              </Link>
              <Link to="/cadastro-jovem">
                <Button variant="outline" size="sm" className="w-full">
                  Sou Jovem
                </Button>
              </Link>
              <Link to="/cadastro-empresa">
                <Button variant="hero" size="sm" className="w-full">
                  Sou Empreendedor
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
