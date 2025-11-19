import type { ContactInfo } from "./types"

export const contactInfo: ContactInfo = {
  emails: {
    general: {
      address: "hello@stayx.ai",
      description: "Our team typically responds within 24 hours",
    },
    legal: "legal@stayx.ai",
    security: "security@stayx.ai",
    privacy: "privacy@stayx.ai",
    help: "help@stayx.ai",
    support: "support@stayx.ai",
  },
  phone: {
    number: "+18005551234",
    formatted: "(800) 555-1234",
    hours: "Monday-Friday, 9am-6pm PST",
  },
  liveChat: {
    label: "Start Chat",
    description: "Chat with our team in real-time",
  },
  headquarters: {
    address: ["1001 State Street", "Suite 907"],
    city: "Erie",
    state: "PA",
    zip: "16501",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/stayx",
    twitter: "https://twitter.com/stayx",
    github: "https://github.com/stayx",
  },
}

