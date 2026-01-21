"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4 py-12">
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
            <CardTitle className="text-3xl text-foreground">Se connecter</CardTitle>
            <p className="text-muted-foreground mt-2">Accède à ton tableau de bord ADHD Insight</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <Button
                type="submit"
                className="w-full rounded-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-smooth"
              >
                Se connecter
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                  Mot de passe oublié?
                </Link>
              </p>

              <p className="text-center text-sm text-muted-foreground">
                Pas encore inscrit?{" "}
                <Link href="/signup" className="text-secondary hover:text-secondary/80 font-medium">
                  Créer un compte
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
