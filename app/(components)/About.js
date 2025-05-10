import Image from "next/image"
import Section from "./Section"
import SectionHeading from "./SectionHeading"

export default function About({ image, bio, highlights }) {
  return (
    <Section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <img src={image}  className="object-cover rounded-xl w-[400px] h-[400px]" />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">{bio}</p>
            <ul className="space-y-2">
              {
              highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
