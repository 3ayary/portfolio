import { defineField, defineType } from "sanity";

export const HeroSchema = defineType({
  name: "HeroSchema",
  title: "Hero Schema",
  type: "document",
  fields: [
     defineField({
      name: "name",
      type: "string",
    }),
     defineField({
      name: "title",
      type: "string",
    }),
   defineField({
      name: "description",
      type: "string",
    }),

  ],
});
