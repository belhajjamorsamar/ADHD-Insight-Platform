"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

const recommendations = [
  {
    category: "Cognition",
    icon: "🧠",
    items: [
      {
        title: "Exercice de mémoire quotidienne",
        description: "Améliore ta mémoire de travail avec 5 minutes par jour",
        time: "5 min",
      },
      { title: "Méditation pour l'attention", description: "Augmente ta capacité de concentration", time: "10 min" },
      { title: "Jeu de logique", description: "Renforce tes compétences de résolution de problèmes", time: "15 min" },
    ],
  },
  {
    category: "Santé",
    icon: "❤️",
    items: [
      {
        title: "Hygiène du sommeil",
        description: "Conseils pour améliorer la qualité de ton sommeil",
        time: "Lecture",
      },
      { title: "Routine d'exercice", description: "Plan d'activité physique adapté à ADHD", time: "30 min" },
      { title: "Gestion du stress", description: "Techniques de relaxation rapides et efficaces", time: "10 min" },
    ],
  },
  {
    category: "Académique",
    icon: "📚",
    items: [
      { title: "Techniques d'étude", description: "Méthodes optimisées pour les gens atteints d'ADHD", time: "Cours" },
      { title: "Gestion du temps", description: "Créer un planning efficace sans surcharge", time: "20 min" },
      {
        title: "Prise de notes efficace",
        description: "Stratégies pour mieux retenir l'information",
        time: "Tutoriel",
      },
    ],
  },
]

export default function RecommendationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Cognition")

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader title="Recommandations Personnalisées" subtitle="Conseils adaptés à ton profil ADHD" />

        {/* Content */}
        <main className="p-4 sm:p-6 max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {recommendations.map((rec) => (
              <button
                key={rec.category}
                onClick={() => setActiveCategory(rec.category)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth whitespace-nowrap ${
                  activeCategory === rec.category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {rec.icon} {rec.category}
              </button>
            ))}
          </div>

          {/* Recommendations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations
              .find((r) => r.category === activeCategory)
              ?.items.map((item, i) => (
                <Card key={i} className="border-0 shadow hover-lift cursor-pointer group">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                      <Button
                        size="sm"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 w-8 p-0 flex items-center justify-center"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}
