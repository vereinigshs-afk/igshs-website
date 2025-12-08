import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useParams, Link } from "wouter";
import { Streamdown } from "streamdown";

export default function NewsDetail() {
  const params = useParams();
  const newsId = parseInt(params.id || "0");
  
  const article = siteContent.news.find((item) => item.id === newsId);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="h-8 w-8 bg-destructive" />
                <span className="text-2xl font-bold tracking-tighter">
                  {siteContent.general.logoText}
                </span>
              </div>
            </Link>
          </div>
        </header>
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Artikel nicht gefunden</h1>
            <p className="text-muted-foreground">Der gesuchte News-Artikel existiert nicht.</p>
            <Link href="/">
              <Button className="mt-8 bg-destructive hover:bg-destructive/90 text-white rounded-none">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-8 w-8 bg-destructive" />
              <span className="text-2xl font-bold tracking-tighter">
                {siteContent.general.logoText}
              </span>
            </div>
          </Link>
          
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Button>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <main className="flex-grow py-16">
        <article className="container max-w-4xl">
          {/* Article Header */}
          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="uppercase tracking-wider text-destructive font-medium">
                  {article.category}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-destructive pl-6">
              {article.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <Streamdown className="text-foreground">
              {article.content}
            </Streamdown>
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link href="/">
              <Button className="bg-destructive hover:bg-destructive/90 text-white rounded-none px-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t border-white/10 mt-16">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-400">
            {siteContent.footer.copyright}
          </div>
          <div className="flex gap-6">
            {siteContent.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
