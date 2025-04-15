import React from "react";
import { Facebook, Instagram, Twitter, Scissors, MapPin, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openingHours = {
    "Montag": "Geschlossen",
    "Dienstag": "10:00 - 18:30 Uhr",
    "Mittwoch": "10:00 - 18:30 Uhr",
    "Donnerstag": "10:00 - 18:30 Uhr",
    "Freitag": "10:00 - 18:30 Uhr",
    "Samstag": "10:00 - 16:00 Uhr"
  };
  const address = "Klotzstraße 5, 40721 Hilden";
  const phone = "02103 4921967";
  const email = "info@haarstudio-hilden.de";
  const telLink = `tel:${phone.replace(/\s/g, '')}`;
  const mailtoLink = `mailto:${email}`;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold">Haarstudio <span className="text-secondary">Hava Sarikaya</span></h3>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
              Mit Liebe zum Detail, ehrlicher Beratung und ausgewählten Produkten entsteht bei uns mehr als nur ein neuer Look – nämlich ein Styling, das dich widerspiegelt.
            </p>
            <div className="flex space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={mailtoLink} className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-primary-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  {address.split(',')[0]}<br />{address.split(',').slice(1).join(',').trim()}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <a href={mailtoLink} className="text-primary-foreground/90 hover:text-secondary transition-colors">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <a href={telLink} className="text-primary-foreground/90 hover:text-secondary transition-colors">{phone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="text-primary-foreground/90 hover:text-secondary transition-colors">Über Uns</a></li>
              <li><Link to="/leistungen" className="text-primary-foreground/90 hover:text-secondary transition-colors">Leistungen</Link></li>
              <li><a href="/#gallery" className="text-primary-foreground/90 hover:text-secondary transition-colors">Galerie</a></li>
              <li><a href="/#contact" className="text-primary-foreground/90 hover:text-secondary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">Öffnungszeiten</h4>
            <ul className="space-y-2 text-sm">
              {Object.entries(openingHours).map(([day, time]) => (
                <li key={day} className="flex justify-between">
                  <span className="text-primary-foreground/90">{day}</span>
                  <span className="font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/75 text-xs text-center md:text-left">
            © {currentYear} Haarstudio Hava Sarikaya. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="text-primary-foreground/75 hover:text-white text-xs">Impressum</a>
            <a href="#" className="text-primary-foreground/75 hover:text-white text-xs">Datenschutz</a>
            <a href="#" className="text-primary-foreground/75 hover:text-white text-xs">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
