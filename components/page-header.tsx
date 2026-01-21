"use client"

import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between p-4 sm:p-6">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {action && <div className="ml-4">{action}</div>}
      </div>
    </header>
  )
}
