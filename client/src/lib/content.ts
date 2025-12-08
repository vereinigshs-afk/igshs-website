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
      link: "#",
    },
    {
      id: 2,
      date: "01.12.2025",
      category: "Verkehr",
      title: "Schulbus-Taktung: Erfolg!",
      excerpt: "Dank unserer Eingabe wurde die Schulbus-Verbindung verbessert. Mehr Sicherheit für unsere Kinder.",
      link: "#",
    },
    {
      id: 3,
      date: "15.11.2025",
      category: "Mitglieder",
      title: "Protokoll der Hauptversammlung",
      excerpt: "Das Protokoll der letzten HV ist nun für alle Mitglieder im internen Bereich verfügbar.",
      link: "#",
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
