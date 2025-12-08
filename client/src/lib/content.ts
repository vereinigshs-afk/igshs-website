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
      id: 1,
      date: "08.12.2025",
      category: "Veranstaltung",
      title: "Quartierfest 2026: Save the Date!",
      excerpt: "Unser nächstes Quartierfest findet im Sommer 2026 statt. Helferinnen und Helfer sind herzlich willkommen!",
      content: `Das jährliche Quartierfest der IGSHS ist ein Höhepunkt im Gemeinschaftsleben unserer Quartiere Stöcken, Haslen und Sternen. Nach dem grossen Erfolg im letzten Jahr freuen wir uns, das nächste Fest für Sommer 2026 anzukündigen.\n\n**Was erwartet Sie?**\n\nEin buntes Programm für die ganze Familie: Live-Musik, Kinderspiele, regionale Kulinarik und viel Raum für Begegnungen. Das Fest findet traditionell auf dem Dorfplatz statt und bringt Nachbarn zusammen.\n\n**Wir suchen Helferinnen und Helfer!**\n\nOhne freiwillige Unterstützung wäre ein solches Fest nicht möglich. Wir suchen noch Helfer für:\n\n- Grillstand und Getränkeausgabe\n- Auf- und Abbau\n- Kinderbetreuung und Spiele\n- Dekoration\n\nInteressiert? Melden Sie sich bei uns unter info@igshs.ch. Jede helfende Hand zählt!\n\n**Save the Date: Sommer 2026**\n\nDer genaue Termin wird in den kommenden Wochen bekannt gegeben. Wir freuen uns auf ein rauschendes Fest mit Ihnen!`,
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
      content: `Die ordentliche Hauptversammlung der IGSHS fand am 10. November 2025 im Gemeindezentrum Brüelmatt statt. Rund 45 Mitglieder nahmen teil und diskutierten die wichtigsten Themen für unsere Quartiere.\n\n**Wichtigste Beschlüsse**\n\n1. **Jahresrechnung 2024 genehmigt**: Die Rechnung schliesst mit einem kleinen Plus ab. Die Mitgliederbeiträge bleiben unverändert bei CHF 30 pro Jahr.\n\n2. **Vorstand wiedergewählt**: Der gesamte Vorstand wurde für eine weitere Amtsperiode bestätigt.\n\n3. **Schwerpunkte 2026**: Die Versammlung beschloss, den Fokus auf folgende Themen zu legen:\n   - Sicherer Schulweg (Fortsetzung)\n   - Lärmschutz entlang der Zürcherstrasse\n   - Quartierentwicklung und Bauvorhaben\n\n**Protokoll verfügbar**\n\nDas vollständige Protokoll ist ab sofort für alle Mitglieder verfügbar. Sie können es per E-Mail unter info@igshs.ch anfordern oder im internen Mitgliederbereich herunterladen.\n\n**Nächste Versammlung**\n\nDie nächste Hauptversammlung findet voraussichtlich im November 2026 statt. Der genaue Termin wird rechtzeitig bekannt gegeben.\n\nWir danken allen Teilnehmenden für die konstruktiven Diskussionen und das Engagement!`,
      link: "/news/3",
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
    email: "info@igshs.ch",
    address: "IGSHS, Postfach 123, 8903 Birmensdorf",
    form: {
      categories: [
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
