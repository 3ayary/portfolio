import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Projects({ projects }) {
  return (
    <Section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>My Projects</SectionHeading>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
          <Link href={`/${project.slug.current}`} key={project._id}>
           <Card
              key={project._id}
              title={project.title}
              description={project.description}
              image={
                project?.image?.asset? urlFor(project.image.asset._ref).url() : ""
              }
              tags={project.tags} 
              actions={[
                { label: "Demo", href: project.demoLink },
                { label: "Code", href: project.codeLink },
              ]}
            />
          </Link>
         
          ))}
        </div>
      </div>
    </Section>
  );
}
