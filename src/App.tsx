import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vagas from "./pages/Vagas";
import Candidatos from "./pages/Candidatos";
import CadastroJovem from "./pages/CadastroJovem";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="trabalho-faculdade-mvp/" element={<Index />} />
          <Route path="trabalho-faculdade-mvp/vagas" element={<Vagas />} />
          <Route path="trabalho-faculdade-mvp/candidatos" element={<Candidatos />} />
          <Route path="trabalho-faculdade-mvp/cadastro-jovem" element={<CadastroJovem />} />
          <Route path="trabalho-faculdade-mvp/cadastro-empresa" element={<CadastroEmpresa />} />
          <Route path="trabalho-faculdade-mvp/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
