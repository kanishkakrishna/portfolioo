import SectionHeading from './ui/SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects"
          description="Two systems built end-to-end — from data model to deployment — each solving a real latency, consistency, or trust problem."
        />

        <div className="mt-12 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
