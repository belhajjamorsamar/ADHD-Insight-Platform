import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Activity, BarChart3, Lightbulb } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ADHD Insight</div>
          <ul className="hidden md:flex gap-8 items-center text-foreground">
            <li>
              <a href="#features" className="hover:text-primary transition-smooth">
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-smooth">
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-smooth">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link href="/login">
              <Button variant="outline" className="rounded-full bg-transparent">
                Se connecter
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Créer un compte
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprends ton <span className="text-primary">ADHD</span> et améliore ton quotidien
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Une plateforme pour suivre tes symptômes, ton activité et tes performances
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/signup">
                <Button className="rounded-full h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Créer un compte
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="rounded-full h-12 px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Brain className="w-24 h-24 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Illustration - Patient utilisant la plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos fonctionnalités</h2>
            <p className="text-lg text-muted-foreground">Tout ce dont tu as besoin pour gérer ton ADHD</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Suivi des symptômes",
                description: "Enregistre et suivis tes symptômes au fil du temps",
              },
              {
                icon: <Activity className="w-8 h-8 text-primary" />,
                title: "Analyse de l'activité",
                description: "Comprends ton rythme cardiaque et ton activité quotidienne",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-primary" />,
                title: "Tests cognitifs",
                description: "Teste tes performances mentales avec des tests validés",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                title: "Recommandations",
                description: "Reçois des conseils personnalisés pour améliorer ta vie",
              },
            ].map((feature, i) => (
              <Card key={i} className="hover-lift border-0 bg-white">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">ADHD Insight</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Conditions d'utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Suivez-nous</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-smooth">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 ADHD Insight Platform. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
