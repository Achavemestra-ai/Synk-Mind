"use client"

import type { LucideIcon } from "lucide-react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { useEffect, useState } from "react"

interface KPICardProps {
  icon: LucideIcon
  value: string
  label: string
  description: string
  trend: number
  trendLabel?: string
  sparklineData?: number[]
}

export function KPICard({
  icon: Icon,
  value,
  label,
  description,
  trend,
  trendLabel = "vs. último período",
  sparklineData = [65, 72, 68, 80, 75, 85, 90],
}: KPICardProps) {
  const isPositive = trend > 0
  const [displayValue, setDisplayValue] = useState(value)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Only animate if value is a number
    const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
    if (!isNaN(numericValue)) {
      let start = 0
      const duration = 1500
      const increment = numericValue / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          // Format based on original value format
          if (value.includes("R$")) {
            setDisplayValue(`R$ ${start.toFixed(1)}K`)
          } else if (value.includes("%")) {
            setDisplayValue(`${start.toFixed(1)}%`)
          } else {
            setDisplayValue(Math.floor(start).toLocaleString())
          }
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [value])

  const generateSparklinePath = () => {
    const width = 100
    const height = 24
    const points = sparklineData.map((val, i) => {
      const x = (i / (sparklineData.length - 1)) * width
      const y = height - (val / 100) * height
      return `${x},${y}`
    })
    return `M ${points.join(" L ")}`
  }

  return (
    <div
      className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
      hover:border-[#F20587]/50 hover:shadow-[0_0_30px_rgba(242,5,135,0.1)] 
      hover:-translate-y-1
      transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#F2B705]/5 via-[#F29F05]/5 to-[#F20587]/5" />

      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-[#F2B705]/20 via-[#F29F05]/20 to-[#F20587]/20 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full ${isHovered ? "animate-shine" : ""}`}
          />
          <Icon className="w-6 h-6 text-[#F20587] relative z-10" />
        </div>

        <p className="text-4xl font-bold text-white mb-1">{displayValue}</p>

        {/* Label */}
        <p className="text-sm text-[#A0A0A0] mb-3">{label}</p>
        <p className="text-xs text-[#666666]">{description}</p>

        {/* Trend Indicator with pulse animation */}
        <div className="flex items-center gap-1 mt-4 text-sm">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500 group-hover:animate-pulse" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 group-hover:animate-pulse" />
          )}
          <span className={`font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? "+" : ""}
            {trend}%
          </span>
          <span className="text-[#666666]">{trendLabel}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
          <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`sparkline-gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F2B705" />
                <stop offset="50%" stopColor="#F29F05" />
                <stop offset="100%" stopColor="#F20587" />
              </linearGradient>
            </defs>
            <path
              d={generateSparklinePath()}
              fill="none"
              stroke={`url(#sparkline-gradient-${label})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />
          </svg>
          <p className="text-xs text-gray-500 mt-1 text-center">Últimos 7 dias</p>
        </div>
      </div>
    </div>
  )
}
