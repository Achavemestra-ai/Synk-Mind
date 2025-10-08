"use client"

import { PageHeader } from "@/components/page-header"
import { KPICard } from "@/components/kpi-card"
import { DollarSign, TrendingUp, Users, Target, MousePointer, Activity } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  tooltipTheme,
  axisTicks,
  axisStroke,
  gridStroke,
  activeDotStyle,
  activeBarStyle,
  formatNumber,
} from "@/lib/recharts-theme"

// Mock data
const performanceData = [
  { month: "Jan", value: 4200 },
  { month: "Fev", value: 5100 },
  { month: "Mar", value: 4800 },
  { month: "Abr", value: 6200 },
  { month: "Mai", value: 7100 },
  { month: "Jun", value: 8400 },
]

const weekData = [
  { day: "Seg", conversions: 45 },
  { day: "Ter", conversions: 52 },
  { day: "Qua", conversions: 48 },
  { day: "Qui", conversions: 61 },
  { day: "Sex", conversions: 55 },
  { day: "Sáb", conversions: 38 },
  { day: "Dom", conversions: 42 },
]

const channelData = [
  { name: "Facebook", value: 42, color: "#3B82F6" },
  { name: "Google", value: 35, color: "#9333EA" },
  { name: "Instagram", value: 23, color: "#EC4899" },
]

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="Visão geral do desempenho das suas campanhas" />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard icon={DollarSign} value="342%" label="ROI Total" description="Retorno sobre investimento" trend={12} />
        <KPICard icon={TrendingUp} value="R$ 24.5K" label="Gasto em Mídia" description="Investimento total" trend={8} />
        <KPICard icon={Users} value="1,247" label="Leads Gerados" description="Novos contatos" trend={23} />
        <KPICard icon={Target} value="18.2%" label="Taxa de Conversão" description="Leads para clientes" trend={5} />
        <KPICard icon={MousePointer} value="R$ 1.82" label="CPC Médio" description="Custo por clique" trend={-3} />
        <KPICard icon={Activity} value="89.4%" label="Engajamento" description="Interação com conteúdo" trend={15} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Line Chart */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">Desempenho de Campanhas</h3>
          <p className="text-sm text-[#A0A0A0] mb-6">Evolução mensal de resultados</p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F20587" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#F20587" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F2B705" />
                  <stop offset="50%" stopColor="#F29F05" />
                  <stop offset="100%" stopColor="#F20587" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="month" stroke={axisStroke} tick={axisTicks} />
              <YAxis stroke={axisStroke} tick={axisTicks} tickFormatter={formatNumber} />
              <Tooltip {...tooltipTheme} formatter={(value: number) => formatNumber(value)} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                fill="url(#chartGradient)"
                activeDot={activeDotStyle}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">Conversões por Dia</h3>
          <p className="text-sm text-[#A0A0A0] mb-6">Última semana</p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekData}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F20587" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="day" stroke={axisStroke} tick={axisTicks} />
              <YAxis stroke={axisStroke} tick={axisTicks} tickFormatter={formatNumber} />
              <Tooltip {...tooltipTheme} formatter={(value: number) => formatNumber(value)} />
              <Bar dataKey="conversions" fill="url(#barGradient)" radius={[8, 8, 0, 0]} activeBar={activeBarStyle} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">Distribuição por Canal</h3>
          <p className="text-sm text-[#A0A0A0] mb-6">Percentual de investimento</p>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
                style={{ fontSize: 13, fontWeight: 600, fill: "#FFFFFF" }}
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip {...tooltipTheme} formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="mt-4 space-y-2">
            {channelData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-[#A0A0A0]">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics List */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">Principais Métricas</h3>
          <p className="text-sm text-[#A0A0A0] mb-6">Indicadores chave de desempenho</p>

          <div className="space-y-4">
            {/* Metric Item */}
            <div className="flex items-center justify-between p-4 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-[#A0A0A0]">CTR Médio</span>
              </div>
              <span className="text-2xl font-bold gradient-text">4.82%</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-sm text-[#A0A0A0]">Custo por Lead</span>
              </div>
              <span className="text-2xl font-bold gradient-text">R$ 19.64</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#A0A0A0]">Taxa de Fechamento</span>
              </div>
              <span className="text-2xl font-bold gradient-text">28.4%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
