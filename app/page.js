"use client";
import Hero from "./(components)/Hero";
import About from "./(components)/About";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";
import Contact from "./(components)/Contact";
import { client } from "@/sanity/lib/client";
import { HeroSchema,AboutSchema,projectSchema, skillsSchema,contactSchema } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

export default function Home() {
  const [heroData, setHeroData] = useState([]);
  const [aboutData, setAboutData] = useState();
const [projectsData, setProjectsData] = useState();
const [skillsData, setSkillsData] = useState();
const [contactData, setContactData] = useState();

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

    const fetchSkillsData = async () => {
      const query = skillsSchema;
      const data = await client.fetch(query);
      setSkillsData(data);
    }
    const fetchContactData = async () => {
      const query = contactSchema;
      const data = await client.fetch(query);
      setContactData(data);
    };

    fetcHerohData();
    fetchAboutData();
    fetchProjectsData();
    fetchSkillsData();
    fetchContactData();
  }, []);
{contactData?.socials &&
  console.log("print"+contactData?.socials[0]?.name)
}

  return (
    <main className="min-h-screen">
      <Hero
        name={heroData?.name}
        title={heroData?.title}
        description={heroData?.description}
      />
{
  aboutData?.Image.asset._ref && 
      <About
      image={
          aboutData?.highlights &&
          urlFor(aboutData?.Image.asset._ref).url()
        }
        bio={aboutData?.bio}
        highlights={aboutData?.highlights}
      />
}

{projectsData?.projects &&
      <Projects
        projects={projectsData?.projects}
      />

}
      { skillsData?.categories &&
        <Skills
        categories={skillsData?.categories}
      /> }

{
      contactData?.socials&&
      <Contact
        email={contactData?.email}
        phone={contactData?.phone}
        location={contactData?.location}
        paragraph={contactData?.paragraph}
        socials={contactData?.socials}
      />}
    </main>
  );
}
