import { Clock } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  updatedMinutes?: number
}

export function PageHeader({ title, description, updatedMinutes = 5 }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-[#A0A0A0]">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
          <Clock className="w-4 h-4" />
          Atualizado há {updatedMinutes} minutos
        </div>
      </div>
    </header>
  )
}
