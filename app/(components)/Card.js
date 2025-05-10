import Image from "next/image"
import Button from "./Button"

export default function Card({ title, description, image, tags, actions }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover w-[300px] h-[300px]" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {actions.map((action, index) => (
            <Button key={index} href={action.href} variant={index === 0 ? "primary" : "outline"} size="sm">
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
