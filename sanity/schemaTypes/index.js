import { AboutSchema } from "./aboutSchema";
import { contactSchema } from "./contactSchema";
import { HeroSchema } from "./HeroSchema";
import { projectSchema } from "./projectSchema";
import { skillsSchema } from "./skillsSchema";

export const schema = {
  types: [HeroSchema,AboutSchema,projectSchema,skillsSchema,contactSchema],
}
