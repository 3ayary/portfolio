import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "projectSchema",
  title: "Projects",
  type: "document", 
  fields: [
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "demoLink",
              title: "Demo Link",
              type: "string",
            },
            {
              name: "codeLink",
              title: "Code Link",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
