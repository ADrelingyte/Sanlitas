import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Droplets, 
  Flame, 
  Wind, 
  Settings, 
  Menu, 
  X, 
  ChevronRight,
  ShoppingCart,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pradžia", href: "#home" },
    { name: "Paslaugos", href: "#services" },
    { name: "Apie mus", href: "#about" },
    { name: "Parduotuvė", href: "#shop" },
    { name: "Kontaktai", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter ${scrolled ? "text-blue-700" : "text-white"}`}>
              SANLITAS
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? "text-gray-700" : "text-white"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-gray-700" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
          alt="Engineering"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          UAB SANLITAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto opacity-90"
        >
          Profesionalūs santechnikos, šildymo ir inžinerinių sistemų sprendimai Jūsų namams ir verslui Plungėje.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Mūsų paslaugos
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all"
          >
            Susisiekite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string, key?: any }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Santechnika",
      description: "Vidaus ir lauko vandentiekio bei nuotekų sistemų projektavimas, montavimas ir priežiūra."
    },
    {
      icon: Flame,
      title: "Šildymas",
      description: "Šildymo sistemų (grindinis, radiatorinis) montavimas, katilinių įrengimas, šilumos siurbliai."
    },
    {
      icon: Wind,
      title: "Vėdinimas",
      description: "Rekuperacinių sistemų, vėdinimo ir oro kondicionavimo sprendimai optimaliam mikroklimatui."
    },
    {
      icon: Settings,
      title: "Inžineriniai tinklai",
      description: "Išorinių inžinerinių tinklų tiesimas, dujotiekio sistemų įrengimas ir derinimas."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Ką mes darome</h2>
          <p className="text-4xl font-bold text-gray-900 tracking-tight">Mūsų paslaugos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
              alt="Team working"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Apie mus</h2>
            <h3 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">Daugiau nei 20 metų patirties inžinerijoje</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              UAB „Sanlitas“ – tai Plungėje įsikūrusi įmonė, sukaupusi ilgametę patirtį inžinerinių sistemų srityje. Mes specializuojamės tiesiant vandentiekio, nuotekų, šildymo bei dujotiekio tinklus.
            </p>
            <div className="space-y-4">
              {[
                "Aukščiausios kokybės medžiagos",
                "Sertifikuoti specialistai",
                "Garantija visiems darbams",
                "Individualūs sprendimai kiekvienam klientui"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShoppingCart size={16} />
              <span>Fizinė parduotuvė Plungėje</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Santechnikos prekių parduotuvė</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Apsilankykite mūsų parduotuvėje, kur rasite platų asortimentą: nuo smulkiausių detalių iki modernių šildymo katilų. Konsultuojame ir padedame išsirinkti.
            </p>
            <div className="flex items-center gap-4 text-blue-100">
              <MapPin className="text-blue-400" />
              <span>V. Mačernio g. 1, Plungė</span>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500"
              alt="Plumbing supplies"
              className="rounded-2xl shadow-lg h-48 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=500"
              alt="Heating equipment"
              className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Susisiekite</h2>
          <p className="text-4xl font-bold text-gray-900 tracking-tight">Mūsų kontaktai</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Telefonas</p>
                <a href="tel:+37044851711" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  +370 448 51711
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">El. paštas</p>
                <a href="mailto:sanlitas@gmail.com" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  sanlitas@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Adresas</p>
                <p className="text-xl font-bold text-gray-900">
                  V. Mačernio g. 1, Plungė<br />
                  LT-90142
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Darbo laikas</p>
                <p className="text-lg font-medium text-gray-700">
                  I-V: 08:00 - 17:00<br />
                  VI-VII: Nedirbame
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[400px] rounded-3xl overflow-hidden shadow-lg bg-gray-100 relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=V.%20Mačernio%20g.%201,%20Plungė,%20Lietuva&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="UAB Sanlitas Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-blue-500">SANLITAS</span>
            <p className="text-gray-400 mt-2 text-sm">© {new Date().getFullYear()} UAB Sanlitas. Visos teisės saugomos.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privatumo politika</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Slapukai</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
