import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Button from "../../(components)/Button";
import Section from "../../(components)/Section";
import SectionHeading from "../../(components)/SectionHeading";
const query = groq`*[_type == "project" && slug.current == $slug][0]`;
export default async function Page({ params }) {

  const data = await client.fetch(query, { slug: params.slug });

  if (!data) {
    notFound();
  }

  const actions = [
    { label: "Demo", href: data.demoLink },
    { label: "Code", href: data.codeLink },
  ];

  console.log("Image URL: ", urlFor(data.image.asset._ref).url());
  return (
    <Section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>{data.title + " Web site"}</SectionHeading>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="w-full">
    <img
      src={urlFor(data.image.asset._ref).url()}
      alt={data.title}
      className="w-full h-[450px] object-cover rounded-xl"
    />
  </div>

  <div>
    <p className="text-lg text-gray-700 max-w-prose w-full mb-6">
      {data?.description}
    </p>

    <ul className="space-y-2">
      {data.tags.map((highlight, index) => (
        <li key={index} className="flex items-start">
          <span className="text-slate-500 mr-2">•</span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>

    <div className="flex gap-3 my-7">
      {actions.map((action, index) => (
        <Button
          key={index}
          href={action.href}
          variant={index === 0 ? "primary" : "outline"}
          size="sm"
        >
          {action.label}
        </Button>
      ))}
    </div>
  </div>
</div>

     
      </div>
    </Section>
  );
}
