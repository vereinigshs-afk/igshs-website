import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>

          <div className="space-y-12 text-lg leading-relaxed">
            {/* Allgemein */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Allgemein
              </h2>
              <p className="text-muted-foreground">
                Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-muted-foreground mt-4">
                In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
              </p>
            </section>

            {/* Bearbeitung von Personendaten */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Bearbeitung von Personendaten
              </h2>
              <p className="text-muted-foreground">
                Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten.
              </p>
              <p className="text-muted-foreground mt-4">
                Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Datenschutzrecht. Im Übrigen bearbeiten wir – soweit und sofern die EU-DSGVO anwendbar ist – Personendaten gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>lit. a) Bearbeitung von Personendaten mit Einwilligung der betroffenen Person.</li>
                <li>lit. b) Bearbeitung von Personendaten zur Erfüllung eines Vertrages mit der betroffenen Person sowie zur Durchführung entsprechender vorvertraglicher Massnahmen.</li>
                <li>lit. c) Bearbeitung von Personendaten zur Erfüllung einer rechtlichen Verpflichtung, der wir gemäss allenfalls anwendbarem Recht der EU oder gemäss allenfalls anwendbarem Recht eines Landes, in dem die DSGVO ganz oder teilweise anwendbar ist, unterliegen.</li>
                <li>lit. d) Bearbeitung von Personendaten um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen.</li>
                <li>lit. f) Bearbeitung von Personendaten um die berechtigten Interessen von uns oder von Dritten zu wahren, sofern nicht die Grundfreiheiten und Grundrechte sowie Interessen der betroffenen Person überwiegen.</li>
              </ul>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Kontaktformular und E-Mail-Kontakt
              </h2>
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            {/* Mitgliedschafts-Anmeldung */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Mitgliedschafts-Anmeldung
              </h2>
              <p className="text-muted-foreground">
                Bei der Anmeldung zur Mitgliedschaft werden Ihre persönlichen Daten (Vorname, Nachname, Adresse, E-Mail) in unserer Datenbank gespeichert. Diese Daten werden ausschliesslich für die Verwaltung der Mitgliedschaft und zur Kommunikation mit Ihnen verwendet. Sie haben jederzeit das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten und diese korrigieren oder löschen zu lassen.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Cookies
              </h2>
              <p className="text-muted-foreground">
                Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die es ermöglichen, spezifische, auf den Nutzer bezogene Informationen auf dem Endgerät des Nutzers zu speichern, während der Nutzer die Website nutzt. Cookies ermöglichen es insbesondere, die Nutzungshäufigkeit und die Anzahl der Nutzer der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten.
              </p>
              <p className="text-muted-foreground mt-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschliessen können.
              </p>
            </section>

            {/* Rechte der betroffenen Person */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Rechte der betroffenen Person
              </h2>
              <p className="text-muted-foreground">
                Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts und soweit gesetzlich vorgesehen (wie etwa im Falle der DSGVO) das Recht auf Auskunft, Berichtigung, Löschung, das Recht auf Einschränkung der Datenbearbeitung und sonst dem Widerspruch gegen unsere Datenbearbeitungen sowie auf Herausgabe gewisser Personendaten zwecks Übertragung an eine andere Stelle (sog. Datenportabilität).
              </p>
              <p className="text-muted-foreground mt-4">
                Bitte beachten Sie aber, dass wir uns vorbehalten, unsererseits die gesetzlich vorgesehenen Einschränkungen geltend zu machen, etwa wenn wir zur Aufbewahrung oder Bearbeitung gewisser Daten verpflichtet sind, daran ein überwiegendes Interesse haben oder sie für die Geltendmachung von Ansprüchen benötigen.
              </p>
            </section>

            {/* Änderungen */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Änderungen
              </h2>
              <p className="text-muted-foreground">
                Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Fragen zum Datenschutz
              </h2>
              <p className="text-muted-foreground">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an:{" "}
                <a href="mailto:vereinigshs@gmail.com" className="text-destructive hover:underline">
                  vereinigshs@gmail.com
                </a>
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
