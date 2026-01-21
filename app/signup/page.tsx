"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-smooth"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-foreground">Créer un compte</CardTitle>
            <p className="text-muted-foreground mt-2">Rejoins la communauté ADHD Insight</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Prénom</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date de naissance</label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Sexe</label>
                <Select value={formData.gender} onValueChange={handleSelectChange}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Sélectionne ton sexe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Homme</SelectItem>
                    <SelectItem value="female">Femme</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                    <SelectItem value="prefer-not">Je préfère ne pas dire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mot de passe</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confirmer le mot de passe</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="rounded-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium transition-smooth"
              >
                S'inscrire
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Déjà inscrit?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                  Se connecter
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
