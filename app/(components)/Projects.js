import Section from "./Section"
import SectionHeading from "./SectionHeading"
import Card from "./Card"

export default function Projects({ projects }) {
  return (
    <Section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>My Projects</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              actions={[
                { label: "Demo", href: project.demoLink },
                { label: "Code", href: project.codeLink },
              ]}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
