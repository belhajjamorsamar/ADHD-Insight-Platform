"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const reports = [
    { date: "15 Jan 2024", type: "Rapport Complet", tests: 3, score: 72 },
    { date: "08 Jan 2024", type: "Résumé Mensuel", tests: 12, score: 68 },
    { date: "01 Jan 2024", type: "Rapport Complet", tests: 2, score: 65 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader
          title="Rapports & Export"
          subtitle="Génère et télécharge tes rapports"
          action={
            <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <FileText className="w-4 h-4 mr-2" />
              Générer Rapport
            </Button>
          }
        />

        {/* Content */}
        <main className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
          {/* Generate Report Card */}
          <Card className="border-0 shadow bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Générer un Nouveau Rapport</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Crée un rapport complet à partager avec un professionnel de santé. Sélectionne les données à inclure:
              </p>
              <div className="space-y-2">
                {[
                  { label: "Résultats des tests cognitifs", checked: true },
                  { label: "Données d'activité", checked: true },
                  { label: "Journal émotionnel", checked: false },
                  { label: "Graphiques de progression", checked: true },
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={option.checked}
                      className="rounded-md w-4 h-4 cursor-pointer"
                    />
                    <span className="text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Générer en PDF
              </Button>
            </CardContent>
          </Card>

          {/* Reports History */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Historique des rapports</h3>
            <div className="space-y-3">
              {reports.map((report, i) => (
                <Card key={i} className="border-0 shadow hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{report.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {report.date} • {report.tests} tests • Score: {report.score}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
