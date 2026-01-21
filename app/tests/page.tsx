"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"

export default function TestsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const questions = [
    { question: "Appuie si tu vois le nombre 3", type: "CPT-II" },
    { question: "Appuie si tu vois la lettre A", type: "CPT-II" },
    { question: "Appuie si tu vois un carré rouge", type: "CPT-II" },
    { question: "Appuie si tu vois le nombre 5", type: "CPT-II" },
    { question: "Appuie si tu vois la lettre M", type: "CPT-II" },
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setTestStarted(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64">
        <PageHeader title="Tests Cognitifs" subtitle="CPT-II et autres évaluations" />

        {/* Content */}
        <main className="p-4 sm:p-6 max-w-4xl mx-auto">
          {!testStarted ? (
            <div className="space-y-6">
              <Card className="border-0 shadow">
                <CardHeader>
                  <CardTitle>Test CPT-II (Continuous Performance Test)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Le test CPT-II mesure ton attention et ton impulsivité. Tu vas voir une série de stimuli et tu dois
                    réagir selon les instructions.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                    <p className="font-semibold text-foreground">Ce que tu vas tester:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Attention soutenue</li>
                      <li>Temps de réaction</li>
                      <li>Contrôle des impulsions</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">Durée estimée: 5-10 minutes</p>
                  <Button
                    onClick={() => {
                      setTestStarted(true)
                      setCurrentQuestion(0)
                      setAnswers([])
                    }}
                    className="w-full rounded-full h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Commencer le test
                  </Button>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Tests complétés", value: "3", color: "primary" },
                  { title: "Score moyen", value: "68", color: "secondary" },
                  { title: "Dernière amélioration", value: "+5%", color: "accent" },
                ].map((stat, i) => (
                  <Card key={i} className="border-0 shadow hover-lift">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                      <p
                        className={`text-3xl font-bold ${
                          stat.color === "primary"
                            ? "text-primary"
                            : stat.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <Card className="border-0 shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    Question {currentQuestion + 1} / {questions.length}
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setTestStarted(false)}>
                    Arrêter
                  </Button>
                </div>
                <Progress value={progress} className="mt-4" />
              </CardHeader>
              <CardContent className="space-y-8 text-center py-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">Instruction:</p>
                  <p className="text-2xl font-semibold text-foreground mb-12">{questions[currentQuestion].question}</p>
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mx-auto mb-12 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">3</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => handleAnswer("yes")}
                    className="rounded-full h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Oui, appuyer
                  </Button>
                  <Button onClick={() => handleAnswer("no")} variant="outline" className="rounded-full h-12 px-8">
                    Non, ne pas appuyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
