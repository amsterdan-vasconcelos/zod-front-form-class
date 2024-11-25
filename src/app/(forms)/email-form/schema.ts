import { z } from "zod";

export const schema = z.object({
  email: z
    .string({ message: "Tipo inválido." })
    .email({ message: "E-mail inválido." }),
});

export type EmailForm = z.infer<typeof schema>;
