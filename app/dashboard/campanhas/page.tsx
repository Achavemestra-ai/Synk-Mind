"use client"

import { PageHeader } from "@/components/page-header"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Facebook, Chrome, DollarSign, TrendingUp, Zap, Target } from "lucide-react"

// Mock data for platform comparison
const platformData = [
  { date: "01/01", facebook: 280, google: 320 },
  { date: "05/01", facebook: 310, google: 290 },
  { date: "10/01", facebook: 340, google: 350 },
  { date: "15/01", facebook: 380, google: 330 },
  { date: "20/01", facebook: 420, google: 380 },
  { date: "25/01", facebook: 390, google: 410 },
  { date: "30/01", facebook: 450, google: 440 },
]

// Mock campaigns data
const campaigns = [
  {
    name: "Campanha Verão 2025",
    platform: "facebook",
    status: "Ativa",
    spent: "R$ 8.240",
    ctr: "5.2%",
    conversions: 245,
    variation: 12,
  },
  {
    name: "Remarketing Q2",
    platform: "google",
    status: "Ativa",
    spent: "R$ 6.180",
    ctr: "3.8%",
    conversions: 189,
    variation: 8,
  },
  {
    name: "Lançamento Produto X",
    platform: "facebook",
    status: "Ativa",
    spent: "R$ 5.920",
    ctr: "6.1%",
    conversions: 298,
    variation: 24,
  },
  {
    name: "Brand Awareness",
    platform: "google",
    status: "Pausada",
    spent: "R$ 3.460",
    ctr: "2.9%",
    conversions: 124,
    variation: -5,
  },
]

export default function CampanhasPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen -m-8 p-8">
      <PageHeader title="Campanhas" description="Análise detalhada de todas as campanhas ativas" updatedMinutes={3} />

      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Scoreboard 1 - Total Investment */}
        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
          hover:border-[#F20587]/50 hover:shadow-[0_0_30px_rgba(242,5,135,0.1)] 
          hover:-translate-y-1
          transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F2B705]/20 to-[#F29F05]/20 flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <DollarSign className="w-6 h-6 text-[#F29F05] relative z-10" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500 group-hover:animate-pulse" />
          </div>
          <p className="text-4xl font-bold text-white mb-1">R$ 23.8K</p>
          <p className="text-sm text-gray-400 mb-2">Investimento Total</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-green-500 font-semibold">+11%</span>
            <span className="text-gray-500">este mês</span>
          </div>
          <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
            <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkline1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F2B705" />
                  <stop offset="100%" stopColor="#F29F05" />
                </linearGradient>
              </defs>
              <path
                d="M 0,15 L 16,12 L 33,14 L 50,8 L 66,10 L 83,5 L 100,3"
                fill="none"
                stroke="url(#sparkline1)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Scoreboard 2 - Active Campaigns */}
        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
          hover:border-[#F20587]/50 hover:shadow-[0_0_30px_rgba(242,5,135,0.1)] 
          hover:-translate-y-1
          transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#9333EA]/20 flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <Zap className="w-6 h-6 text-[#3B82F6] relative z-10" />
            </div>
            <Target className="w-5 h-5 text-[#F29F05] group-hover:animate-pulse" />
          </div>
          <p className="text-4xl font-bold text-white mb-1">3</p>
          <p className="text-sm text-gray-400 mb-2">Campanhas Ativas</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#F29F05] font-semibold">1 pausada</span>
          </div>
          <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
            <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkline2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <path
                d="M 0,10 L 16,10 L 33,8 L 50,8 L 66,6 L 83,6 L 100,4"
                fill="none"
                stroke="url(#sparkline2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Scoreboard 3 - Best Performance */}
        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
          hover:border-[#F20587]/50 hover:shadow-[0_0_30px_rgba(242,5,135,0.1)] 
          hover:-translate-y-1
          transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <TrendingUp className="w-6 h-6 text-green-500 relative z-10" />
            </div>
            <Facebook className="w-5 h-5 text-blue-500 group-hover:animate-pulse" />
          </div>
          <p className="text-4xl font-bold text-white mb-1">6.1%</p>
          <p className="text-sm text-gray-400 mb-2">Melhor CTR</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-400">Lançamento Produto X</span>
          </div>
          <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
            <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkline3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <path
                d="M 0,18 L 16,16 L 33,14 L 50,10 L 66,8 L 83,5 L 100,2"
                fill="none"
                stroke="url(#sparkline3)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Scoreboard 4 - Total Conversions */}
        <div
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
          hover:border-[#F20587]/50 hover:shadow-[0_0_30px_rgba(242,5,135,0.1)] 
          hover:-translate-y-1
          transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F20587]/20 to-[#9333EA]/20 flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <Target className="w-6 h-6 text-[#F20587] relative z-10" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500 group-hover:animate-pulse" />
          </div>
          <p className="text-4xl font-bold text-white mb-1">856</p>
          <p className="text-sm text-gray-400 mb-2">Total Conversões</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-green-500 font-semibold">+15%</span>
            <span className="text-gray-500">este mês</span>
          </div>
          <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
            <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkline4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F20587" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <path
                d="M 0,16 L 16,14 L 33,12 L 50,9 L 66,7 L 83,4 L 100,2"
                fill="none"
                stroke="url(#sparkline4)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Platform Comparison Chart */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-white mb-2">Comparativo de Plataformas</h3>
        <p className="text-sm text-[#A0A0A0] mb-6">Gastos diários - Facebook Ads vs Google Ads (últimos 30 dias)</p>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="facebook"
              stroke="#3B82F6"
              strokeWidth={3}
              name="Facebook Ads"
              dot={{ fill: "#3B82F6", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="google"
              stroke="#9333EA"
              strokeWidth={3}
              name="Google Ads"
              dot={{ fill: "#9333EA", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Campaigns Table */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white">Todas as Campanhas</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0D0D0D]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Campanha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Plataforma</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Gasto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">CTR</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Conversões</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#A0A0A0]">Variação</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-t border-[#2A2A2A] hover:bg-[#252525] transition-colors">
                  <td className="px-6 py-4 text-white font-medium">{campaign.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {campaign.platform === "facebook" ? (
                        <Facebook className="w-4 h-4 text-blue-500" />
                      ) : (
                        <Chrome className="w-4 h-4 text-purple-500" />
                      )}
                      <span className="text-[#A0A0A0] text-sm capitalize">{campaign.platform}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        campaign.status === "Ativa"
                          ? "bg-green-500/10 text-green-500 border border-green-500/20"
                          : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{campaign.spent}</td>
                  <td className="px-6 py-4 text-[#A0A0A0]">{campaign.ctr}</td>
                  <td className="px-6 py-4 text-white font-medium">{campaign.conversions}</td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${campaign.variation > 0 ? "text-green-500" : "text-red-500"}`}>
                      {campaign.variation > 0 ? "+" : ""}
                      {campaign.variation}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
