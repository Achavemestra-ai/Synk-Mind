"use client"

import { useState } from "react"
import { GraduationCap, Play, Clock, CheckCircle2, BookOpen, Video, Award } from "lucide-react"

export default function TreinamentoPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "marketing", label: "Marketing Digital" },
    { id: "vendas", label: "Vendas" },
    { id: "analytics", label: "Analytics" },
  ]

  const courses = [
    {
      id: 1,
      title: "Fundamentos de Marketing Digital",
      description: "Aprenda os conceitos básicos de marketing digital e como aplicá-los",
      category: "marketing",
      duration: "2h 30min",
      lessons: 12,
      progress: 75,
      thumbnail: "/digital-marketing-course.png",
      instructor: "Ana Silva",
      level: "Iniciante",
    },
    {
      id: 2,
      title: "Estratégias de Conversão de Leads",
      description: "Técnicas avançadas para converter leads em clientes",
      category: "vendas",
      duration: "3h 15min",
      lessons: 18,
      progress: 30,
      thumbnail: "/sales-conversion-strategy.jpg",
      instructor: "Carlos Mendes",
      level: "Intermediário",
    },
    {
      id: 3,
      title: "Google Analytics 4 - Completo",
      description: "Domine o GA4 e tome decisões baseadas em dados",
      category: "analytics",
      duration: "4h 00min",
      lessons: 24,
      progress: 0,
      thumbnail: "/google-analytics-dashboard.png",
      instructor: "Marina Costa",
      level: "Avançado",
    },
    {
      id: 4,
      title: "Campanhas de Alto ROI",
      description: "Como criar campanhas que geram resultados reais",
      category: "marketing",
      duration: "2h 45min",
      lessons: 15,
      progress: 100,
      thumbnail: "/roi-marketing-campaign.jpg",
      instructor: "Roberto Lima",
      level: "Intermediário",
    },
  ]

  const filteredCourses =
    selectedCategory === "todos" ? courses : courses.filter((course) => course.category === selectedCategory)

  const stats = [
    { label: "Cursos Concluídos", value: "3", icon: Award, color: "from-green-500 to-emerald-500" },
    { label: "Em Progresso", value: "2", icon: BookOpen, color: "from-[#F2B705] to-[#F29F05]" },
    { label: "Horas de Estudo", value: "24h", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { label: "Certificados", value: "3", icon: CheckCircle2, color: "from-[#F29F05] to-[#F20587]" },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F2B705] via-[#F29F05] to-[#F20587] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Treinamento</h1>
            <p className="text-gray-400">Desenvolva suas habilidades e conquiste certificações</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F20587]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] text-white shadow-lg shadow-[#F20587]/20"
                : "bg-[#1A1A1A] text-gray-400 hover:text-white hover:bg-[#2A2A2A] border border-[#2A2A2A]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#F20587]/30 transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] flex items-center justify-center shadow-lg shadow-[#F20587]/50">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              {/* Level Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#2A2A2A]">
                <span className="text-xs font-medium text-white">{course.level}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F2B705] group-hover:via-[#F29F05] group-hover:to-[#F20587] group-hover:bg-clip-text transition-all duration-300">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{course.description}</p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  <span>{course.lessons} aulas</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F2B705] to-[#F20587] flex items-center justify-center text-white text-xs font-bold">
                  {course.instructor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-sm text-gray-400">{course.instructor}</span>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Progresso</span>
                    <span className="text-xs font-medium text-white">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F2B705] via-[#F29F05] to-[#F20587] text-white font-medium hover:shadow-lg hover:shadow-[#F20587]/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                {course.progress === 0 ? (
                  <>
                    <Play className="w-4 h-4" />
                    Começar Curso
                  </>
                ) : course.progress === 100 ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Revisar Curso
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Continuar Assistindo
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
