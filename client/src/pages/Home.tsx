import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, CheckCircle2, School, Building2, Car, Users } from "lucide-react";
import { useState } from "react";

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-destructive" /> {/* Logo Mark */}
          <span className="text-2xl font-bold tracking-tighter">
            {siteContent.general.logoText}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-destructive transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Link href="/mitglied-werden">
            <Button className="rounded-none h-10 px-6 bg-destructive hover:bg-destructive/90 text-white border-none">
              Mitglied werden
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background p-4">
          <nav className="flex flex-col gap-4">
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link href="/mitglied-werden">
              <Button className="rounded-none w-full h-12 bg-destructive hover:bg-destructive/90 text-white border-none" onClick={() => setIsMenuOpen(false)}>
                Mitglied werden
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="container swiss-grid items-center">
      <div className="md:col-span-7 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
          {siteContent.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
          {siteContent.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/mitglied-werden">
            <Button size="lg" className="rounded-none h-12 px-8 text-base bg-destructive hover:bg-destructive/90 text-white border-none">
              {siteContent.hero.primaryButton}
            </Button>
          </Link>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <Button size="lg" variant="outline" className="rounded-none h-12 px-8 text-base border-2">
              {siteContent.hero.secondaryButton}
            </Button>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 relative mt-12 md:mt-0">
        <div className="aspect-[4/5] bg-slate-100 relative z-10 overflow-hidden">
           <img 
             src="/images/hero-schliern.png" 
             alt="IGSHS Quartiere"
             className="w-full h-full object-cover"
           />
        </div>
        {/* Decorative Element */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-destructive/10 -z-0" />
      </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section id="aktuelles" className="py-24 bg-slate-50 scroll-mt-20">
    <div className="container">
      <div className="flex items-baseline justify-between mb-16 border-b-2 border-foreground pb-4">
        <h2 className="text-3xl font-bold tracking-tight">Aktuelles</h2>
        <a 
          href="#aktuelles" 
          className="text-sm font-medium hover:text-destructive flex items-center gap-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('aktuelles');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          Alle News <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteContent.news.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`}>
            <article className="group cursor-pointer flex flex-col h-full bg-background border border-border p-6 hover:border-destructive transition-colors duration-300">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-4">
              <span>{item.date}</span>
              <span className="uppercase tracking-wider text-destructive">{item.category}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              {item.excerpt}
            </p>
            <div className="mt-auto pt-4 border-t border-border/50">
              <span className="text-sm font-medium flex items-center gap-2">
                Weiterlesen <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ElectionWidget = () => {
  if (!siteContent.election.isVisible) return null;

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container swiss-grid items-center">
        <div className="md:col-span-6 space-y-6">
          <div className="inline-block bg-destructive text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Wahlkampf
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {siteContent.election.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-md">
            {siteContent.election.subtitle}
          </p>
          
          <div className="pt-8 border-t border-white/20 mt-8">
            <blockquote className="text-2xl font-serif italic leading-relaxed text-white mb-6">
              "{siteContent.election.candidateQuote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-slate-700 rounded-full overflow-hidden">
                 {/* Candidate Avatar Placeholder */}
              </div>
              <div>
                <div className="font-bold">{siteContent.election.candidateName}</div>
                <div className="text-sm text-slate-400">{siteContent.election.candidateRole}</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <Link href={siteContent.election.ctaLink}>
              <Button className="bg-white text-foreground hover:bg-slate-200 rounded-none h-12 px-8">
                {siteContent.election.ctaButton}
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-6 relative h-full min-h-[400px] bg-slate-800 border border-white/10 overflow-hidden">
           <img 
             src={siteContent.election.candidateImage}
             alt={siteContent.election.candidateName}
             className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
           />
        </div>
      </div>
    </section>
  );
};

const TopicsGrid = () => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    School,
    Building2,
    Car,
    Users,
  };

  return (
    <section id="schwerpunkte" className="py-24 scroll-mt-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-16 border-b-2 border-foreground pb-4 inline-block pr-12">
          Unsere Schwerpunkte
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {siteContent.topics.map((topic) => {
            const Icon = iconMap[topic.icon];
            return (
              <div key={topic.id} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 bg-slate-100 flex items-center justify-center group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-background scroll-mt-20">
    <div className="container max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{siteContent.about.title}</h2>
        <p className="text-xl text-muted-foreground">{siteContent.about.subtitle}</p>
      </div>
      
      <div className="space-y-8">
        {siteContent.about.sections.map((section, idx) => (
          <div key={idx} className="bg-slate-50 p-8 border-l-4 border-destructive">
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="kontakt" className="py-24 bg-slate-50 border-t border-border scroll-mt-20">
    <div className="container swiss-grid">
      <div className="md:col-span-5 space-y-8">
        <h2 className="text-3xl font-bold">{siteContent.contact.title}</h2>
        <p className="text-lg text-muted-foreground">
          {siteContent.contact.text}
        </p>
        
        <div className="space-y-4 pt-8">
          <div className="flex items-start gap-4">
            <div className="font-bold w-24">Adresse</div>
            <div className="text-muted-foreground">{siteContent.contact.address}</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="font-bold w-24">E-Mail</div>
            <a href={`mailto:${siteContent.contact.email}`} className="text-destructive hover:underline">
              {siteContent.contact.email}
            </a>
          </div>
        </div>
        
        <div className="pt-6">
          <a href="#kontakt" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('kontakt');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <Button className="rounded-none h-11 px-6 bg-slate-900 text-white hover:bg-slate-800">
              Newsletter abonnieren
            </Button>
          </a>
        </div>
      </div>
      
      <div className="md:col-span-7 bg-white p-8 border border-border shadow-sm">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Ihr Name" className="rounded-none border-slate-300 focus-visible:ring-destructive" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-Mail</label>
              <Input type="email" placeholder="ihre@email.ch" className="rounded-none border-slate-300 focus-visible:ring-destructive" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Kategorie</label>
            <Select>
              <SelectTrigger className="rounded-none border-slate-300 focus:ring-destructive">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                {siteContent.contact.form.categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Nachricht</label>
            <Textarea placeholder="Ihre Nachricht an uns..." className="min-h-[150px] rounded-none border-slate-300 focus-visible:ring-destructive" />
          </div>
          
          <div className="flex items-center justify-between pt-4">
            <Button variant="outline" className="gap-2 rounded-none border-dashed">
              <Upload className="h-4 w-4" /> Datei anhängen
            </Button>
            <Button type="submit" className="bg-destructive hover:bg-destructive/90 text-white rounded-none px-8">
              Absenden
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-12 border-t border-white/10">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-sm text-slate-400">
        {siteContent.footer.copyright}
      </div>
      <div className="flex gap-6">
        {siteContent.footer.links.map((link) => (
          <a key={link.label} href={link.href} className="text-sm font-medium hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-destructive/20">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewsSection />
        <ElectionWidget />
        <TopicsGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
