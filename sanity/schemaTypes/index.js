import { AboutSchema } from "./aboutSchema";
import { HeroSchema } from "./HeroSchema";
import { projectSchema } from "./projectSchema";

export const schema = {
  types: [HeroSchema,AboutSchema,projectSchema],
}
