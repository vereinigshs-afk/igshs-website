/**
 * Zentrale Daten-Konfiguration für die IGSHS Website
 * 
 * Hier können alle Inhalte (Texte, Links, News, Themen) zentral verwaltet werden,
 * ohne die React-Komponenten anzufassen.
 */

export const siteContent = {
  general: {
    siteName: "IGSHS",
    logoText: "IGSHS",
    tagline: "Eine starke Stimme für unsere Quartiere",
  },
  navigation: [
    { label: "Aktuelles", href: "#aktuelles" },
    { label: "Schwerpunkte", href: "#schwerpunkte" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    title: "Eine starke Stimme für unsere Quartiere.",
    subtitle:
      "Die IGSHS vertritt die Interessen der Bewohner von Stöcken, Haslen und Sternen in Birmensdorf. Wir engagieren uns für Sicherheit, Lebensqualität und Gemeinschaft.",
    primaryButton: "Mitglied werden",
    secondaryButton: "Mehr erfahren",
    image: "/images/hero-schliern.png",
  },
  news: [
    {
      id: 4,
      date: "16.01.2026",
      category: "Politik",
      title: "Kennenlernen mit Felix Gless",
      excerpt: "Treffen Sie Felix Gless persönlich! Am Freitag, 16. Januar 2026 um 18:00 Uhr im Gemeindezentrum Brüelmatt.",
      content: `**Lernen Sie Felix Gless kennen!**

Am **Freitag, 16. Januar 2026 um 18:00 Uhr** laden wir Sie herzlich ein, Felix Gless persönlich kennenzulernen. Die Veranstaltung findet im **Gemeindezentrum Brüelmatt** in Birmensdorf statt.

**Über Felix Gless**

Felix Gless ist 41 Jahre alt, verheiratet und Vater von zwei Kindern. Seit 2015 wohnt er mit seiner Familie in Birmensdorf und engagiert sich aktiv für die Gemeinschaft.

**Beruflicher Hintergrund**

- Studium der Rechtswissenschaften an der Universität Zürich
- Rechtsanwalt mit eigener Kanzlei in Zürich
- Spezialisiert auf Vertragsrecht und Gemeinderechtsfragen

**Politische Erfahrung**

- Seit 2019 Mitglied der Geschäftsprüfungskommission (GPK) Birmensdorf
- Aktives Mitglied der FDP Birmensdorf
- Engagement für transparente Verwaltung und bürgernahe Politik

**Seine Schwerpunkte**

1. **Bildung & Familien**: Qualitativ hochwertige Schulen und Kinderbetreuung
2. **Verkehr & Infrastruktur**: Sichere Schulwege und nachhaltige Mobilität
3. **Finanzen**: Verantwortungsvoller Umgang mit Steuergeldern
4. **Lebensqualität**: Erhalt des dörflichen Charakters bei gleichzeitiger Entwicklung

**Warum Felix Gless?**

"Birmensdorf ist meine Heimat geworden. Ich möchte mich aktiv dafür einsetzen, dass unsere Gemeinde lebenswert bleibt – für Familien, Senioren und alle Generationen. Meine juristische Expertise und meine Erfahrung in der GPK helfen mir, komplexe Sachverhalte zu verstehen und pragmatische Lösungen zu finden."

**Programm der Veranstaltung**

- 18:00 Uhr: Begrüssung und Vorstellung
- 18:15 Uhr: Felix Gless stellt seine Schwerpunkte vor
- 18:45 Uhr: Offene Fragerunde
- 19:30 Uhr: Apéro und persönliche Gespräche

**Anmeldung**

Eine Anmeldung ist nicht erforderlich, aber wir freuen uns über eine kurze Rückmeldung an vereinigshs@gmail.com für die Planung.

**Gemeinsam für Birmensdorf!**

Wir freuen uns auf Ihr Kommen und einen spannenden Austausch!`,
      link: "/news/4",
    },
    {
      id: 5,
      date: "10.12.2025",
      category: "Gemeinde",
      title: "Kinder - Basteln",
      excerpt: "Weihnachtsgeschenke basteln im Gemeindezentrum. Für Kinder vom 1. Kindergarten bis zur 3. Sekundarschule.",
      content: `**Kinder - Basteln**

Am **Dienstag, 10. Dezember 2025 von 14:00 bis 17:00 Uhr** findet im Gemeindezentrum Freizeitraum ein Bastelnachmittag statt.

**Beschreibung**

Es werden verschiedene Weihnachtsgeschenke für Gotti, Götti, Grosseltern oder auch für dich selbst gebastelt. Bitte ältere Kleider anziehen.

**Details**

- **Ort**: Gemeindezentrum Freizeitraum, Dorfstrasse 10, 8903 Birmensdorf
- **Voraussetzungen**: Kinder vom 1. Kindergarten bis zur 3. Sekundarschule
- **Preis**: zwischen CHF 2.- und CHF 15.- (nur Barzahlung)
- **Anmeldung**: Keine Anmeldung erforderlich

**Kontakt**

Brigitte Büchi
brigitte.buechi@bluewin.ch`,
      link: "/news/5",
    },
    {
      id: 6,
      date: "12.12.2025",
      category: "Gemeinde",
      title: "Eltern-Kind Weihnachtsbasteln",
      excerpt: "Basteln Sie zusammen mit Ihrem Kind einfache Basteleien zu fairen Preisen im Familienzentrum.",
      content: `**Eltern-Kind Weihnachtsbasteln**

Am **Donnerstag, 12. Dezember 2025 von 14:00 bis 16:00 Uhr** lädt das Elternforum Birmensdorf zum gemeinsamen Basteln ein.

**Beschreibung**

Bastle zusammen mit dem eigenen Kind einfache Basteleien zu fairen Preisen (CHF 2.- bis 5.- pro Stück). Sämtliches Material ist vorhanden. Kaffee, Sirup und "en Zvieri" gibt es auch. Wie immer werdet ihr von einer "Bastelfee" (Anja Cimino) unterstützt.

**Details**

- **Ort**: Familienzentrum, Breitestrasse 13, 8903 Birmensdorf
- **Organisator**: Elternforum Birmensdorf
- **Preis**: CHF 2.- bis CHF 5.- pro Stück

**Kontakt**

Elternforum Birmensdorf
info@elternforum-birmensdorf.ch`,
      link: "/news/6",
    },
    {
      id: 7,
      date: "17.12.2025",
      category: "Gemeinde",
      title: "Kinder - Basteln & Geschichtenzeit",
      excerpt: "Bastelnachmittag und Geschichtenzeit in der Bibliothek. Zwei tolle Angebote für Kinder an einem Tag!",
      content: `**Kinder - Basteln & Geschichtenzeit**

Am **Mittwoch, 17. Dezember 2025** finden gleich zwei Veranstaltungen für Kinder statt.

**Bastelnachmittag (14:00 - 17:00 Uhr)**

Im Gemeindezentrum Freizeitraum werden verschiedene Weihnachtsgeschenke für Gotti, Götti, Grosseltern oder auch für dich selbst gebastelt. Bitte ältere Kleider anziehen.

- **Ort**: Gemeindezentrum Freizeitraum, Dorfstrasse 10
- **Voraussetzungen**: Kinder vom 1. Kindergarten bis zur 3. Sekundarschule
- **Preis**: CHF 2.- bis CHF 15.- (nur Barzahlung)
- **Kontakt**: Brigitte Büchi, brigitte.buechi@bluewin.ch

**Geschichtenzeit (14:30 - 15:00 Uhr)**

Die Bibliothekarinnen lesen eine spannende Geschichte vor. Für alle Kinder, die gerne ein Bilderbuch lang zuhören.

- **Ort**: Gemeinde- und Schulbibliothek, Dorfstrasse 10
- **Preis**: Kostenlos
- **Anmeldung**: Keine Anmeldung erforderlich
- **Kontakt**: Maya Del Bono, bibliothek@birmensdorf.ch

Alle sind herzlich willkommen!`,
      link: "/news/7",
    },
    {
      id: 8,
      date: "04.01.2026",
      category: "Gemeinde",
      title: "Neujahrsapéro",
      excerpt: "Traditioneller Neujahrsapéro der Gemeinde Birmensdorf. Alle Einwohnerinnen und Einwohner sind herzlich eingeladen.",
      content: `**Neujahrsapéro 2026**

Am **Samstag, 4. Januar 2026 um 11:00 Uhr** findet der traditionelle Neujahrsapéro der Gemeinde Birmensdorf statt.

**Einladung**

Die Gemeinde Birmensdorf lädt alle Einwohnerinnen und Einwohner herzlich zum Neujahrsapéro ein. Stossen Sie gemeinsam mit Ihren Nachbarn und der Gemeindeverwaltung auf das neue Jahr an!

**Details**

- **Ort**: Gemeindezentrum Brüelmatt, Dorfstrasse 10, 8903 Birmensdorf
- **Datum**: Samstag, 4. Januar 2026
- **Zeit**: 11:00 Uhr
- **Eintritt**: Frei

**Programm**

- Begrüssung durch den Gemeinderat
- Apéro mit Getränken und kleinen Snacks
- Gelegenheit zum Austausch und Vernetzen

**Kontakt**

Gemeinde Birmensdorf
Abteilung Präsidiales
praesidiales@birmensdorf.ch

Wir freuen uns auf Ihr Kommen und wünschen Ihnen einen guten Start ins neue Jahr!`,
      link: "/news/8",
    },
  ],
  election: {
    isVisible: true, // Schalter: true = Box anzeigen, false = ausblenden
    title: "Gemeinderat-Wahlen 8. März 2026",
    subtitle: "Unterstützen Sie Felix Gless für den Gemeinderat Birmensdorf",
    candidateName: "Felix Gless",
    candidateRole: "Kandidat für den Gemeinderat",
    candidateImage: "/images/felix-gless.png",
    candidateQuote:
      "Birmensdorf ist meine Heimat. Ich setze mich für sichere Schulwege, transparente Finanzen und eine lebenswerte Gemeinde ein.",
    ctaButton: "Mehr erfahren",
    ctaLink: "/news/4",
  },
  topics: [
    {
      id: 1,
      icon: "School",
      title: "Sicherer Schulweg",
      description:
        "Wir setzen uns für sichere Schulwege, bessere Schulbus-Verbindungen und verkehrsberuhigte Zonen ein.",
    },
    {
      id: 2,
      icon: "Building2",
      title: "Ortsentwicklung",
      description:
        "Wir begleiten Bauprojekte kritisch und achten darauf, dass der Charakter unserer Quartiere erhalten bleibt.",
    },
    {
      id: 3,
      icon: "Car",
      title: "Verkehr & Lärm",
      description:
        "Eindämmung des Durchgangsverkehrs, Tempo-30-Zonen und Lärmschutzmassnahmen entlang der Zürcherstrasse.",
    },
    {
      id: 4,
      icon: "Users",
      title: "Quartierleben",
      description:
        "Quartierfeste, Nachbarschaftshilfe und Vernetzung – wir fördern den Zusammenhalt in unseren Quartieren.",
    },
  ],
  about: {
    title: "Über uns",
    subtitle: "Wer wir sind und wofür wir stehen",
    sections: [
      {
        title: "Unsere Mission",
        content:
          "Die IGSHS (Interessensgemeinschaft Stöcken, Haslen und Sternen) vertritt die Interessen der Bewohner der oberen Quartiere von Birmensdorf gegenüber der Gemeindebehörde. Wir setzen uns für Sicherheit (besonders für Kinder), Lebensqualität (Ruhe, Natur) und Gemeinschaft (Zusammenhalt unter Nachbarn) ein.",
      },
      {
        title: "Unsere Geschichte",
        content:
          "2010 versuchten die Aussenwachten, zur Nachbargemeinde Uitikon zu wechseln – ein Zeichen für den damaligen Kampfgeist. Heute arbeiten wir konstruktiv mit Birmensdorf zusammen, um die Anliegen unserer Quartiere zu vertreten.",
      },
      {
        title: "Unsere Herausforderungen",
        content:
          "Der Schulweg ins Dorfzentrum ist lang und gefährlich (Zürcherstrasse). Die Abhängigkeit vom Postauto ist gross. Die Aussenwachten fühlen sich oft von der Politik im Dorfzentrum vergessen. Wir kämpfen dafür, dass unsere Stimme gehört wird.",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    text: "Haben Sie ein Anliegen, eine Idee oder möchten Sie Mitglied werden? Wir freuen uns auf Ihre Nachricht.",
    email: "vereinigshs@gmail.com",
    address: "IGSHS, Postfach 123, 8903 Birmensdorf",
    form: {
      categories: [
        "Newsletter abonnieren",
        "Allgemeine Anfrage",
        "Mitgliedschaft",
        "Meldung / Anliegen",
        "Presse",
      ],
    },
  },
  footer: {
    copyright: "© 2025 IGSHS Birmensdorf. Alle Rechte vorbehalten.",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Statuten (PDF)", href: "/statuten.pdf" },
    ],
  },
};
