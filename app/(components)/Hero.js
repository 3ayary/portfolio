import Button from "./Button"
import Section from "./Section"


export default function Hero({ name, title, description }) {
  return (
    <Section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
     
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{name}</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
