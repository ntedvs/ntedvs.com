export interface Experience {
  role: string
  company: string
  location: string
  date: string
  summary: string
}

const currentYear = new Date().getFullYear()

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "DealerPulse",
    location: "Remote",
    date: "2025–2026",
    summary:
      "Built full-stack web and iOS features including an admin-configurable notification system and end-to-end push delivery.",
  },
  {
    role: "Software Engineer Intern",
    company: "U.S. Department of State",
    location: "Addis Ababa, Ethiopia",
    date: "2024",
    summary:
      "Built a QR inventory system for embassy operations and supported device networking and server infrastructure.",
  },
  {
    role: "Freelance Web Developer",
    company: "Briggs Davis",
    location: "Remote",
    date: `2023–${currentYear}`,
    summary:
      "Delivered websites and custom systems for dozens of businesses across the United States and Africa.",
  },
]
