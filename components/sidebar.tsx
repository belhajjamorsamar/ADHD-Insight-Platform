"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut } from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-foreground hover:text-primary fixed top-6 left-4 z-50"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold text-primary hover:text-primary/80 transition-smooth">
            ADHD IDetection
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-foreground hover:text-primary">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="px-4 space-y-2">
          {[
            { label: "Tableau de bord", href: "/dashboard", icon: "📊" },
            { label: "Tests cognitifs", href: "/tests", icon: "🧠" },
            { label: "Activité & Rythme", href: "/activity", icon: "❤️" },
            { label: "Recommandations", href: "/recommendations", icon: "💡" },
            { label: "Rapports", href: "/reports", icon: "📄" },
            { label: "Paramètres", href: "/settings", icon: "⚙️" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent/20 text-sidebar-foreground transition-smooth"
              onClick={() => setSidebarOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-4 right-4">
          <Button className="w-full rounded-full bg-destructive text-white hover:bg-destructive/90 transition-smooth">
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  )
}
