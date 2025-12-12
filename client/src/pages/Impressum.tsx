import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 bg-destructive"></div>
              <span className="text-xl font-bold">IGSHS</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 border-l-8 border-destructive pl-6">
            Impressum
          </h1>

          <div className="space-y-12 text-lg leading-relaxed">
            {/* Kontaktadresse */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Kontaktadresse
              </h2>
              <p className="text-muted-foreground">
                IGSHS Birmensdorf (Interessensgemeinschaft Stöcken, Haslen und Sternen)<br />
                Rütistrasse 17<br />
                8903 Birmensdorf<br />
                Schweiz
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Kontakt
              </h2>
              <p className="text-muted-foreground">
                E-Mail: <a href="mailto:vereinigshs@gmail.com" className="text-destructive hover:underline">vereinigshs@gmail.com</a><br />
                Telefon: <a href="tel:+41763464026" className="text-destructive hover:underline">076 346 40 26</a>
              </p>
            </section>

            {/* Vertretungsberechtigte Person */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Vertretungsberechtigte Person
              </h2>
              <p className="text-muted-foreground">
                Jadwiga Kuhn, Präsidentin
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Haftungsausschluss
              </h2>
              <p className="text-muted-foreground mb-4">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
              <p className="text-muted-foreground">
                Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </section>

            {/* Urheberrechte */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Urheberrechte
              </h2>
              <p className="text-muted-foreground">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich dem Verein IGSHS Birmensdorf oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 border-t border-white/10 mt-16">
        <div className="container text-center text-sm text-slate-400">
          © 2025 IGSHS Birmensdorf. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
