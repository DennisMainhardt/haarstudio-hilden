import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Dein Look. Mein Handwerk.<br />
              <span className="text-secondary"> Für dich.</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Ich bin Hava Sarikaya, Friseurin aus Leidenschaft. In meinem Salon steht nicht nur Ihr Haar im Mittelpunkt, sondern vor allem Sie als Mensch. Bei einer Tasse Kaffee nehme ich mir Zeit, Ihre Wünsche und Vorstellungen kennenzulernen, um gemeinsam den Look zu kreieren, der Ihre Persönlichkeit unterstreicht.
            </p>
            <p className="text-muted-foreground mb-8">
              Mit hochwertigen Produkten und modernen Techniken sorge ich dafür, dass Sie sich nicht nur während Ihres Besuchs, sondern auch danach rundum wohlfühlen. Besuchen Sie mich in der Klotzstraße 5 in Hilden – ich freue mich darauf, Sie kennenzulernen.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Hochwertige Produkte</h4>
                  <p className="text-sm text-muted-foreground">Nur ausgewählte Produkte, auf die ich selbst vertraue.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Sorgfalt bis ins Detail</h4>
                  <p className="text-sm text-muted-foreground">Jeder Schnitt mit Blick fürs Detail.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Typgerechte Stylings</h4>
                  <p className="text-sm text-muted-foreground">Typgerechte Looks – ehrlich beraten, individuell gestylt.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Sauberkeit & Wohlfühlatmosphäre</h4>
                  <p className="text-sm text-muted-foreground">Ein gepflegter Salon, in dem du dich rundum wohlfühlen kannst.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto group overflow-hidden rounded-lg bg-secondary/30 p-[14px]">
              <img
                src="/portrait.png"
                alt="Master barber"
                className="relative z-10 w-full h-full object-cover object-top rounded-lg shadow-lg transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 right-6 z-20 bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold text-primary">Hava Sarikaya</p>
                <p className="text-sm text-secondary">Meister Friseur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
