"use client"

import { Button } from "@/components/ui/button"
import { Network, Video, FileText, GitBranch, Database, Cloud } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { SectionHeader } from "@/components/ui/section-header"

const features = [
  {
    icon: Network,
    title: "Systems Diagrams",
    description:
      "Comprehensive architecture diagrams breaking down complex distributed systems into understandable components.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description:
      "In-depth video walkthroughs explaining system design patterns, trade-offs, and real-world implementations.",
  },
  {
    icon: FileText,
    title: "Technical Blogs",
    description:
      "Detailed articles covering solutions architecture, design patterns, and best practices from the field.",
  },
  {
    icon: GitBranch,
    title: "Design Patterns",
    description: "Learn proven architectural patterns for scalability, reliability, and maintainability.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Deep dives into database design, data modeling, and storage solutions for modern applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Explore cloud-native architectures, microservices, and distributed system design strategies.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Learn Through Multiple Formats"
          subtitle="Systems design content tailored for solutions architects and engineers"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Explore button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/5 border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/20"
          >
            Browse All Content
          </Button>
        </div>
      </div>
    </section>
  )
}
