import { Button } from "./ui/button";
import GridDistortion from "./ui/GridDistortion";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* GridDistortion Background */}
      <div className="absolute inset-0 w-full h-full">
        <GridDistortion 
          imageSrc="/images/bg-header.avif"
          grid={10}
          mouse={0.5}
          strength={0.3}
          relaxation={0.85}
          className="w-full h-full"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
            DEPS
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light text-gray-200 mt-2">
              MODELS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Transformamos ideias em experiências digitais marcantes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Nossos Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}