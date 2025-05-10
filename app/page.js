"use client";
import Hero from "./(components)/Hero";
import About from "./(components)/About";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";
import Contact from "./(components)/Contact";
import { client } from "@/sanity/lib/client";
import { HeroSchema,AboutSchema,projectSchema } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

export default function Home() {
  const [heroData, setHeroData] = useState([]);
  const [aboutData, setAboutData] = useState();
const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetcHerohData = async () => {
      const query = HeroSchema;
      const data = await client.fetch(query);
      setHeroData(data);
    };

    const fetchAboutData = async () => {
      const query = AboutSchema;
      const data = await client.fetch(query);
      setAboutData(data);
    };

    const fetchProjectsData = async () => {
      const query = projectSchema;
      const data = await client.fetch(query);
      setProjectsData(data);
    }
    fetcHerohData();
    fetchAboutData();
    fetchProjectsData();
  }, []);

  console.log("print" +aboutData?.highlights);

  return (
    <main className="min-h-screen">
      <Hero
        name={heroData?.name}
        title={heroData?.title}
        description={heroData?.description}
      />
{
  aboutData?.Image.asset._ref && aboutData?.Image.asset._ref &&
      <About
      image={
          aboutData?.highlights &&
          urlFor(aboutData?.Image.asset._ref).url()
        }
        bio={aboutData?.bio}
        highlights={aboutData?.highlights}
      />
}
      {/* <Projects
        projects={projectsData?.projects}
      /> */}


      <Skills
        categories={[
          {
            name: "Frontend",
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
            ],
          },
          {
            name: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
          },
        ]}
      />
      <Contact
        email="john.doe@example.com"
        phone="+1 (555) 123-4567"
        location="San Francisco, CA"
        socials={[
          { name: "GitHub", url: "https://github.com" },
          { name: "LinkedIn", url: "https://linkedin.com" },
          { name: "Twitter", url: "https://twitter.com" },
        ]}
      />
    </main>
  );
}
