import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  Cpu,
  Smartphone,
  Check,
  Calendar,
  Mail,
  Search,
  PenTool,
  Hammer,
  Rocket,
  Facebook,
  Instagram,
  Menu,
  X,
} from 'lucide-react';

const CONTACT_EMAIL = '2mcode.it@gmail.com';
const CALENDLY_URL = 'https://calendly.com/2mcode/30min';

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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#uslugi', label: 'Usługi' },
    { href: '#pakiety', label: 'Pakiety' },
    { href: '#proces', label: 'Proces' },
    { href: '#historia', label: 'O nas' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 font-sans relative">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-[#222]/70">
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 md:py-6 max-w-[1200px] mx-auto gap-3">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img src="/logo-mark.svg" alt="2mcode" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <span className="text-xl md:text-2xl font-black tracking-tighter lowercase">2m<span className="text-[#00BCD4]">code</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[2px] font-bold text-muted">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-4 md:px-6 py-2.5 md:py-3 text-[10px] font-bold uppercase tracking-[1px] border border-[#444] rounded-sm hover:bg-[#111] transition-colors whitespace-nowrap flex-shrink-0"
        >
          Porozmawiajmy
        </a>
        {/* Burger button (mobile only) */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Otwórz menu"
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center border border-[#444] rounded-sm hover:bg-[#111] transition-colors flex-shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-bg/95 backdrop-blur-sm flex flex-col"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-5 py-6 border-b border-[#222]">
                <div className="flex items-center gap-2">
                  <img src="/logo-mark.svg" alt="2mcode" className="w-8 h-8" />
                  <span className="text-xl font-black tracking-tighter lowercase">2m<span className="text-[#00BCD4]">code</span></span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Zamknij menu"
                  className="w-10 h-10 flex items-center justify-center border border-[#444] rounded-sm hover:bg-[#111] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu links */}
              <nav className="flex-1 flex flex-col justify-center px-5 gap-1">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                    className="text-4xl font-black uppercase tracking-tighter text-gradient py-3 hover:opacity-80 transition-opacity"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* Menu footer CTA */}
              <div className="px-5 py-6 border-t border-[#222] flex flex-col gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 bg-gradient-accent text-black font-extrabold uppercase text-sm flex items-center justify-center gap-2 rounded-sm"
                >
                  Umów darmową konsultację <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[12px] uppercase tracking-[2px] font-bold text-muted hover:text-white transition-colors text-center"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-20 px-5 md:px-10 max-w-[1200px] mx-auto flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#444] text-[10px] uppercase tracking-[1px] font-bold mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Przyjmujemy 2 projekty w Q2 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.75rem,10vw,110px)] font-black tracking-[-0.05em] leading-[0.85] uppercase text-gradient mb-6 md:mb-8"
          >
            Tworzymy soft,<br />
            który zarabia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] md:text-[18px] leading-[1.4] text-white max-w-xl mb-10 md:mb-12 border-l-2 border-accent pl-4 md:pl-5"
          >
            Twój biznes zasługuje na technologię, która działa.
            <br />
            Specjalizujemy się we wdrożeniach AI, tworzeniu stron www, aplikacji mobilnych i budowie systemów, które realnie wspierają skalowanie firmy.
            <span className="block mt-3 text-muted text-[14px]">MVP w 4 tygodnie. AI audyt w 5 dni roboczych. Stała cena, bez godzin na spotkaniach.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-10 py-4 md:py-5 bg-gradient-accent text-black font-extrabold uppercase text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform w-full sm:w-auto rounded-sm"
            >
              Umów darmową konsultację <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pakiety"
              className="px-6 md:px-10 py-4 md:py-5 bg-transparent border border-[#444] font-bold uppercase text-sm text-white hover:bg-[#111] transition-colors w-full sm:w-auto flex items-center justify-center rounded-sm"
            >
              Zobacz pakiety i ceny
            </a>
          </motion.div>
        </section>

        {/* Social Proof / Metrics Strip */}
        <section className="px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222] border border-[#222] rounded-sm overflow-hidden">
            {[
              { value: '12+', label: 'Wdrożonych projektów' },
              { value: '4 tyg.', label: 'Średni czas do MVP' },
              { value: '100%', label: 'Stała cena, bez niespodzianek' },
              { value: '24h', label: 'Czas na pierwszą odpowiedź' },
            ].map((stat, i) => (
              <div key={i} className="bg-bg p-5 md:p-8">
                <div className="text-2xl md:text-4xl font-black text-accent tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] font-bold text-muted leading-[1.4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="uslugi" className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-16 border-b border-[#333] pb-6 md:pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-4 leading-[0.9]">W czym jesteśmy najlepsi?</h2>
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
                className="p-6 md:p-8 bg-card border border-border rounded-sm hover:border-[#444] transition-colors group relative"
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

        {/* Packages Section */}
        <section id="pakiety" className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-16 border-b border-[#333] pb-6 md:pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-4 leading-[0.9]">Pakiety i ceny</h2>
            <p className="text-muted text-[12px] uppercase tracking-[2px] font-bold">Stała cena. Jasny zakres. Zero niespodzianek na fakturze.</p>
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
                name: 'AI Audyt',
                price: 'od 4 900 zł',
                period: 'netto, jednorazowo',
                pitch: 'Znajdziemy 3 procesy w Twojej firmie, które AI zautomatyzuje w tym kwartale.',
                features: [
                  '2h warsztat z zespołem',
                  '5 dni roboczych realizacji',
                  'Mapa procesów + ROI każdego',
                  'Rekomendacje stack\u2019u (LLM, narzędzia)',
                  'Plan wdrożenia na 90 dni',
                ],
                cta: 'Zamów audyt',
                highlight: false,
              },
              {
                name: 'Strony WWW',
                price: 'od 1 000 zł',
                period: 'netto, projekt',
                pitch: 'Szybka, nowoczesna strona, która konwertuje odwiedzających w klientów. Od landing page po pełny serwis firmowy.',
                features: [
                  'Indywidualny projekt graficzny',
                  'Responsywność (mobile-first)',
                  'Optymalizacja SEO i Core Web Vitals',
                  'Darmowy prototyp w 48h',
                  'Hosting i wsparcie techniczne',
                ],
                cta: 'Zamów stronę',
                highlight: true,
              },
              {
                name: 'Aplikacje Mobilne',
                price: 'od 4 500 zł',
                period: 'netto, projekt',
                pitch: 'Natywne lub cross-platformowe aplikacje na iOS i Android, które Twoi klienci pokochają. Od pomysłu do App Store w kilka tygodni.',
                features: [
                  'React Native / Flutter',
                  'Publikacja w App Store i Google Play',
                  'Design UI/UX dopasowany do marki',
                  'Integracja z backendem i API',
                  '30 dni wsparcia po wdrożeniu',
                ],
                cta: 'Wyceń aplikację',
                highlight: false,
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={`p-6 md:p-8 bg-card border rounded-sm relative flex flex-col ${pkg.highlight ? 'border-accent' : 'border-border hover:border-[#444]'} transition-colors`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-6 md:left-8 px-3 py-1 bg-accent text-black text-[10px] font-extrabold uppercase tracking-[2px] rounded-sm">
                    Najczęściej wybierany
                  </div>
                )}
                <h3 className="text-[11px] uppercase text-muted tracking-[2px] font-bold mb-4">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-black text-white tracking-tight">{pkg.price}</span>
                </div>
                <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted mb-6">{pkg.period}</div>
                <p className="text-[14px] text-[#ccc] leading-[1.5] mb-6 border-l-2 border-accent pl-4">{pkg.pitch}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-[#ddd]">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-4 text-[11px] font-extrabold uppercase tracking-[1px] rounded-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] ${pkg.highlight ? 'bg-gradient-accent text-black' : 'bg-[#1a1a1a] border border-[#444] text-white hover:bg-[#222]'}`}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-muted text-[12px] mt-10">
            Potrzebujesz czegoś innego?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline font-bold">Napisz do nas</a>{' '}
            - przygotujemy ofertę w 48h.
          </p>
        </section>

        {/* Process Section */}
        <section id="proces" className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-16 border-b border-[#333] pb-6 md:pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-4 leading-[0.9]">Jak pracujemy</h2>
            <p className="text-muted text-[12px] uppercase tracking-[2px] font-bold">Od pierwszego maila do działającego systemu - bez niespodzianek.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Search className="w-5 h-5 text-accent" />, step: '01', title: 'Discovery', desc: 'Rozumiemy problem biznesowy, nie tylko wymagania. Jeden warsztat, realne cele.' },
              { icon: <PenTool className="w-5 h-5 text-accent" />, step: '02', title: 'Plan', desc: 'Stały zakres, stała cena, stały termin. Wszystko na piśmie zanim zaczniemy kodować.' },
              { icon: <Hammer className="w-5 h-5 text-accent" />, step: '03', title: 'Build', desc: 'Cotygodniowe demo. Widzisz postęp, komentujesz, pivotujemy w tym samym tygodniu.' },
              { icon: <Rocket className="w-5 h-5 text-accent" />, step: '04', title: 'Ship & Scale', desc: 'Wdrożenie na produkcję, monitoring, dokumentacja. I opcjonalny retainer, gdy rośniecie.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="p-6 bg-card border border-border rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  {item.icon}
                  <span className="text-[10px] font-mono text-muted tracking-[2px]">{item.step}</span>
                </div>
                <h3 className="text-[13px] uppercase font-bold text-white tracking-[1px] mb-3">{item.title}</h3>
                <p className="text-[13px] text-[#bbb] leading-[1.5]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Story Section */}
        <section id="historia" className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto">
          <div className="bg-card border border-border rounded-sm p-6 md:p-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-8 leading-[0.9]">
                    Budujemy <br/>inaczej.
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
                    <span className="text-[12px] font-bold uppercase tracking-[1px]">M & M - Założyciele, Ex-Senior Engineers</span>
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
        <section id="kontakt" className="py-16 md:py-24 px-5 md:px-10 text-left max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-[#333] pt-10 md:pt-16"
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-6 leading-[0.9]">Gotowy na wzrost?</h2>
            <p className="text-[16px] md:text-[18px] text-white mb-8 md:mb-10 max-w-2xl border-l-2 border-accent pl-4 md:pl-5">
              Wybierz szybszą ścieżkę - 30-min rozmowa w kalendarzu, albo napisz maila. Odpowiadamy w 24h z konkretnym planem. Bez korpo-gadki.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 md:p-8 bg-gradient-accent text-black rounded-sm flex flex-col gap-3 hover:scale-[1.01] transition-transform"
              >
                <Calendar className="w-7 h-7" />
                <div className="text-[11px] uppercase tracking-[2px] font-bold opacity-70">Szybka ścieżka</div>
                <div className="text-xl font-black uppercase tracking-tight">Umów 30 min rozmowy</div>
                <div className="text-[13px] leading-[1.4] opacity-80">Wybierz slot w kalendarzu, dostajesz link Google Meet. Bez formularzy.</div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1px]">
                  Otwórz kalendarz <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Projekt%20z%202mcode&body=Cze%C5%9B%C4%87%2C%0A%0AChcia%C5%82%2Fa%C5%82abym%20porozmawia%C4%87%20o%3A%0A%0A-%20Mojej%20bran%C5%BCy%3A%20%0A-%20Problemie%2C%20kt%C3%B3ry%20chc%C4%99%20rozwi%C4%85za%C4%87%3A%20%0A-%20Bud%C5%BCecie%3A%20%0A-%20Terminie%3A%20%0A%0APozdrawiam`}
                className="p-6 md:p-8 bg-card border border-border rounded-sm flex flex-col gap-3 hover:border-[#444] transition-colors"
              >
                <Mail className="w-7 h-7 text-accent" />
                <div className="text-[11px] uppercase tracking-[2px] font-bold text-muted">Wolisz mailem?</div>
                <div className="text-xl font-black uppercase tracking-tight text-white">{CONTACT_EMAIL}</div>
                <div className="text-[13px] leading-[1.4] text-[#bbb]">Opisz krótko problem i budżet - odpowiemy w 24h z konkretną propozycją.</div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1px] text-accent">
                  Wyślij maila <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-10 px-5 md:px-10 bg-bg">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 grid-rows-[auto_auto_auto] gap-x-4 md:gap-x-6 gap-y-1.5 items-center justify-items-center text-center">
          {/* Row 1: Brand | Kontakt label | Social label */}
          <div className="flex items-center gap-1 md:gap-1.5 min-w-0">
            <img src="/logo-mark.svg" alt="2mcode" className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <span className="text-sm md:text-lg font-black tracking-tighter lowercase">2m<span className="text-[#00BCD4]">code</span></span>
          </div>
          <div className="uppercase tracking-[1.5px] md:tracking-[2px] font-bold text-muted text-[9px] md:text-[10px]">Kontakt</div>
          <div className="uppercase tracking-[1.5px] md:tracking-[2px] font-bold text-muted text-[9px] md:text-[10px]">Social</div>

          {/* Row 2: Description line 1 | Email | Facebook */}
          <div className="text-[#666] text-[10px] md:text-[11px] leading-[1.5]">Soft, który zarabia.</div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[10px] md:text-[11px] text-[#888] hover:text-accent transition-colors break-all leading-[1.5]">{CONTACT_EMAIL}</a>
          <a href="https://www.facebook.com/profile.php?id=61570962609416" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] font-bold text-muted hover:text-white transition-colors leading-[1.5]">
            <Facebook className="w-3 h-3 flex-shrink-0" />
            Facebook
          </a>

          {/* Row 3: Description line 2 | Umów spotkanie | Instagram */}
          <div className="text-[#666] text-[10px] md:text-[11px] leading-[1.5]">Wrocław, Polska.</div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-[11px] text-[#888] hover:text-accent transition-colors whitespace-nowrap leading-[1.5]">Umów spotkanie →</a>
          <a href="https://www.instagram.com/2m.code" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] font-bold text-muted hover:text-white transition-colors leading-[1.5]">
            <Instagram className="w-3 h-3 flex-shrink-0" />
            Instagram
          </a>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-[#222] flex flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[1px] font-bold text-[#555]">
          <p>© 2026 2mcode. Wszelkie prawa zastrzeżone.</p>
          <p>Made in Poland · Stała cena · Jasny zakres</p>
        </div>
      </footer>

    </div>
  );
}
