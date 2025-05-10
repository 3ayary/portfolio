import Section from "./Section"
import SectionHeading from "./SectionHeading"

export default function Skills({ categories }) {
  return (
    <Section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>My Skills</SectionHeading>
        <div className="grid grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
