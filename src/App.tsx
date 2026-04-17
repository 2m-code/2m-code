import { motion } from 'motion/react';
import { ArrowRight, Code2, Cpu, Smartphone, Zap, Rocket, ChevronRight, Terminal } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 font-sans overflow-hidden relative">
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-10 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-accent" />
          <span className="text-2xl font-black tracking-tighter uppercase">excorpo<span className="text-accent">.ai</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[2px] font-bold text-muted">
          <a href="#uslugi" className="hover:text-white transition-colors">Usługi</a>
          <a href="#historia" className="hover:text-white transition-colors">Nasza Historia</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <button className="px-6 py-3 text-[10px] font-bold uppercase tracking-[1px] border border-[#444] rounded-sm hover:bg-[#111] transition-colors">
          Porozmawiajmy
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-10 max-w-[1200px] mx-auto flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#444] text-[10px] uppercase tracking-[1px] font-bold mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Nowe podejście do software'u</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(4rem,9vw,110px)] font-black tracking-[-0.05em] leading-[0.85] uppercase text-accent mb-8"
          >
            Tworzymy soft,<br />
            który zarabia.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] leading-[1.4] text-white max-w-xl mb-12 border-l-2 border-accent pl-5"
          >
            Rzuciliśmy ciepłe posadki w korporacji, żeby dostarczać realną wartość. 
            Wdrażamy AI, tworzymy aplikacje mobilne i systemy, które skalują Twój biznes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
          >
            <button className="px-10 py-5 bg-accent text-black font-extrabold uppercase text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform w-full sm:w-auto rounded-sm">
              Rozpocznij projekt <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-transparent border border-[#444] font-bold uppercase text-sm text-white hover:bg-[#111] transition-colors w-full sm:w-auto flex items-center justify-center rounded-sm">
              Zobacz nasze realizacje
            </button>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="uslugi" className="py-24 px-10 max-w-[1200px] mx-auto">
          <div className="mb-16 border-b border-[#333] pb-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent mb-4 leading-[0.9]">W czym jesteśmy najlepsi?</h2>
            <p className="text-muted text-[12px] uppercase tracking-[2px] font-bold">Nie robimy wszystkiego. Robimy to, co przynosi zysk.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Cpu className="w-6 h-6 text-accent" />,
                title: "Wdrożenia AI",
                desc: "Automatyzacja procesów, agenci AI, integracja LLM. Zastępujemy powtarzalną pracę inteligentnymi algorytmami."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-accent" />,
                title: "Aplikacje Mobilne",
                desc: "Natywne i cross-platformowe aplikacje (iOS, Android), które użytkownicy kochają używać każdego dnia."
              },
              {
                icon: <Code2 className="w-6 h-6 text-accent" />,
                title: "Custom Software",
                desc: "Dedykowane systemy webowe, platformy SaaS i narzędzia wewnętrzne szyte na miarę Twoich potrzeb."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 bg-card border border-border rounded-sm hover:border-[#444] transition-colors group relative"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-[11px] uppercase text-muted tracking-[2px] font-bold mb-3">{service.title}</h3>
                <p className="text-[15px] text-[#ccc] leading-[1.4]">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Story Section */}
        <section id="historia" className="py-24 px-10 max-w-[1200px] mx-auto">
          <div className="bg-card border border-border rounded-sm p-8 md:p-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent mb-8 leading-[0.9]">
                    Uciekliśmy z <br/>
                    <span className="text-[#444] line-through decoration-accent decoration-4">korporacji</span>
                  </h2>
                  <div className="space-y-6 text-[15px] leading-[1.4] text-[#ccc]">
                    <p>
                      Jesteśmy dwójką inżynierów, którzy mieli dość przepalania budżetów na bezużyteczne systemy i niekończące się spotkania.
                    </p>
                    <p>
                      Zbudowaliśmy ten startup, by działać inaczej: <strong className="text-white font-bold">szybko, zwinnie i z bezwzględnym nastawieniem na ROI Twojego biznesu.</strong>
                    </p>
                    <p>
                      Nie sprzedajemy Ci godzin programistów. Sprzedajemy Ci rozwiązanie Twojego problemu biznesowego.
                    </p>
                  </div>
                  
                  <div className="mt-12 pt-6 border-t border-[#333] flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[12px] font-bold uppercase tracking-[1px]">M & P — Założyciele, Ex-Senior Engineers</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="h-full min-h-[300px] rounded-sm overflow-hidden border border-[#333] relative bg-black"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black border border-[#333] p-6 rounded-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-[10px] uppercase tracking-[2px] text-accent">System status: Online</span>
                      </div>
                      <div className="h-1 w-full bg-[#222] overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-accent" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-24 px-10 text-left max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-[#333] pt-16"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent mb-6 leading-[0.9]">Gotowy na wzrost?</h2>
            <p className="text-[18px] text-white mb-10 max-w-2xl border-l-2 border-accent pl-5">
              Zostaw nam wiadomość. Odezwiemy się w ciągu 24 godzin z konkretnym planem działania. Bez korpo-gadki.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <input 
                type="email" 
                placeholder="TWÓJ ADRES E-MAIL" 
                className="px-6 py-5 bg-[#111] border border-[#333] rounded-sm w-full sm:w-96 focus:outline-none focus:border-accent transition-colors text-white text-[12px] uppercase tracking-[1px] font-bold"
              />
              <button className="px-10 py-5 bg-accent text-black font-extrabold uppercase text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform w-full sm:w-auto rounded-sm">
                Wyślij <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-8 px-10 bg-bg">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-accent" />
            <span className="text-lg font-black tracking-tighter uppercase">excorpo<span className="text-accent">.ai</span></span>
          </div>
          <p className="text-[#666] text-[10px] uppercase tracking-[1px] font-bold">© 2026 Excorpo AI. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[2px] font-bold text-muted">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
