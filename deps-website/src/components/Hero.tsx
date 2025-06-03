import Aurora from '@/components/Aurora';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Fundo animado Aurora */}
      <Aurora 
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} 
        blend={0.5} 
        amplitude={1.0} 
        speed={0.5} 
      />
      
      {/* Conteúdo do Hero */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Lado esquerdo: Título, subtítulo, CTA */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transformamos ideias em <span className="text-[#FEAC0E]">experiências digitais</span> marcantes
              </h1>
              <p className="text-lg text-gray-300">
                Soluções em landing pages, e-commerces e sistemas web com performance e design de alto impacto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  Solicite um orçamento
                </Button>
                <Button variant="outline">
                  Conheça nosso trabalho
                </Button>
              </div>
            </div>
            
            {/* Lado direito: Preview de site ou mockup animado */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-800 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder para o mockup - em produção seria substituído por uma imagem real */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0046AF]/30 to-[#49BEFF]/30 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black/50 flex items-center px-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="absolute inset-6 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">DEPS MODELS</h3>
                      <p className="text-sm">Design • Efetividade • Produtividade • Simplicidade</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FEAC0E]/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF94B4]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}