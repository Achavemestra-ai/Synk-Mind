"use client"
import {
  MessageSquare,
  Instagram,
  FacebookIcon,
  Clock,
  Search,
  BarChart3,
  Smile,
  Meh,
  Frown,
  TrendingUp,
} from "lucide-react"

// Mock data for interactions by channel
const channelInteractions = [
  { channel: "WhatsApp", count: 342 },
  { channel: "Instagram", count: 289 },
  { channel: "Facebook", count: 156 },
  { channel: "Email", count: 98 },
]

// Mock sentiment data
const sentimentData = {
  positive: { count: 624, percentage: 70.5 },
  neutral: { count: 198, percentage: 22.4 },
  negative: { count: 63, percentage: 7.1 },
}

// Recent interactions
const recentInteractions = [
  {
    username: "@maria_silva",
    time: "há 5 min",
    message: "Adorei o atendimento! Muito rápido e eficiente...",
    sentiment: "positive",
  },
  {
    username: "@joao_santos",
    time: "há 12 min",
    message: "Quando vai chegar meu pedido? Já faz 3 dias...",
    sentiment: "neutral",
  },
  {
    username: "@ana_costa",
    time: "há 18 min",
    message: "Produto excelente! Recomendo muito, superou expectativas...",
    sentiment: "positive",
  },
  {
    username: "@pedro_lima",
    time: "há 25 min",
    message: "Tive problemas com o pagamento, podem ajudar?",
    sentiment: "neutral",
  },
  {
    username: "@julia_mendes",
    time: "há 32 min",
    message: "Muito satisfeita com a compra! Voltarei a comprar...",
    sentiment: "positive",
  },
]

function getInitials(username: string): string {
  const name = username.replace("@", "")
  const parts = name.split("_")
  return parts
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function getAvatarColor(index: number): string {
  const colors = [
    "from-blue-500 to-purple-600",
    "from-orange-500 to-red-600",
    "from-green-500 to-teal-600",
    "from-pink-500 to-rose-600",
    "from-indigo-500 to-blue-600",
  ]
  return colors[index % colors.length]
}

export default function LeadsPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#F2B705]/10 via-[#F29F05]/10 to-[#F20587]/10 border border-[#2A2A2A] rounded-2xl p-8 mb-8">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#F2B705] to-[#F20587] rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">Leads & Interações</h1>
          <p className="text-gray-400 text-lg">Análise de engajamento e sentimento do público em tempo real</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar por @ ou ID do lead..."
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl pl-12 pr-4 py-4 text-white text-base focus:outline-none focus:border-[#F20587] focus:ring-2 focus:ring-[#F20587]/20 transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="relative group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F20587]/50 hover:shadow-[0_0_40px_rgba(242,5,135,0.15)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2B705]/5 to-[#F20587]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F2B705]/20 to-[#F20587]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-7 h-7 text-[#F29F05]" />
            </div>
            <p className="text-5xl font-bold text-white mb-2">885</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Total de Mensagens</p>
            <p className="text-xs text-gray-500">Todas as interações</p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#2A2A2A]">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">+18%</span>
              <span className="text-xs text-gray-500">vs. período anterior</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F20587]/50 hover:shadow-[0_0_40px_rgba(242,5,135,0.15)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2B705]/5 to-[#F20587]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-7 h-7 text-purple-400" />
            </div>
            <p className="text-5xl font-bold text-white mb-2">289</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Instagram DMs</p>
            <p className="text-xs text-gray-500">Mensagens diretas</p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#2A2A2A]">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">+25%</span>
              <span className="text-xs text-gray-500">vs. período anterior</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F20587]/50 hover:shadow-[0_0_40px_rgba(242,5,135,0.15)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2B705]/5 to-[#F20587]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FacebookIcon className="w-7 h-7 text-blue-400" />
            </div>
            <p className="text-5xl font-bold text-white mb-2">156</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Facebook Msgs</p>
            <p className="text-xs text-gray-500">Messenger</p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#2A2A2A]">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">+12%</span>
              <span className="text-xs text-gray-500">vs. período anterior</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F20587]/50 hover:shadow-[0_0_40px_rgba(242,5,135,0.15)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2B705]/5 to-[#F20587]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-green-400" />
            </div>
            <p className="text-5xl font-bold text-white mb-2">2.4h</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Tempo Médio</p>
            <p className="text-xs text-gray-500">Resposta</p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#2A2A2A]">
              <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
              <span className="text-sm font-semibold text-green-500">-8%</span>
              <span className="text-xs text-gray-500">mais rápido</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Horizontal Bar Chart - Channels */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F2B705]/20 to-[#F29F05]/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#F29F05]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Interações por Canal</h3>
              <p className="text-sm text-gray-400">Distribuição de mensagens</p>
            </div>
          </div>

          {/* Custom animated bars */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">WhatsApp</span>
                <span className="text-sm font-bold text-white">360</span>
              </div>
              <div className="h-3 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] rounded-full transition-all duration-1000"
                  style={{ width: "85%" }}
                />
              </div>
            </div>

            {/* Instagram */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Instagram</span>
                <span className="text-sm font-bold text-white">289</span>
              </div>
              <div className="h-3 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] rounded-full transition-all duration-1000"
                  style={{ width: "68%" }}
                />
              </div>
            </div>

            {/* Facebook */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Facebook</span>
                <span className="text-sm font-bold text-white">156</span>
              </div>
              <div className="h-3 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] rounded-full transition-all duration-1000"
                  style={{ width: "42%" }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Email</span>
                <span className="text-sm font-bold text-white">80</span>
              </div>
              <div className="h-3 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] rounded-full transition-all duration-1000"
                  style={{ width: "25%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment Analysis - More Visual */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F20587]/20 to-[#9333EA]/20 flex items-center justify-center">
              <Smile className="w-5 h-5 text-[#F20587]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Análise de Sentimento</h3>
              <p className="text-sm text-gray-400">Classificação automática</p>
            </div>
          </div>

          {/* Sentiment bars with neutral emojis */}
          <div className="space-y-5">
            {/* Positive */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-green-500 bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Smile className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Positivo</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-green-400">624</p>
                  <p className="text-xs text-gray-500">70.5% do total</p>
                </div>
              </div>
              <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-1000"
                  style={{ width: "70.5%" }}
                />
              </div>
            </div>

            {/* Neutral */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Meh className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Neutro</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-yellow-400">198</p>
                  <p className="text-xs text-gray-500">22.4% do total</p>
                </div>
              </div>
              <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                  style={{ width: "22.4%" }}
                />
              </div>
            </div>

            {/* Negative */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Frown className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Negativo</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-400">63</p>
                  <p className="text-xs text-gray-500">7.1% do total</p>
                </div>
              </div>
              <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full transition-all duration-1000"
                  style={{ width: "7.1%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-12 text-center mb-8">
        {/* Animated gradient orbs as overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F2B705]/20 to-[#F20587]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#F29F05]/20 to-[#9333EA]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Score Geral de Sentimento</p>

          {/* Big outlined icon circle with animation */}
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-32 h-32 rounded-full border-4 border-green-500/40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                <Smile className="w-20 h-20 text-green-500" />
              </div>
            </div>

            <p className="text-9xl font-black bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] bg-clip-text text-transparent">
              89.4
            </p>
          </div>

          <p className="text-xl font-semibold text-green-400">Excelente percepção do público</p>
        </div>
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Interações Recentes</h3>
            <p className="text-sm text-gray-400">Últimas mensagens recebidas</p>
          </div>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] hover:shadow-[0_0_20px_rgba(242,5,135,0.4)] transition-all duration-300">
            Ver todas
          </button>
        </div>

        <div className="space-y-3">
          {recentInteractions.map((interaction, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#F20587]/30 hover:bg-[#1A1A1A] transition-all duration-300"
            >
              {/* Avatar with initials - like Google */}
              <div
                className={`w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-bold text-base`}
              >
                {getInitials(interaction.username)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-white">{interaction.username}</p>
                  <span className="text-xs text-gray-500">{interaction.time}</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{interaction.message}</p>
              </div>

              <div className="flex-shrink-0">
                {interaction.sentiment === "positive" ? (
                  <div className="w-10 h-10 rounded-full border-2 border-green-500 bg-green-500/10 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-green-500" />
                  </div>
                ) : interaction.sentiment === "neutral" ? (
                  <div className="w-10 h-10 rounded-full border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center">
                    <Meh className="w-5 h-5 text-yellow-500" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-red-500/10 flex items-center justify-center">
                    <Frown className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
