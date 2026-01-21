"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Brain, Activity, TrendingUp, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

const activityData = [
  { date: "Lun", activité: 45, sommeil: 7 },
  { date: "Mar", activité: 52, sommeil: 6.5 },
  { date: "Mer", activité: 48, sommeil: 7.5 },
  { date: "Jeu", activité: 61, sommeil: 7 },
  { date: "Ven", activité: 55, sommeil: 6.5 },
  { date: "Sam", activité: 67, sommeil: 8 },
  { date: "Dim", activité: 42, sommeil: 8.5 },
]

const heartRateData = [
  { time: "06:00", bpm: 65 },
  { time: "09:00", bpm: 72 },
  { time: "12:00", bpm: 78 },
  { time: "15:00", bpm: 75 },
  { time: "18:00", bpm: 80 },
  { time: "21:00", bpm: 68 },
]

const symptomsData = [
  { name: "Attention", value: 65 },
  { name: "Impulsivité", value: 45 },
  { name: "Hyperactivité", value: 38 },
]

const COLORS = ["#FF7F50", "#FFC0CB", "#333333"]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader
          title="Tableau de bord"
          subtitle="Suivi de ta santé mentale et physique"
          action={
            <Link href="/settings">
              <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                <Settings className="w-4 h-4" />
              </Button>
            </Link>
          }
        />

        {/* Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* Quick Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-0 shadow hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Score ADHD Global</CardTitle>
                <Brain className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">72</div>
                <p className="text-xs text-muted-foreground mt-1">↑ 5% vs la semaine dernière</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Derniers Tests</CardTitle>
                <TrendingUp className="h-5 w-5 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">68</div>
                <p className="text-xs text-muted-foreground mt-1">Test cognitif - Il y a 3 jours</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Activité Moyenne</CardTitle>
                <Activity className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">54%</div>
                <p className="text-xs text-muted-foreground mt-1">Semaine en cours</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Activity Chart */}
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Activité & Sommeil (Semaine)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="date" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip contentStyle={{ borderRadius: "8px" }} />
                    <Legend />
                    <Line type="monotone" dataKey="activité" stroke="#FF7F50" strokeWidth={2} />
                    <Line type="monotone" dataKey="sommeil" stroke="#FFC0CB" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Heart Rate Chart */}
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Rythme Cardiaque (Aujourd'hui)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="time" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip contentStyle={{ borderRadius: "8px" }} />
                    <Bar dataKey="bpm" fill="#FF7F50" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Symptoms Pie Chart & Recommendations */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Profil des Symptômes</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={symptomsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {symptomsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Recommandations Récentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Exercice cognitif quotidien", type: "Cognition" },
                  { title: "Améliorer l'hygiène du sommeil", type: "Santé" },
                  { title: "Technique de gestion du stress", type: "Académique" },
                ].map((rec, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover-lift">
                    <div>
                      <p className="font-medium text-foreground">{rec.title}</p>
                      <p className="text-xs text-muted-foreground">{rec.type}</p>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                      Voir
                    </Button>
                  </div>
                ))}
                <Link href="/recommendations">
                  <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Voir toutes les recommandations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
