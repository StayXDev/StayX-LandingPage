import type { AppData } from "./types"
import { blogPosts } from "./blog-posts"
import { teamMembers } from "./team-members"
import { contactInfo } from "./contact-info"
import { jobPositions } from "./job-positions"

// Export all types
export type * from "./types"

// Export individual data arrays/objects
export { blogPosts } from "./blog-posts"
export { blogContent } from "./blog-content"
export { teamMembers } from "./team-members"
export { contactInfo } from "./contact-info"
export { jobPositions } from "./job-positions"

// Export combined data object for backward compatibility
export const data: AppData = {
  blogPosts,
  teamMembers,
  contactInfo,
  jobPositions,
}

