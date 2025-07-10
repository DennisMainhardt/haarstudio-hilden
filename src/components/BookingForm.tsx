import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Check, Clock, Phone, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "./GoogleMap";

const timeSlots = [
  "9:00 Uhr", "10:00 Uhr", "11:00 Uhr", "13:00 Uhr",
  "14:00 Uhr", "15:00 Uhr", "16:00 Uhr", "17:00 Uhr"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Fehlende Informationen",
        description: "Bitte füllen Sie alle erforderlichen Felder aus.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send the booking to a backend
    // For demo purposes, we'll just show the success message

    toast({
      title: "Terminanfrage erhalten",
      description: "Wir haben Ihre Terminanfrage erhalten. Wir bestätigen Ihnen in Kürze!",
      duration: 5000,
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Termin Buchen</h2>
            <p className="text-muted-foreground mb-8">
              Vereinbaren Sie Ihren Besuch mit nur wenigen Klicks. Wählen Sie Ihren gewünschten Service, Datum und Uhrzeit.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ihr Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail Adresse*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefonnummer*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Auswählen*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  >
                    <option value="">Service auswählen</option>
                    <option value="Classic Haircut">Klassischer Haarschnitt - 30€</option>
                    <option value="Beard Trim & Shape">Bart Trimmen & Formen - 25€</option>
                    <option value="Premium Package">Premium Paket - 50€</option>
                    <option value="Hot Towel Shave">Heißtuch-Rasur - 35€</option>
                    <option value="Hair & Beard Coloring">Haar- & Bartfärbung - 45€+</option>
                    <option value="Kids Haircut">Kinderhaarschnitt - 20€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Datum
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]} // Today's date as minimum
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                    ref={dateInputRef}
                    onClick={() => dateInputRef.current?.showPicker()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Wunschuhrzeit*
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={cn(
                          "py-2 px-2 text-sm border rounded-md transition-colors",
                          formData.time === time
                            ? "bg-secondary text-white border-secondary"
                            : "border-input hover:border-secondary/50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Termin Buchen
                </Button>
              </form>
            ) : (
              <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/30 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-4">
                  <Check className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Terminanfrage Erhalten!</h3>
                <p className="text-muted-foreground mb-6">
                  Vielen Dank für Ihre Terminanfrage. Wir werden Ihren Termin für {formData.service} am {formData.date} um {formData.time} in Kürze per E-Mail oder Telefon bestätigen.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Weiteren Termin Buchen
                </Button>
              </div>
            )}
          </div>

          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Besuchen Sie Uns</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Standort</h4>
                  <p className="text-muted-foreground">Klotzstraße 5</p>
                  <p className="text-muted-foreground">40721 Hilden</p>
                  <a href="https://www.google.com/maps/dir//HS+Haarstudio,+Klotzstra%C3%9Fe+5,+40721+Hilden/@51.171295,6.9300364,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b8cd72636dc69d:0xa9ccfa808ffe87d2!2m2!1d6.9312349!2d51.167027?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm underline-hover mt-1 inline-block">
                    Route Planen
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <div className="grid grid-cols-2 gap-x-4 text-muted-foreground">
                    <p>Montag</p>
                    <p>Geschlossen</p>
                    <p>Dienstag</p>
                    <p>10:00 - 18:30 Uhr</p>
                    <p>Mittwoch</p>
                    <p>10:00 - 18:30 Uhr</p>
                    <p>Donnerstag</p>
                    <p>10:00 - 18:30 Uhr</p>
                    <p>Freitag</p>
                    <p>10:00 - 18:30 Uhr</p>
                    <p>Samstag</p>
                    <p>10:00 - 16:00 Uhr</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+492103 4921967" className="text-muted-foreground underline-hover">
                    02103 4921967
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <a href="mailto:info@haarstudio-hilden.de" className="text-muted-foreground underline-hover">
                    info@haarstudio-hilden.de
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 relative h-64 rounded-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
