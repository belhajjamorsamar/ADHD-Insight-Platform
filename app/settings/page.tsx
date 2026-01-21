"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Bell, Lock } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profile, setProfile] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    dateOfBirth: "1995-03-15",
    gender: "Homme",
  })

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader title="Paramètres" subtitle="Gère ton compte et tes préférences" />

        {/* Content */}
        <main className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
          {/* Profile Settings */}
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle>Informations Personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Prénom</label>
                  <Input
                    value={profile.firstName}
                    onChange={(e) => handleProfileChange("firstName", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
                  <Input
                    value={profile.lastName}
                    onChange={(e) => handleProfileChange("lastName", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange("email", e.target.value)}
                  className="rounded-lg"
                />
              </div>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Enregistrer les modifications
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="border-0 shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Préférences de Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Rappels d'exercices quotidiens", enabled: true },
                { label: "Résumés hebdomadaires", enabled: true },
                { label: "Notifications de recommandations", enabled: false },
                { label: "Alertes importantes", enabled: true },
              ].map((notif, i) => (
                <label
                  key={i}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-smooth"
                >
                  <span className="text-foreground">{notif.label}</span>
                  <input type="checkbox" defaultChecked={notif.enabled} className="rounded-md w-4 h-4 cursor-pointer" />
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="border-0 shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Ancien mot de passe</label>
                <Input type="password" placeholder="••••••••" className="rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nouveau mot de passe</label>
                <Input type="password" placeholder="••••••••" className="rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confirmer le mot de passe</label>
                <Input type="password" placeholder="••••••••" className="rounded-lg" />
              </div>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Mettre à jour le mot de passe
              </Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle>Gestion des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-foreground font-medium">Télécharger mes données</p>
                <p className="text-sm text-muted-foreground">Exporte toutes tes données personnelles et de santé</p>
                <Button variant="outline" className="rounded-full bg-transparent">
                  Télécharger les données
                </Button>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-foreground font-medium mb-2">Supprimer mon compte</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Cette action est irréversible. Toutes tes données seront supprimées.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer mon compte
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
