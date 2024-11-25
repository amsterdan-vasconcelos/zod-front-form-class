import { z } from "zod";

export const schema = z.object({
  name: z
    .string({ message: "Tipo inválido." })
    .min(3, { message: "Deve conter pelo menos 3 caracteres." }),
});

export type BasicForm = z.infer<typeof schema>;
