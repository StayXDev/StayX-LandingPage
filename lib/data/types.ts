export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
  content?: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  linkedin: string
  twitter: string
  order?: number
}

export interface ContactInfo {
  emails: {
    general: {
      address: string
      description: string
    }
    legal?: string
    security?: string
    privacy?: string
    help?: string
    support?: string
  }
  phone: {
    number: string
    formatted: string
    hours: string
  }
  liveChat: {
    label: string
    description: string
  }
  headquarters: {
    address: string[]
    city: string
    state: string
    zip: string
  }
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
    facebook?: string
    instagram?: string
  }
}

export interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  icon: "code" | "trending-up" | "users" | "briefcase" | "settings" | "bar-chart"
}

export interface AppData {
  blogPosts: BlogPost[]
  teamMembers: TeamMember[]
  contactInfo: ContactInfo
  jobPositions: JobPosition[]
}

