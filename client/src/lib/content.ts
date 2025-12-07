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
  Coffee
} from "lucide-react";

// Zentrale Daten-Konfiguration für die IGSHS Website
// Hier können alle Texte und Inhalte angepasst werden, ohne den Code zu berühren.

export const siteContent = {
  general: {
    title: "IGSHS",
    subtitle: "Interessengemeinschaft Schönes & Heimeliges Schliern",
    description: "Wir setzen uns für ein lebenswertes, sicheres und lebendiges Quartier ein.",
    logoText: "IGSHS",
  },
  navigation: [
    { label: "Aktuelles", href: "#aktuelles" },
    { label: "Schwerpunkte", href: "#schwerpunkte" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    title: "Gemeinsam für unser Quartier.",
    subtitle: "Die IGSHS vertritt die Interessen der Bewohnerinnen und Bewohner von Schliern. Wir engagieren uns für Lebensqualität, Sicherheit und Nachbarschaft.",
    primaryButton: "Mitglied werden",
    secondaryButton: "Mehr erfahren",
    imageAlt: "Blick über das Quartier Schliern bei Sonnenuntergang",
  },
  news: [
    {
      id: 1,
      date: "08.12.2025",
      category: "Veranstaltung",
      title: "Quartierfest 2025: Helfer gesucht!",
      excerpt: "Für unser grosses Sommerfest suchen wir noch engagierte Helferinnen und Helfer für den Grillstand und die Getränkeausgabe.",
      link: "#",
    },
    {
      id: 2,
      date: "01.12.2025",
      category: "Verkehr",
      title: "Tempo 30 Zone: Neue Eingabe",
      excerpt: "Der Vorstand hat eine neue Eingabe bei der Gemeinde gemacht, um die Sicherheit auf der Schulhausstrasse zu verbessern.",
      link: "#",
    },
    {
      id: 3,
      date: "15.11.2025",
      category: "Mitglieder",
      title: "Protokoll der Hauptversammlung",
      excerpt: "Das Protokoll der letzten HV ist nun für alle Mitglieder im internen Bereich oder auf Anfrage verfügbar.",
      link: "#",
    },
  ],
  election: {
    isVisible: true, // Schalter: true = Box anzeigen, false = ausblenden
    title: "Wahlen 2026",
    subtitle: "Unterstützen Sie unsere Kandidaten für den Gemeinderat",
    candidate: {
      name: "Hans Muster",
      role: "Präsident IGSHS",
      slogan: "Für ein starkes Schliern im Gemeinderat.",
      imageAlt: "Porträt von Hans Muster",
    },
    cta: "Kandidatur unterstützen",
  },
  topics: [
    {
      id: "t1",
      icon: ShieldAlert,
      title: "Sicherer Schulweg",
      description: "Wir kämpfen für bessere Beleuchtung und sicherere Übergänge für unsere Kinder auf dem Weg zur Schule.",
    },
    {
      id: "t2",
      icon: TreePine,
      title: "Ortsentwicklung",
      description: "Begleitung von Bauprojekten, damit der Charakter unseres Quartiers erhalten bleibt und Grünflächen geschützt werden.",
    },
    {
      id: "t3",
      icon: Car,
      title: "Verkehr & Lärm",
      description: "Massnahmen gegen Schleichverkehr und unnötigen Lärm, besonders in den Abendstunden.",
    },
    {
      id: "t4",
      icon: Coffee,
      title: "Quartierleben",
      description: "Förderung des Austauschs durch Anlässe, Stammtische und gemeinsame Aktionen.",
    },
  ],
  contact: {
    title: "Kontaktieren Sie uns",
    text: "Haben Sie ein Anliegen, eine Idee oder möchten Sie Mitglied werden? Wir freuen uns auf Ihre Nachricht.",
    email: "info@igshs.ch",
    address: "IGSHS, Postfach 123, 3098 Schliern",
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
    copyright: "© 2025 IGSHS - Interessengemeinschaft Schönes & Heimeliges Schliern",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "Statuten", href: "#" },
    ],
  },
};
