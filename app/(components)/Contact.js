"use client"

import { useState } from "react"
import Section from "./Section"
import SectionHeading from "./SectionHeading"
import Button from "./Button"

export default function Contact({ email, phone, location, socials,paragraph }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log(formData)
    alert("Message sent!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <Section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              {paragraph}
            </p>
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span> {email}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Phone:</span> {phone}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Location:</span> {location}
              </p>
            </div>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {social.name}
                </a>
              ))}

            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  )
}
