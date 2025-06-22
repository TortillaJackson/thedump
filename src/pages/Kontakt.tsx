
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lassen Sie uns über Ihr nächstes Venture sprechen. Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kontakt;
