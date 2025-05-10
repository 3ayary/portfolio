import { defineField, defineType } from "sanity";

export const AboutSchema = defineType({
  name: "AboutSchema",
  title: "About Schema",
  type: "document",
  fields: [
     defineField({
      name: "Image",
      type: "image",
    }),
     defineField({
      name: "bio",
      type: "string",
    }),
   defineField({
      name: "highlights",
      type: "array",
        of: [{ type: "string" }],
    }),

  ],
});
