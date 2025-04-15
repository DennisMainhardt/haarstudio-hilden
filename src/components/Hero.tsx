import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Scissors } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white px-4"
      style={{
        backgroundImage: `url('/hero.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-0"></div>

      <div className="relative z-10 max-w-3xl animate-fade-in">
        <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-5">
          Ehrliches Friseurhandwerk mit Gefühl – für deinen echten Wohlfühlmoment.
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Dein Stil. Dein Moment. Deine <span className="text-secondary">Ausstrahlung</span>.
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10">
          Bei mir geht’s nicht nur um Haare – sondern um dich, dein Gefühl und einen Look, der zu dir passt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-secondary inline-flex items-center justify-center text-base px-8 py-3 h-auto group">
            <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Jetzt Wohlfühltermin buchen
          </a>
          <Link
            to="/leistungen"
            className="inline-flex items-center justify-center text-base px-8 py-3 h-auto border border-white/70 text-white/90 rounded-md hover:bg-white/10 transition-colors group"
          >
            <Scissors className="h-5 w-5 mr-2 group-hover:rotate-[15deg] transition-transform" />
            Zur Preisliste
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
