export interface Service {
  id: number;
  name: string; // Can include details like "– Kurz (z.B. Bob, Pixie)"
  price: string;
  description?: string; // Optional: Keep if needed for specific items
  duration?: string;
  popular?: boolean; // Add popular flag back
}

export interface SubCategory {
  id: string;
  title: string; // e.g., "Haarschnitte & Styling"
  tagline?: string; // Make optional
  description?: string; // Make optional
  services: Service[];
}

export interface MainCategory {
  id: string; // e.g., 'damen'
  title: string; // e.g., "Damen"
  categoryDescription?: string;
  subCategories: SubCategory[];
}

// Special structure for categories without standard sub-categories/pricing
export interface SpecialCategory {
  id: string;
  title: string;
  description: string[]; // Array of paragraph strings
  priceInfo?: string; // e.g., "Preis wird vor Ort festgelegt."
}

export type ServiceCategoryType = MainCategory | SpecialCategory;

// Export the helper function
export function isMainCategory(category: ServiceCategoryType): category is MainCategory {
  return (category as MainCategory).subCategories !== undefined;
}

export const serviceData: ServiceCategoryType[] = [
  // Damen
  {
    id: 'damen',
    title: 'Damen',
    categoryDescription: 'Professionelle Haarschnitte, Styling, Farbe und Pflege für Damen.',
    subCategories: [
      {
        id: 'damen-haarschnitte',
        title: 'Haarschnitte & Styling',
        tagline: 'Individuelle Schnitte für strahlenden Ausdruck', 
        description: 'Ob klassisch, modern oder extravagant – wir kreieren den perfekten Schnitt, der Ihre Persönlichkeit unterstreicht. Inklusive Waschen, Schneiden und professionellem Styling.', 
        services: [
          { id: 101, name: 'Waschen & Föhnen', price: '30€', duration: 'ca. 30-45 Min' },
          { id: 102, name: 'Waschen, Schneiden & Föhnen – Kurz (z.B. Bob, Pixie)', price: '42€', duration: 'ca. 60 Min' },
          { id: 103, name: 'Waschen, Schneiden & Föhnen – Mittel (bis Schulterlänge)', price: '49€', duration: 'ca. 60-75 Min', popular: true },
          { id: 104, name: 'Waschen, Schneiden & Föhnen – Lang (über Schulter)', price: '59€', duration: 'ca. 75-90 Min' },
        ]
      },
      {
        id: 'damen-farbe',
        title: 'Farbbehandlungen',
        tagline: 'Brillante Farben, gesunder Glanz', 
        description: 'Verleihen Sie Ihrem Haar neue Leuchtkraft. Wir verwenden hochwertige Farben für ein brillantes Ergebnis und gesund aussehendes Haar.', 
        services: [
          { id: 105, name: 'Ansatzfarbe (bis 2 cm)', price: '45€', duration: 'ab 90 Min' },
          { id: 106, name: 'Komplettfärbung (einheitlicher Look)', price: '58€', duration: 'ab 90 Min' },
          { id: 107, name: 'Glossing (Farbauffrischung & Glanz)', price: 'ab 30€', duration: 'ca. 30 Min' },
        ]
      },
      {
        id: 'damen-straehnen',
        title: 'Strähnentechniken',
        tagline: 'Natürliche Akzente oder aufregende Kontraste', 
        description: 'Von sanften Highlights bis zu ausdrucksstarker Balayage – wir beherrschen vielfältige Techniken für individuelle Farbspiele in Ihrem Haar.',
        services: [
          { id: 108, name: 'Highlights (einzelne Partien)', price: 'ab 56€', duration: 'ab 90 Min' },
          { id: 109, name: 'Oberkopfsträhnen', price: 'ab 65€', duration: 'ab 90 Min' },
          { id: 110, name: 'Ganzkopfsträhnen', price: 'ab 75€', duration: 'ab 120 Min' },
          { id: 111, name: 'Balayage (inkl. Glossing & Pflegebehandlung)', price: 'ab 165€', duration: 'ab 180 Min' },
        ]
      },
      {
        id: 'damen-pflege',
        title: 'Pflege & Aufbau',
        tagline: 'Intensive Verwöhnmomente für Ihr Haar', 
        description: 'Gönnen Sie Ihrem Haar eine Extraportion Pflege. Unsere hochwertigen Treatments bauen das Haar von innen auf und sorgen für Geschmeidigkeit und Glanz.',
        services: [
          { id: 112, name: 'Pflegekur (Basis)', price: '15€', duration: 'ca. 15 Min' },
          { id: 113, name: 'Newsha Rescue Treatment (intensiv)', price: '30€', duration: 'ca. 20 Min' },
          { id: 114, name: 'Olaplex Treatment (strukturstärkend)', price: '30€', duration: 'ca. 20 Min' },
          { id: 115, name: 'Newsha Farbmaske (mit Farbpigmenten)', price: '8€', duration: 'ca. 10 Min' },
          { id: 116, name: 'Newsha Haarmaske (pflegend)', price: '5€', duration: 'ca. 10 Min' },
        ]
      },
    ]
  },
  // Herren
  {
    id: 'herren',
    title: 'Herren',
    categoryDescription: 'Präzise Schnitte, klassische Rasuren und moderne Bartstyles für Herren.',
    subCategories: [
      {
        id: 'herren-schnitt',
        title: 'Schnitt & Styling',
        tagline: 'Präzision für den modernen Mann', 
        description: 'Vom klassischen Faconschnitt bis zum trendigen Fade Cut – wir bringen Ihren Style auf den Punkt.',
        services: [
          { id: 201, name: 'Waschen, Schneiden & Styling', price: '30€', duration: 'ca. 30-45 Min', popular: true },
          { id: 202, name: 'Maschinenschnitt (eine Länge)', price: '15€', duration: 'ca. 15 Min' },
          { id: 203, name: 'Fade Cut / Skin Fade (präziser Übergang)', price: 'ab 35€', duration: 'ca. 45 Min' },
        ]
      },
      {
        id: 'herren-bart',
        title: 'Bartpflege & Rasur',
        tagline: 'Perfekte Konturen, gepflegter Look',
        description: 'Die Kunst der Bartpflege: Wir formen, trimmen und pflegen Ihren Bart oder bieten eine entspannende Nassrasur mit heißem Handtuch.',
        services: [
          { id: 204, name: 'Bartkorrektur / Bartstyling', price: '12–20€', duration: 'ca. 15-30 Min' },
          { id: 205, name: 'Heiße Handtuchbehandlung', price: '10€', duration: 'ca. 10 Min' },
        ]
      },
      {
        id: 'herren-farbe',
        title: 'Farbauffrischung',
        tagline: 'Dezent und natürlich',
        description: 'Kaschieren Sie erste graue Haare oder frischen Sie Ihre Naturfarbe auf – für ein jüngeres, vitaleres Aussehen.',
        services: [
          { id: 206, name: 'Color Refresh (leichte Tönung)', price: '12€', duration: 'ca. 15 Min' },
        ]
      },
      {
        id: 'herren-paket',
        title: 'Kombipaket',
        tagline: 'Alles für den gepflegten Auftritt',
        description: 'Das Rundum-sorglos-Paket für den Mann: Kombinieren Sie Schnitt, Bartpflege und Styling.',
        services: [
          { id: 207, name: 'Premium Paket (Schnitt + Bart + Handtuch + Styling)', price: '49€', duration: 'ca. 45 Min', popular: true },
        ]
      },
    ]
  },
  // Teens
  {
    id: 'teens',
    title: 'Teens (ab 14 Jahren)',
    categoryDescription: 'Moderne Schnitte und Stylings für junge Leute.',
    subCategories: [
      {
        id: 'teens-services',
        title: '', // No explicit sub-category title needed here visually
        services: [
          { id: 301, name: 'Mädchen – Waschen, Schneiden & Styling', price: 'ab 25€', duration: 'ca. 45-60 Min' },
          { id: 302, name: 'Jungen – Schnitt & Styling', price: '18€', duration: 'ca. 30 Min' },
        ]
      }
    ]
  },
  // Haarverlängerung (Special Case)
  {
    id: 'haarverlaengerung',
    title: 'Haarverlängerung & Haarverdichtung',
    description: [
      'Individuell auf deine Wünsche abgestimmt – mit hochwertigem Echthaar.',
      'Ein persönliches Beratungsgespräch ist erforderlich.'
    ],
    priceInfo: 'Preis wird vor Ort festgelegt.'
  } as SpecialCategory, // Type assertion for the special case
]; 