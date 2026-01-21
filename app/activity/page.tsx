"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Upload } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

const activityData = [
  { time: "06:00", steps: 120, calories: 45 },
  { time: "09:00", steps: 450, calories: 180 },
  { time: "12:00", steps: 620, calories: 280 },
  { time: "15:00", steps: 380, calories: 160 },
  { time: "18:00", steps: 520, calories: 220 },
  { time: "21:00", steps: 150, calories: 50 },
]

const heartRateData = [
  { date: "Lun", avg: 72, max: 95, min: 60 },
  { date: "Mar", avg: 70, max: 92, min: 58 },
  { date: "Mer", avg: 75, max: 98, min: 62 },
  { date: "Jeu", avg: 73, max: 96, min: 61 },
  { date: "Ven", avg: 76, max: 100, min: 63 },
  { date: "Sam", avg: 68, max: 88, min: 55 },
  { date: "Dim", avg: 70, max: 90, min: 59 },
]

export default function ActivityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader
          title="Activité & Rythme Cardiaque"
          subtitle="Suivi complet de ta santé physique"
          action={
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Upload className="w-4 h-4 mr-2" />
              Importer
            </Button>
          }
        />

        {/* Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Pas aujourd'hui", value: "8,420", unit: "pas" },
              { label: "Calories brûlées", value: "935", unit: "cal" },
              { label: "FC moyenne", value: "72", unit: "bpm" },
              { label: "Sommeil hier", value: "7.5h", unit: "heures" },
            ].map((stat, i) => (
              <Card key={i} className="border-0 shadow hover-lift">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.unit}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Activité (Aujourd'hui)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="time" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip contentStyle={{ borderRadius: "8px" }} />
                    <Area type="monotone" dataKey="steps" fill="#FF7F5033" stroke="#FF7F50" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle>Rythme Cardiaque (Semaine)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="date" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip contentStyle={{ borderRadius: "8px" }} />
                    <Legend />
                    <Line type="monotone" dataKey="avg" stroke="#FF7F50" strokeWidth={2} name="Moyenne" />
                    <Line type="monotone" dataKey="max" stroke="#FFC0CB" strokeWidth={2} name="Maximum" />
                    <Line type="monotone" dataKey="min" stroke="#333333" strokeWidth={2} name="Minimum" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Import Section */}
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle>Importer des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Importe des données de ta montre ou d'un fichier CSV pour synchroniser tes données d'activité.
              </p>
              <div className="flex gap-3">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Upload className="w-4 h-4 mr-2" />
                  Fichier CSV
                </Button>
                <Button variant="outline" className="rounded-full bg-transparent">
                  Synchroniser Montre
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
