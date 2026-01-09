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
      id: 1,
      date: "16.01.2026",
      category: "IGSHS",
      title: "Öffentliche Kandidierenden-Veranstaltung Gemeinderatswahlen 2026",
      excerpt: "Die IGSHS lädt zu einer öffentlichen Kandidierenden-Veranstaltung ein. Stellen Sie Ihre Fragen direkt und machen Sie sich Ihr eigenes Bild der Gemeinderatskandidatinnen und -kandidaten.",
      content: `**Öffentliche Kandidierenden-Veranstaltung - Gemeinderatswahlen 2026**

Die IGSHS lädt alle Bewohnerinnen und Bewohner von Birmensdorf herzlich ein, die Kandidatinnen und Kandidaten für den Gemeinderat persönlich kennenzulernen.

**Wann und wo**

Freitag, 16. Januar 2026, 18:00 Uhr
Gemeindezentrum Birmensdorf

**Warum diese Veranstaltung?**

Kommunalpolitik betrifft unseren Alltag direkt – von Schulen über Sicherheit bis hin zu Verkehr und Lebensqualität. Mit dieser Veranstaltung schafft die IGSHS einen offenen Raum für Dialog zwischen Bürgerinnen, Bürgern und den Menschen, die sich für ein Amt im Gemeinderat bewerben.

**Format**

Die Gemeinderats-Kandidierenden sind an eigenen Tischen präsentiert, es ist kein Podium. Besucherinnen und Besucher können direkt auf sie zugehen, Fragen stellen und sie persönlich kennenlernen. So entsteht ein ungezwungener Austausch auf Augenhöhe.

**Praktisches**

Die Teilnahme ist kostenlos und unverbindlich. Für Kuchen und Getränke ist gesorgt.

**Wichtiger Termin**

08.03.2026: Gemeinderatswahlen

Wir freuen uns auf einen informativen und lebendigen Abend mit Ihnen!`,
      link: "/news/1",
    },
    {
      id: 2,
      date: "04.02.2026",
      category: "Gemeinde",
      title: "Schutz vor digitalisierter Kriminalität",
      excerpt: "Die Kantonspolizei Zürich informiert über Gefahren im Internet und Schutz vor digitalisierter Kriminalität. Anschliessend gibt es Infos zum lokalen IT-Sicherheitsangebot.",
      content: "",
      link: "https://www.birmensdorf.ch/anlaesseaktuelles/7094807",
      isExternal: true,
    },
    {
      id: 3,
      date: "07.02.2026",
      category: "Gemeinde",
      title: "Bibliothek - Buchstart",
      excerpt: "Taucht gemeinsam spielerisch in die Welt der Bücher ein – mit Reimen, Fingerspielen, Kniereitern und Liedern. Für Babys und Kleinkinder bis Vorschulalter.",
      content: "",
      link: "https://www.birmensdorf.ch/anlaesseaktuelles/6615700",
      isExternal: true,
    },
    {
      id: 4,
      date: "07.02.2026",
      category: "Gemeinde",
      title: "Kinderfasnacht",
      excerpt: "Mitmach-Umzug mit Guggenmusik, anschliessend Maskenball und Kinderdisco mit Aerokids. Für die ganze Familie.",
      content: "",
      link: "https://www.birmensdorf.ch/anlaesseaktuelles/7082366",
      isExternal: true,
    },
    {
      id: 5,
      date: "07.02.2026",
      category: "Gemeinde",
      title: "Ortsmuseum Birmensdorf geöffnet",
      excerpt: "Das Ortsmuseum Birmensdorf ist geöffnet und lädt zu einem Besuch ein. Entdecken Sie die Geschichte unserer Gemeinde.",
      content: "",
      link: "https://www.birmensdorf.ch/anlaesseaktuelles/7218140",
      isExternal: true,
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
