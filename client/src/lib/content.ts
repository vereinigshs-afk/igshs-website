import { 
  Newspaper, 
  MapPin, 
  Users, 
  Megaphone, 
  Mail, 
  Phone, 
  Calendar,
  ShieldAlert,
  TreePine,
  Car,
  Coffee,
  Bus
} from "lucide-react";

// Zentrale Daten-Konfiguration für die IGSHS Website
// Hier können alle Texte und Inhalte angepasst werden, ohne den Code zu berühren.

export const siteContent = {
  general: {
    title: "IGSHS",
    subtitle: "Interessengemeinschaft Stöcken, Haslen und Sternen",
    description: "Eine starke Stimme für unsere Quartiere in Birmensdorf.",
    logoText: "IGSHS",
  },
  navigation: [
    { label: "Aktuelles", href: "#aktuelles" },
    { label: "Schwerpunkte", href: "#schwerpunkte" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    title: "Eine starke Stimme für unsere Quartiere.",
    subtitle: "Die IGSHS vertritt die Interessen der Bewohner von Stöcken, Haslen und Sternen in Birmensdorf. Wir engagieren uns für Sicherheit, Lebensqualität und Gemeinschaft.",
    primaryButton: "Mitglied werden",
    secondaryButton: "Mehr erfahren",
    imageAlt: "Blick über die Quartiere Stöcken, Haslen und Sternen in Birmensdorf",
  },
  about: {
    title: "Über die IGSHS",
    subtitle: "Wer wir sind und wofür wir stehen",
    content: `Die **Interessengemeinschaft Stöcken, Haslen und Sternen (IGSHS)** vertritt die Bewohnerinnen und Bewohner der oberen Quartiere von Birmensdorf – auch bekannt als "Oberbirmensdorf". Unsere Quartiere liegen geografisch nahe an Uitikon Waldegg und haben spezifische Bedürfnisse, die wir gegenüber der Gemeindebehörde vertreten.`,
    mission: "Unsere Mission",
    missionText: "Wir setzen uns dafür ein, dass die Stimmen unserer Quartiere gehört werden. Sicherheit (besonders für Kinder), Lebensqualität (Ruhe, Natur), Gemeinschaft (Zusammenhalt unter Nachbarn) und faire Steuern sowie Infrastruktur sind unsere Kernwerte.",
    history: "Unsere Geschichte",
    historyText: "2010 gab es eine Initiative für einen möglichen Wechsel zu Uitikon – ein Beweis für den Kampfgeist unserer Gemeinschaft. Heute arbeiten wir konstruktiv mit Birmensdorf zusammen und setzen uns aktiv für die Verbesserung unserer Quartiere ein.",
    challenges: [
      {
        title: "Schulweg",
        text: "Der Weg ins Dorfzentrum ist lang und gefährlich (Zürcherstrasse). Wir kämpfen für bessere Schulbus-Verbindungen."
      },
      {
        title: "Quartier-Stimme",
        text: "Die Aussenwachten fühlen sich oft von der Politik im Dorfzentrum vergessen. Wir geben unseren Quartieren eine Stimme."
      }
    ]
  },
  news: [
    {
      id: 4,
      date: "08.12.2025",
      category: "Veranstaltung",
      title: "Kennenlernen mit Felix Gless - 16. Januar 2026",
      excerpt: "Treffen Sie Felix Gless persönlich! Am Freitag, 16. Januar 2026 um 18:00 Uhr im Gemeindezentrum Brüelmatt.",
      content: `**Lernen Sie Felix Gless kennen!**\n\nAm **Freitag, 16. Januar 2026 um 18:00 Uhr** laden wir Sie herzlich ein, Felix Gless persönlich kennenzulernen. Die Veranstaltung findet im **Gemeindezentrum Brüelmatt** in Birmensdorf statt.\n\n**Über Felix Gless**\n\nFelix Gless ist 41 Jahre alt, verheiratet und Vater von zwei Kindern. Seit 2015 wohnt er mit seiner Familie in Birmensdorf und engagiert sich aktiv für die Gemeinschaft.\n\n**Beruflicher Hintergrund**\n\n- Studium der Rechtswissenschaften an der Universität Zürich\n- Rechtsanwalt mit eigener Kanzlei in Zürich\n- Spezialisiert auf Vertragsrecht und Gemeinderechtsfragen\n\n**Politische Erfahrung**\n\n- Seit 2019 Mitglied der Geschäftsprüfungskommission (GPK) Birmensdorf\n- Aktives Mitglied der FDP Birmensdorf\n- Engagement für transparente Verwaltung und bürgernahe Politik\n\n**Seine Schwerpunkte**\n\n1. **Bildung & Familien**: Qualitativ hochwertige Schulen und Kinderbetreuung\n2. **Verkehr & Infrastruktur**: Sichere Schulwege und nachhaltige Mobilität\n3. **Finanzen**: Verantwortungsvoller Umgang mit Steuergeldern\n4. **Lebensqualität**: Erhalt des dörflichen Charakters bei gleichzeitiger Entwicklung\n\n**Warum Felix Gless?**\n\n"Birmensdorf ist meine Heimat geworden. Ich möchte mich aktiv dafür einsetzen, dass unsere Gemeinde lebenswert bleibt – für Familien, Senioren und alle Generationen. Meine juristische Expertise und meine Erfahrung in der GPK helfen mir, komplexe Sachverhalte zu verstehen und pragmatische Lösungen zu finden."\n\n**Programm der Veranstaltung**\n\n- 18:00 Uhr: Begrüssung und Vorstellung\n- 18:15 Uhr: Felix Gless stellt seine Schwerpunkte vor\n- 18:45 Uhr: Offene Fragerunde\n- 19:30 Uhr: Apéro und persönliche Gespräche\n\n**Anmeldung**\n\nEine Anmeldung ist nicht erforderlich, aber wir freuen uns über eine kurze Rückmeldung an vereinigshs@gmail.com für die Planung.\n\n**Gemeinsam für Birmensdorf!**\n\nWir freuen uns auf Ihr Kommen und einen spannenden Austausch!`,
      link: "/news/4",
    },
    {
      id: 1,
      date: "08.12.2025",
      category: "Veranstaltung",
      title: "Quartierfest 2026: Save the Date!",
      excerpt: "Unser nächstes Quartierfest findet im Sommer 2026 statt. Helferinnen und Helfer sind herzlich willkommen!",
      content: `Das jährliche Quartierfest der IGSHS ist ein Höhepunkt im Gemeinschaftsleben unserer Quartiere Stöcken, Haslen und Sternen. Nach dem grossen Erfolg im letzten Jahr freuen wir uns, das nächste Fest für Sommer 2026 anzukündigen.\n\n**Was erwartet Sie?**\n\nEin buntes Programm für die ganze Familie: Live-Musik, Kinderspiele, regionale Kulinarik und viel Raum für Begegnungen. Das Fest findet traditionell auf dem Dorfplatz statt und bringt Nachbarn zusammen.\n\n**Wir suchen Helferinnen und Helfer!**\n\nOhne freiwillige Unterstützung wäre ein solches Fest nicht möglich. Wir suchen noch Helfer für:\n\n- Grillstand und Getränkeausgabe\n- Auf- und Abbau\n- Kinderbetreuung und Spiele\n- Dekoration\n\nInteressiert? Melden Sie sich bei uns unter vereinigshs@gmail.com. Jede helfende Hand zählt!\n\n**Save the Date: Sommer 2026**\n\nDer genaue Termin wird in den kommenden Wochen bekannt gegeben. Wir freuen uns auf ein rauschendes Fest mit Ihnen!`,
      link: "/news/1",
    },
    {
      id: 2,
      date: "01.12.2025",
      category: "Verkehr",
      title: "Schulbus-Taktung: Erfolg!",
      excerpt: "Dank unserer Eingabe wurde die Schulbus-Verbindung verbessert. Mehr Sicherheit für unsere Kinder.",
      content: `Ein wichtiger Erfolg für die IGSHS: Nach monatelangen Verhandlungen mit der Gemeinde Birmensdorf wurde die Schulbus-Taktung für unsere Quartiere deutlich verbessert.\n\n**Das Problem**\n\nDer Schulweg von Stöcken, Haslen und Sternen ins Dorfzentrum ist lang und führt entlang der stark befahrenen Zürcherstrasse. Viele Eltern waren besorgt um die Sicherheit ihrer Kinder, insbesondere in den dunklen Wintermonaten.\n\n**Unsere Eingabe**\n\nDie IGSHS hat im Frühjahr 2025 eine detaillierte Eingabe bei der Gemeinde eingereicht, in der wir eine bessere Schulbus-Anbindung gefordert haben. Unterstützt von über 120 Unterschriften aus den Quartieren konnten wir den Druck erhöhen.\n\n**Die Lösung**\n\nAb Januar 2026 gelten folgende Verbesserungen:\n\n- **Zusätzliche Morgenfahrt** um 7:15 Uhr ab Haltestelle Sternen/WSL\n- **Verlängerte Nachmittagsfahrten** bis 17:00 Uhr\n- **Neue Haltestelle** bei der Kreuzung Haslen\n\nDamit wird der Schulweg für unsere Kinder deutlich sicherer und komfortabler.\n\n**Dank an alle Unterstützer**\n\nDieser Erfolg wäre ohne die breite Unterstützung aus den Quartieren nicht möglich gewesen. Vielen Dank an alle, die unterschrieben und sich engagiert haben!`,
      link: "/news/2",
    },
    {
      id: 3,
      date: "15.11.2025",
      category: "Mitglieder",
      title: "Protokoll der Hauptversammlung",
      excerpt: "Das Protokoll der letzten HV ist nun für alle Mitglieder im internen Bereich verfügbar.",
      content: `Die ordentliche Hauptversammlung der IGSHS fand am 10. November 2025 im Gemeindezentrum Brüelmatt statt. Rund 45 Mitglieder nahmen teil und diskutierten die wichtigsten Themen für unsere Quartiere.\n\n**Wichtigste Beschlüsse**\n\n1. **Jahresrechnung 2024 genehmigt**: Die Rechnung schliesst mit einem kleinen Plus ab. Die Mitgliederbeiträge bleiben unverändert bei CHF 30 pro Jahr.\n\n2. **Vorstand wiedergewählt**: Der gesamte Vorstand wurde für eine weitere Amtsperiode bestätigt.\n\n3. **Schwerpunkte 2026**: Die Versammlung beschloss, den Fokus auf folgende Themen zu legen:\n   - Sicherer Schulweg (Fortsetzung)\n   - Lärmschutz entlang der Zürcherstrasse\n   - Quartierentwicklung und Bauvorhaben\n\n**Protokoll verfügbar**\n\nDas vollständige Protokoll ist ab sofort für alle Mitglieder verfügbar. Sie können es per E-Mail unter vereinigshs@gmail.com anfordern oder im internen Mitgliederbereich herunterladen.\n\n**Nächste Versammlung**\n\nDie nächste Hauptversammlung findet voraussichtlich im November 2026 statt. Der genaue Termin wird rechtzeitig bekannt gegeben.\n\nWir danken allen Teilnehmenden für die konstruktiven Diskussionen und das Engagement!`,
      link: "/news/3",
    },
    {
      id: 5,
      date: "10.12.2025",
      category: "Gemeinde",
      title: "Kinder - Basteln",
      excerpt: "Weihnachtsgeschenke basteln im Gemeindezentrum. Für Kinder vom 1. Kindergarten bis zur 3. Sekundarschule.",
      content: `**Kinder - Basteln**\n\nAm **Dienstag, 10. Dezember 2025 von 14:00 bis 17:00 Uhr** findet im Gemeindezentrum Freizeitraum ein Bastelnachmittag statt.\n\n**Beschreibung**\n\nEs werden verschiedene Weihnachtsgeschenke für Gotti, Götti, Grosseltern oder auch für dich selbst gebastelt. Bitte ältere Kleider anziehen.\n\n**Details**\n\n- **Ort**: Gemeindezentrum Freizeitraum, Dorfstrasse 10, 8903 Birmensdorf\n- **Voraussetzungen**: Kinder vom 1. Kindergarten bis zur 3. Sekundarschule\n- **Preis**: zwischen CHF 2.- und CHF 15.- (nur Barzahlung)\n- **Anmeldung**: Keine Anmeldung erforderlich\n\n**Kontakt**\n\nBrigitte Büchi\nbrigitte.buechi@bluewin.ch`,
      link: "/news/5",
    },
    {
      id: 6,
      date: "12.12.2025",
      category: "Gemeinde",
      title: "Eltern-Kind Weihnachtsbasteln",
      excerpt: "Basteln Sie zusammen mit Ihrem Kind einfache Basteleien zu fairen Preisen im Familienzentrum.",
      content: `**Eltern-Kind Weihnachtsbasteln**\n\nAm **Donnerstag, 12. Dezember 2025 von 14:00 bis 16:00 Uhr** lädt das Elternforum Birmensdorf zum gemeinsamen Basteln ein.\n\n**Beschreibung**\n\nBastle zusammen mit dem eigenen Kind einfache Basteleien zu fairen Preisen (CHF 2.- bis 5.- pro Stück). Sämtliches Material ist vorhanden. Kaffee, Sirup und "en Zvieri" gibt es auch. Wie immer werdet ihr von einer "Bastelfee" (Anja Cimino) unterstützt.\n\n**Details**\n\n- **Ort**: Familienzentrum, Breitestrasse 13, 8903 Birmensdorf\n- **Organisator**: Elternforum Birmensdorf\n- **Preis**: CHF 2.- bis CHF 5.- pro Stück\n\n**Kontakt**\n\nElternforum Birmensdorf\ninfo@elternforum-birmensdorf.ch`,
      link: "/news/6",
    },
    {
      id: 7,
      date: "17.12.2025",
      category: "Gemeinde",
      title: "Kinder - Basteln & Geschichtenzeit",
      excerpt: "Bastelnachmittag und Geschichtenzeit in der Bibliothek. Zwei tolle Angebote für Kinder an einem Tag!",
      content: `**Kinder - Basteln & Geschichtenzeit**\n\nAm **Mittwoch, 17. Dezember 2025** finden gleich zwei Veranstaltungen für Kinder statt.\n\n**Bastelnachmittag (14:00 - 17:00 Uhr)**\n\nIm Gemeindezentrum Freizeitraum werden verschiedene Weihnachtsgeschenke für Gotti, Götti, Grosseltern oder auch für dich selbst gebastelt. Bitte ältere Kleider anziehen.\n\n- **Ort**: Gemeindezentrum Freizeitraum, Dorfstrasse 10\n- **Voraussetzungen**: Kinder vom 1. Kindergarten bis zur 3. Sekundarschule\n- **Preis**: CHF 2.- bis CHF 15.- (nur Barzahlung)\n- **Kontakt**: Brigitte Büchi, brigitte.buechi@bluewin.ch\n\n**Geschichtenzeit (14:30 - 15:00 Uhr)**\n\nDie Bibliothekarinnen lesen eine spannende Geschichte vor. Für alle Kinder, die gerne ein Bilderbuch lang zuhören.\n\n- **Ort**: Gemeinde- und Schulbibliothek, Dorfstrasse 10\n- **Preis**: Kostenlos\n- **Anmeldung**: Keine Anmeldung erforderlich\n- **Kontakt**: Maya Del Bono, bibliothek@birmensdorf.ch\n\nAlle sind herzlich willkommen!`,
      link: "/news/7",
    },
    {
      id: 8,
      date: "04.01.2026",
      category: "Gemeinde",
      title: "Neujahrsapéro",
      excerpt: "Traditioneller Neujahrsapéro der Gemeinde Birmensdorf. Alle Einwohnerinnen und Einwohner sind herzlich eingeladen.",
      content: `**Neujahrsapéro 2026**\n\nAm **Samstag, 4. Januar 2026 um 11:00 Uhr** findet der traditionelle Neujahrsapéro der Gemeinde Birmensdorf statt.\n\n**Einladung**\n\nDie Gemeinde Birmensdorf lädt alle Einwohnerinnen und Einwohner herzlich zum Neujahrsapéro ein. Stossen Sie gemeinsam mit Ihren Nachbarn und der Gemeindeverwaltung auf das neue Jahr an!\n\n**Details**\n\n- **Ort**: Gemeindezentrum Brüelmatt, Dorfstrasse 10, 8903 Birmensdorf\n- **Datum**: Samstag, 4. Januar 2026\n- **Zeit**: 11:00 Uhr\n- **Eintritt**: Frei\n\n**Programm**\n\n- Begrüssung durch den Gemeinderat\n- Apéro mit Getränken und kleinen Snacks\n- Gelegenheit zum Austausch und Vernetzen\n\n**Kontakt**\n\nGemeinde Birmensdorf\nAbteilung Präsidiales\npraesidiales@birmensdorf.ch\n\nWir freuen uns auf Ihr Kommen und wünschen Ihnen einen guten Start ins neue Jahr!`,
      link: "/news/8",
    },
  ],
  election: {
    isVisible: true, // Schalter: true = Box anzeigen, false = ausblenden
    title: "Gemeinderat-Wahlen 8. März 2026",
    subtitle: "Unterstützen Sie Felix Gless für den Gemeinderat Birmensdorf",
    candidate: {
      name: "Felix Gless",
      role: "Kandidat für den Gemeinderat",
      slogan: "Zukunft gestalten. Junge Bürger sind dabei.",
      imageAlt: "Felix Gless, Kandidat für den Gemeinderat Birmensdorf",
      about: "Familie mit Kleinkind, Ingenieur und Jurist mit Personalverantwortung, aktiv in Birmensdorf, überparteilich",
      goals: [
        "Quartiere und Zentrum in Balance",
        "Sichere Schul- und Velowege",
        "Lebendiges, sportliches, vielfältiges Birmensdorf",
        "Attraktives Wohnen und Arbeiten nahe der Stadt",
        "Lokales Gewerbe fördern",
        "Qualitätsvoll Verdichten mit Spiel- und Begegnungsorten"
      ]
    },
    cta: "Kandidatur unterstützen",
  },
  topics: [
    {
      id: "t1",
      icon: Bus,
      title: "Sicherer Schulweg",
      description: "Kampf um Schulbusse, bessere Taktung und sichere Haltestellen (z.B. Sternen/WSL). Der Weg ins Dorfzentrum ist lang und gefährlich.",
    },
    {
      id: "t2",
      icon: Car,
      title: "Verkehr & Lärm",
      description: "Eindämmung des Durchgangsverkehrs und Lärmschutz für unsere Quartiere. Wir setzen uns für Tempo 30 und verkehrsberuhigende Massnahmen ein.",
    },
    {
      id: "t3",
      icon: TreePine,
      title: "Bau & Entwicklung",
      description: "Kritische Begleitung von grossen Bauprojekten und Erhalt des Quartiercharakters. Grünflächen und Natur sollen geschützt werden.",
    },
    {
      id: "t4",
      icon: Coffee,
      title: "Vernetzung",
      description: "Quartierfeste, Austausch und Nachbarschaftshilfe. Wir fördern den Zusammenhalt und die Gemeinschaft in unseren Quartieren.",
    },
  ],
  contact: {
    title: "Kontaktieren Sie uns",
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
    copyright: "© 2025 IGSHS - Interessengemeinschaft Stöcken, Haslen und Sternen",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "Statuten", href: "#" },
    ],
  },
};
