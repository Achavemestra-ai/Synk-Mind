import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MaraiChatbot } from "@/components/marai-chatbot"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <main className="ml-64 min-h-screen p-8">{children}</main>
      <MaraiChatbot />
    </div>
  )
}
