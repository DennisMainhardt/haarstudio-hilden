import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceData, Service, ServiceCategoryType, isMainCategory } from "@/data/services";

const Services = () => {
  // Flatten all services
  const allServices: Service[] = serviceData
    .filter(isMainCategory)
    .flatMap(category => category.subCategories)
    .flatMap(subCategory => subCategory.services);

  // Select the first 6 services to feature on the homepage
  const featuredServices = allServices.slice(0, 6);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Unsere Leistungen</h2>
          <p className="text-muted-foreground mt-6">
            Entdecke unsere beliebtesten Leistungen – individuell, typgerecht und mit Liebe zum Detail.
            Ob frischer Haarschnitt, Farbveränderung oder Styling für besondere Anlässe: Bei uns dreht sich alles um deinen Look und dein gutes Gefühl dabei.
            <br />
            Wir nehmen uns Zeit, hören zu und sorgen dafür, dass du dich rundum schön, sicher und wohlfühlst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="service-item bg-white rounded-xl p-8 border border-border/80 
                         transition-all duration-300 flex flex-col h-full shadow-sm 
                         hover:shadow-lg hover:border-secondary hover:scale-[1.03]"
            >
              <div className="mb-5 inline-block p-3 rounded-full bg-secondary/20 w-fit">
                <Scissors className="h-6 w-6 text-secondary" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-primary">{service.name}</h3>
              <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">{service.description || ''}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/60">
                <div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <a href="/#contact">
                  <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Jetzt Buchen
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md border border-border">
          <p className="text-muted-foreground mb-6">
            Diese Übersicht zeigt nur unsere beliebtesten Leistungen.
            Alle Services beinhalten eine persönliche Beratung – für ein Ergebnis, das zu dir passt.
            Die komplette Leistungsübersicht findest du hier:
          </p>
          <Link to="/leistungen">
            <Button className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-md text-secondary-foreground">
              <Scissors className="h-4 w-4 mr-2" />
              Komplette Leistungsliste Ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default Services;
