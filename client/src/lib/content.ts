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
    { label: "Veranstaltungen", href: "#veranstaltungen" },
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
      title: "Gemeinderatswahlen 2026: Ein voller Erfolg für direkte Begegnung",
      excerpt: "Kandidierenden-Veranstaltung im Gemeindezentrum begeistert Bevölkerung – Marktplatz-Format ermöglicht authentischen Dialog auf Augenhöhe.",
      content: `## Gemeinderatswahlen 2026: Ein voller Erfolg für direkte Begegnung

**Kandidierenden-Veranstaltung im Gemeindezentrum begeistert Bevölkerung**

Am Freitag, 16. Januar 2026, organisierte die Interessengemeinschaft Stöcken, Haslen und Sternen (IGSHS) eine öffentliche Kandidierenden-Veranstaltung – und erzielte damit eine beeindruckende Resonanz in der Birmensdorfer Bevölkerung.

### Ein Marktplatz für echte Gespräche

Das innovative Marktplatz-Format bewährte sich ausgezeichnet: Statt traditioneller Podiumsdiskussionen mit Redezeiten standen die kandidierenden Personen an eigenen Tischen zur Verfügung. Besucherinnen und Besucher konnten frei von Tisch zu Tisch wechseln, ihre Fragen im direkten Gespräch stellen und die Kandidat:innen persönlich kennenlernen.

Dieses Format schuf genau das, was demokratische Partizipation braucht: **echte Begegnung auf Augenhöhe**, Offenheit ohne Parteienpolitik, und die Möglichkeit, sich ein informiertes Bild zu machen – vor der Wahl am 8. März 2026.

### Großes Interesse und häufige Wiederholungswünsche

Die Veranstaltung war überraschend gut besucht und wurde von den Besuchern ausgesprochen positiv aufgenommen. Viele äußerten mehrfach den Wunsch, diesen Anlass zu wiederholen. **Dieses Feedback zeigt**: Die Birmensdorfer Bevölkerung verlangt nach dieser Art von direktem Dialog mit ihren politischen Vertreterinnen und Vertretern.

Auch die Gemeinde würdigte den Anlass und zeigte sich offen – die IGSHS informierte die Abteilung Präsidiales entsprechend über die Idee einer Fortsetzung. Leider teilte die Gemeinde mit, dass sie derzeit keine eigene Veranstaltung plane und an weiteren von der IGSHS organisierten Veranstaltungen nicht beteiligt sein könne.

### Ein Beispiel gelebter Zivilgesellschaft

Trotz dieser Rückmeldung ist die IGSHS stolz auf das, was erreicht wurde: Ein parteiunabhängiger, von der Basis organisierter Anlass, der hunderte Bürgerinnen und Bürgern die Möglichkeit gab, ihre Gemeinde mitzugestalten – durch Information, Dialog und eigene Entscheidungsfindung.

Das ist Bürgerbeteiligung in ihrer reinsten Form.`,
      link: "/news/1",
    },
    {
      id: 2,
      date: "21.06.2026",
      category: "IGSHS",
      title: "Quartierfest 2026: Ein Fest für Begegnung, Freude und Austausch",
      excerpt: "Am längsten Tag des Jahres lädt die IGSHS alle Bewohner von Stöcken, Haslen und Sternen zu einem großen Quartierfest ein – zum Feiern, Begegnen und Zusammenhalt erleben.",
      content: `## Quartierfest 2026: Ein Fest für Begegnung, Freude und Austausch

**Markiert den längsten Tag des Jahres – 21. Juni 2026**

Im Sinne ihrer Mission als parteiunabhängige Interessengemeinschaft plant die **IGSHS** für den kommenden Sommer ein Highlight: das erste **Quartierfest 2026**.

Am **längsten Tag des Jahres – Sonntag, 21. Juni 2026** – laden wir alle Bewohnerinnen und Bewohner der Quartiere **Stöcken, Haslen und Sternen** zu einem großen Fest ein. Ein Tag voller:

- 🎉 **Freude und Feiern** – gemeinsam statt nebeneinander
- 🤝 **Begegnung und Austausch** – die Quartiere näher zusammenbringen
- 💬 **Dialog** – über das hinaus, was uns trennt, über das, was uns verbindet
- 🎪 **Familie, Musik, Kulinarisches und viel mehr**

Ein Tag, der unsere Quartiere zeigt, dass wir **eine Gemeinschaft** sind – ob beim Schulweg, bei der Ortsentwicklung oder bei den Herausforderungen unserer Zeit.

**Mehr Informationen folgen in Kürze.**`,
      link: "/news/2",
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
