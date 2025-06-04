import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Fundo sutil com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>
      
      {/* Conteúdo do Hero */}
      <div className="relative z-10 flex items-center justify-center text-white h-full">
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transformamos ideias em <span className="text-[#FEAC0E]">experiências digitais</span> marcantes
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Soluções em landing pages, e-commerces e sistemas web com performance e design de alto impacto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button>
                  Solicite um orçamento
                </Button>
                <Button variant="outline">
                  Conheça nosso trabalho
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}