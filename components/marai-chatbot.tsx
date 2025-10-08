"use client"

import { useState } from "react"
import { X, Send, Sparkles } from "lucide-react"
import Image from "next/image"

interface Message {
  id: number
  text: string
  sender: "user" | "marai"
  timestamp: Date
}

const quickActions = [
  "📊 Como está o ROI das campanhas?",
  "💬 Qual o sentimento geral dos leads?",
  "🎯 Principais reclamações esta semana",
]

const mockResponses: Record<string, string> = {
  roi: "Ótima pergunta! 📈 Seu ROI atual está em **342%**, um aumento de 12% em relação ao período anterior. As campanhas de Facebook estão performando especialmente bem, com destaque para 'Lançamento Produto X' (+24%). Recomendo aumentar o investimento nessa campanha específica.",
  sentimento:
    "O sentimento geral está **excelente**! 😊 Temos 70.5% de mensagens positivas (624 interações), 22.4% neutras (198) e apenas 7.1% negativas (63). Seu score de sentimento é 89.4, indicando uma percepção muito positiva do público.",
  reclamações:
    "Analisando as interações negativas desta semana, os principais pontos são: ⚠️ Atrasos na entrega (38%), dúvidas sobre pagamento (24%), e questões sobre disponibilidade de produtos (18%). Sugiro priorizar a comunicação proativa sobre prazos de entrega.",
}

export function MaraiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou a MARAI, sua assistente de IA. Como posso ajudar você hoje?",
      sender: "marai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate typing
    setIsTyping(true)

    // Generate response based on keywords
    setTimeout(() => {
      let response = "Entendi sua pergunta! Estou processando as informações mais recentes para você..."

      if (text.toLowerCase().includes("roi") || text.toLowerCase().includes("campanha")) {
        response = mockResponses.roi
      } else if (text.toLowerCase().includes("sentimento") || text.toLowerCase().includes("lead")) {
        response = mockResponses.sentimento
      } else if (text.toLowerCase().includes("reclamações") || text.toLowerCase().includes("reclamacao")) {
        response = mockResponses.reclamações
      }

      const maraiMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "marai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, maraiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(action)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Abrir chat MARAI"
      >
        {/* Main button with neutral background */}
        <div
          className="relative w-20 h-20 rounded-full 
          bg-[#2A2A2A]
          border-2 border-[#333333]
          shadow-lg
          flex items-center justify-center
          group-hover:scale-110
          group-hover:shadow-[0_0_40px_rgba(242,5,135,0.5)]
          transition-all duration-300
          overflow-hidden"
        >
          {/* MARAI Mascot Character */}
          <Image
            src="/images/marai-mascot.png"
            alt="MARAI"
            width={64}
            height={64}
            className="object-contain scale-110"
          />
        </div>

        {/* Pulse ring only on hover */}
        <div
          className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] 
          opacity-0 group-hover:opacity-20 group-hover:animate-ping"
        />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale com MARAI
        </div>

        {/* Notification Badge */}
        <div
          className="absolute -top-1 -right-1 w-6 h-6 
          bg-[#F20587] rounded-full 
          border-2 border-[#0D0D0D]
          flex items-center justify-center
          text-xs font-bold text-white
          animate-pulse"
        >
          1
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A] bg-gradient-to-r from-[#F2B705]/10 via-[#F29F05]/10 to-[#F20587]/10">
        <div className="flex items-center gap-3">
          {/* MARAI Avatar */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] p-0.5">
            <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
              <Image src="/images/marai-avatar.png" alt="MARAI" width={32} height={32} className="object-contain" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">MARAI</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-[#A0A0A0]">Online</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 rounded-lg hover:bg-[#2A2A2A] transition-colors flex items-center justify-center text-[#A0A0A0] hover:text-white"
          aria-label="Fechar chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] text-white"
                  : "bg-[#0D0D0D] border border-[#2A2A2A] text-white"
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
              <p className="text-xs opacity-60 mt-1">
                {message.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#F20587] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-[#F29F05] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-[#F2B705] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions (show only if no messages yet) */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-[#666666] text-center mb-3">Ações rápidas:</p>
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="w-full text-left px-4 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-sm text-[#A0A0A0] hover:text-white hover:border-[#F20587]/50 transition-all duration-300"
              >
                {action}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#F20587] focus:ring-2 focus:ring-[#F20587]/20 transition-all duration-300"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] hover:shadow-[0_0_20px_rgba(242,5,135,0.4)] transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Enviar mensagem"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Powered by */}
        <div className="flex items-center justify-center gap-1 mt-3 text-xs text-[#666666]">
          <Sparkles className="w-3 h-3" />
          <span>Powered by A CHAVE IA</span>
        </div>
      </div>
    </div>
  )
}
