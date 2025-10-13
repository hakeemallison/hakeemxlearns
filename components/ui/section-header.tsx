import { cn } from "@/lib/utils"
import type { SectionHeaderProps } from "@/types/components"

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">{title}</h2>
      {subtitle && <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">{subtitle}</p>}
    </div>
  )
}
