import { z } from "zod";

export const schema = z.object({
  gender: z.enum(["male", "female", "other"], {
    message: "Campo obrigatório.",
  }),
});

export type GenderForm = z.infer<typeof schema>;
