'use client';

import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export default function Aurora({
  colorStops = ['#3A29FF', '#FF94B4', '#FF3232'],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Função para redimensionar o canvas
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Inicializa o canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Função de animação
    const animate = () => {
      time += 0.01 * speed;
      
      // Limpa o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Cria o gradiente
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Adiciona os color stops
      colorStops.forEach((color, index) => {
        const offset = (index / (colorStops.length - 1) + time * 0.1) % 1;
        gradient.addColorStop(offset, color);
      });
      
      // Preenche o fundo
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Desenha as ondas
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        
        const waveAmplitude = canvas.height * 0.1 * amplitude * (i + 1) / 3;
        const waveFrequency = 0.005 * (i + 1);
        const waveSpeed = time * (i + 1) * 0.2;
        
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + 
                   Math.sin(x * waveFrequency + waveSpeed) * waveAmplitude + 
                   Math.cos(x * waveFrequency * 0.8 + waveSpeed * 1.3) * waveAmplitude * 0.5;
          
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Aplica o efeito de blend
        ctx.globalAlpha = blend / (i + 1);
        ctx.fillStyle = colorStops[i % colorStops.length];
        ctx.fill();
      }
      
      // Restaura a opacidade
      ctx.globalAlpha = 1;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorStops, blend, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}