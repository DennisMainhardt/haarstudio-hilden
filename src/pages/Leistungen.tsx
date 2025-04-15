import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceData, ServiceCategoryType, MainCategory, SpecialCategory } from '@/data/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import ContactCTA from '@/components/ContactCTA';

// Helper function to check if a category is a MainCategory
function isMainCategory(category: ServiceCategoryType): category is MainCategory {
  return (category as MainCategory).subCategories !== undefined;
}

const LeistungenPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const headerOffset = 100;

  // Initialize active category
  useEffect(() => {
    if (serviceData.length > 0 && !activeCategory) {
      setActiveCategory(serviceData[0].id);
    }
  }, [activeCategory]);

  // Scroll handler
  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Scroll spying effect
  useEffect(() => {
    const handleScroll = () => {
      let currentCategory = activeCategory;
      for (const category of serviceData) {
        const element = document.getElementById(category.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
            currentCategory = category.id;
            break;
          } else if (rect.top > headerOffset) {
            break;
          }
          currentCategory = category.id;
        }
      }
      if (currentCategory !== activeCategory) {
        setActiveCategory(currentCategory);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <Link
            to="/"
            className="group inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Unsere <span className="text-secondary">Leistungen</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Entdecken Sie unser vielfältiges Angebot an professionellen Friseurleistungen. Jede Behandlung wird individuell auf Ihre Wünsche und Bedürfnisse abgestimmt.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-6 rounded-lg shadow-md border border-border mb-8">
                <h3 className="font-bold text-lg mb-4 text-primary">Kategorien</h3>
                <nav className="space-y-2">
                  {serviceData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-md transition-colors duration-150 text-muted-foreground hover:bg-muted hover:text-primary",
                        activeCategory === category.id ? "bg-muted text-primary font-medium" : ""
                      )}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="font-bold text-lg mb-4 text-primary">Termin vereinbaren</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Interesse an einer unserer Behandlungen? Buchen Sie jetzt bequem online Ihren Termin.
                </p>
                <a href="/#contact">
                  <Button className="w-full btn-secondary">
                    <Calendar className="h-4 w-4 mr-2" />
                    Jetzt Termin vereinbaren
                  </Button>
                </a>
              </div>
            </aside>

            <section className="w-full lg:w-3/4 space-y-16">
              {serviceData.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-2 text-primary">{category.title}</h2>
                  {isMainCategory(category) && category.categoryDescription && (
                    <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                      {category.categoryDescription}
                    </p>
                  )}
                  {!isMainCategory(category) && category.description.length > 0 && (
                    <div className="text-muted-foreground mb-6 max-w-2xl space-y-2 leading-relaxed">
                      {category.description.map((line, index) => <p key={index}>{line}</p>)}
                    </div>
                  )}

                  {isMainCategory(category) ? (
                    <div className="space-y-8">
                      {category.subCategories.map((subCategory) => (
                        <div key={subCategory.id}>
                          {subCategory.title && (
                            <h3 className="text-xl font-semibold mb-5 text-primary">{subCategory.title}</h3>
                          )}
                          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
                            <div className="px-4 sm:px-6 py-3 bg-muted">
                              <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">Preise</h4>
                            </div>
                            <ul className="divide-y divide-border">
                              {subCategory.services.map((service) => (
                                <li key={service.id} className="px-4 sm:px-6 py-5 flex justify-between items-start gap-4">
                                  <div>
                                    <h5 className="font-medium text-primary mb-1 text-base">{service.name}</h5>
                                    {service.duration && (
                                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                                    )}
                                  </div>
                                  <span className="text-lg font-semibold text-secondary whitespace-nowrap shrink-0">{service.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {category.priceInfo && (
                        <div className="bg-white rounded-lg shadow-sm border border-border p-4">
                          <p className="text-primary font-semibold text-center">{category.priceInfo}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <ContactCTA />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeistungenPage; 