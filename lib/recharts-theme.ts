// Tooltip styling - dark background with white text
export const tooltipTheme = {
  contentStyle: {
    background: "rgba(0, 0, 0, 0.95)",
    color: "#FFFFFF",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: 12,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
  },
  labelStyle: {
    color: "#FFFFFF",
    fontWeight: 600,
    marginBottom: 8,
  },
  itemStyle: {
    color: "#FFFFFF",
  },
  cursor: { fill: "rgba(255, 255, 255, 0.05)" }, // Subtle vertical guide line
}

// Axis styling - light text with good contrast
export const axisTicks = {
  fill: "rgba(255, 255, 255, 0.9)",
  fontSize: 13,
  fontWeight: 500,
}

export const axisStroke = "rgba(255, 255, 255, 0.2)"
export const gridStroke = "rgba(255, 255, 255, 0.08)"

// Legend styling - white text with good opacity
export const legendStyle = {
  color: "#FFFFFF",
  opacity: 0.95,
  fontSize: 13,
  fontWeight: 500,
}

// Remove white hover overlay on bars/areas
export const activeBarStyle = {
  opacity: 1, // Keep full opacity, no white overlay
}

// Subtle outline for active dots on line charts
export const activeDotStyle = {
  stroke: "#FFFFFF",
  strokeWidth: 2,
  r: 6,
  fill: "currentColor", // Use the line color
}

// Brazilian locale number formatter
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("pt-BR").format(value)
}

// Brazilian locale currency formatter
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

// Custom tooltip formatter for better readability
export const customTooltipFormatter = (value: number, name: string, isCurrency = false): string => {
  const formattedValue = isCurrency ? formatCurrency(value) : formatNumber(value)
  return formattedValue
}
