"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, TrendingUp, Users, GraduationCap, HelpCircle } from "lucide-react"
import Image from "next/image"

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: BarChart3,
  },
  {
    href: "/dashboard/campanhas",
    label: "Campanhas",
    icon: TrendingUp,
  },
  {
    href: "/dashboard/leads",
    label: "Leads",
    icon: Users,
  },
  {
    href: "/dashboard/treinamento",
    label: "Treinamento",
    icon: GraduationCap,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0D0D0D] border-r border-[#2A2A2A] flex flex-col z-40">
      {/* LOGO SECTION - CRITICAL */}
      <div className="p-6 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-4">
          {/* A CHAVE Logo - Use logo_render.png */}
          <div className="relative w-12 h-12 flex-shrink-0">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] blur-lg opacity-30 rounded-full" />

            {/* A CHAVE Logo PNG */}
            <Image
              src="/images/logo-achave.png"
              alt="A CHAVE Logo"
              width={48}
              height={48}
              className="relative w-12 h-12 object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg font-bold bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] bg-clip-text text-transparent">
              A CHAVE
            </p>
            <p className="text-xs text-gray-500 font-medium">Analytics & Insights</p>
          </div>
        </div>
      </div>

      {/* NAVIGATION - MORE SPACIOUS */}
      <nav className="flex-1 p-5 space-y-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#F20587]/10 to-transparent border-l-4 border-[#F20587] text-white font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              <Icon className="w-6 h-6 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* HELP BUTTON - BOTTOM */}
      <div className="p-5 border-t border-[#2A2A2A]">
        <button className="w-full py-4 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] hover:shadow-[0_0_30px_rgba(242,5,135,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
          <HelpCircle className="w-5 h-5" />
          <div className="text-left">
            <p>Precisa de ajuda?</p>
            <p className="text-xs opacity-80">Fale com o suporte</p>
          </div>
        </button>
      </div>
    </aside>
  )
}
