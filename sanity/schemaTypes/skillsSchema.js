import { defineType, defineField } from "sanity";

export const skillsSchema = defineType({
  name: "skillsSchema",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Category Name",
              type: "string",
            },
            {
              name: "skills",
              title: "Skills",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
});
