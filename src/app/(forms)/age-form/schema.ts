import { z } from "zod";

export const schema = z.object({
  age: z.number({ message: "Campo obrigatório." }),
});

export type AgeForm = z.infer<typeof schema>;
