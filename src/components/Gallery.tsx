import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const images = [
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_1116-767x1024.jpg",
    style: "Style Textur",
  },
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_0353-628x1024.jpg",
    style: "Style Textur",
  },
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_0970-595x1024.jpeg",
    style: "Style Textur",
  },
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_1118-767x1024.jpg",
    style: "Style Textur",
  },
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_1120-764x1024.jpg",
    style: "Style Textur",
  },
  {
    url: "https://haarstudio-hilden.de/wp-content/uploads/2024/04/web_IMG_1124-778x1024.jpg",
    style: "Style Textur",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Unsere Galerie</h2>
          <p className="text-muted-foreground mt-6">
            Hier siehst du echte Ergebnisse – echte Menschen, echte Veränderungen. Jeder Look wurde mit Sorgfalt, Fingerspitzengefühl und einem offenen Ohr für die Wünsche unserer Kund*innen gestaltet. Lass dich inspirieren – vielleicht ist dein nächster Look schon dabei?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-md card-hover">
              <div className="aspect-square w-full">
                <img
                  src={image.url}
                  alt={`Haircut style - ${image.style}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                <div className="p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{image.style}</p>
                  <button className="mt-2 text-secondary flex items-center text-sm font-medium hover:text-white transition-colors">
                    <span>View details</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md border border-border">
          <h3 className="text-xl font-bold mb-4">Entdecke mehr auf Instagram</h3>
          <a
            href="https://www.instagram.com/haarstudiohava/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-md text-secondary-foreground">
              <Instagram className="h-5 w-5" />
              Folgt uns auf Instagram
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Bleibt auf dem Laufenden mit unseren neuesten Styles und Inspirationen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
