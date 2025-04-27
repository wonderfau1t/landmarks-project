// Site-wide configuration
export const siteConfig = {
  name: "Исторические маршруты",
  description: "Платформа для создание и обмена интерактивными маршрутами для сохранения и популяризации культурного наследия",
  mainNav: [
    { label: "Главная", href: "/" },
    { label: "О проекте", href: "/about" },
    { label: "Команда", href: "/team" },
    { label: "Маршрут", href: "/route" },
    // { label: "Articles", href: "/articles" },
    // { label: "Links", href: "/links" },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  // Modern color palette
  colors: {
    primary: "#2A6470", // Teal blue
    secondary: "#F2C94C", // Warm yellow
    accent: "#E27D60", // Terracotta
    neutral: "#F5F5F5", // Light gray
    dark: "#1D3557", // Dark blue
  },
}
