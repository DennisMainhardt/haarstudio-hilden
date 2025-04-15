import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const ContactCTA = () => {
  const phoneNumber = "02103 4921967";
  const telLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  return (
    <div className="bg-muted p-8 md:p-10 rounded-lg shadow-sm border border-border">
      <h3 className="text-2xl font-bold text-primary mb-3">
        Haben Sie Fragen?
      </h3>
      <p className="text-muted-foreground mb-6 max-w-xl">
        Wir beraten Sie gerne zu allen unseren Behandlungen und finden gemeinsam die perfekte Lösung für Ihre individuellen Bedürfnisse.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a href="/#contact">
          <Button
            variant="outline"
            className="bg-white border-border text-secondary hover:bg-gray-50 hover:text-secondary shadow-sm px-6 py-3 h-auto"
          >
            Kontakt aufnehmen
          </Button>
        </a>
        <a
          href={telLink}
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
        >
          <Phone className="h-4 w-4" />
          {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default ContactCTA; 