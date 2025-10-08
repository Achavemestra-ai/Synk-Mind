"use client"

import type React from "react"

import { useState } from "react"
import { Logo } from "@/components/logo"
import { useAuth } from "@/lib/auth-context"
import { ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#F2B705] to-[#F20587] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Large Gradient Circle Decoration */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#F2B705]/20 via-[#F29F05]/20 to-[#F20587]/20 rounded-full blur-3xl" />

      {/* Login Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md px-8">
          {/* Animated Logo with Orbiting Particles */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            {/* Orbiting Particles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#F2B705] to-[#F20587] animate-particle-orbit"
                style={{
                  animationDelay: `${i * 1.3}s`,
                  opacity: 0.6,
                }}
              />
            ))}

            {/* Main Logo with Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] blur-2xl opacity-30" />
            <Logo size={80} animated />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-2 gradient-text">Marketing Hub</h1>
          <p className="text-center text-[#A0A0A0] mb-8">Analytics & Insights</p>

          {/* Form Card */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F20587] focus:ring-2 focus:ring-[#F20587]/20 transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F20587] focus:ring-2 focus:ring-[#F20587]/20 transition-all duration-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] hover:shadow-[0_0_30px_rgba(242,5,135,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-white"
              >
                ENTRAR
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Forgot Password Link */}
              <div className="text-center mt-6">
                <a href="#" className="text-sm gradient-text hover:opacity-80 transition-opacity">
                  Esqueceu a senha?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
