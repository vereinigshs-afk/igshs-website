import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.membership.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Ihre Anmeldung wurde erfolgreich übermittelt!");
    },
    onError: (error) => {
      toast.error(`Fehler: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-destructive" />
              <span className="text-2xl font-bold tracking-tighter">
                {siteContent.general.logoText}
              </span>
            </div>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center py-24">
          <div className="container max-w-2xl">
            <Card className="border-2 border-border">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-4">Vielen Dank!</h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                  Ihre Mitgliedschafts-Anmeldung wurde erfolgreich übermittelt.
                  Wir werden uns in Kürze bei Ihnen melden.
                </p>
                <Link href="/">
                  <Button className="bg-destructive hover:bg-destructive/90 text-white rounded-none">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Zurück zur Startseite
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-destructive" />
            <span className="text-2xl font-bold tracking-tighter">
              {siteContent.general.logoText}
            </span>
          </div>
          <Link href="/">
            <Button variant="outline" className="rounded-none border-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-24 bg-slate-50">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Mitglied werden
            </h1>
            <p className="text-xl text-muted-foreground">
              Werden Sie Teil der IGSHS und engagieren Sie sich für unser
              Quartier.
            </p>
          </div>

          <Card className="bg-white border border-border shadow-sm">
            <CardHeader className="border-b border-border pb-6">
              <CardTitle className="text-2xl">Anmeldeformular</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Vorname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Max"
                      required
                      className="rounded-none border-slate-300 focus-visible:ring-destructive"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Nachname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Muster"
                      required
                      className="rounded-none border-slate-300 focus-visible:ring-destructive"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Adresse <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Musterstrasse 123&#10;3098 Schliern"
                    required
                    className="min-h-[100px] rounded-none border-slate-300 focus-visible:ring-destructive"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    E-Mail <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max.muster@email.ch"
                    required
                    className="rounded-none border-slate-300 focus-visible:ring-destructive"
                  />
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-6">
                    Mit der Anmeldung bestätigen Sie, dass Sie die Statuten der
                    IGSHS gelesen haben und akzeptieren.
                  </p>
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full md:w-auto bg-destructive hover:bg-destructive/90 text-white rounded-none px-12 h-12"
                  >
                    {submitMutation.isPending
                      ? "Wird gesendet..."
                      : "Anmeldung absenden"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-foreground text-background py-12 border-t border-white/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-400">
            {siteContent.footer.copyright}
          </div>
          <div className="flex gap-6">
            {siteContent.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
