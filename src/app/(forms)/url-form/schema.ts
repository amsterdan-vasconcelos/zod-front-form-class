import { z } from "zod";

export const schema = z.object({
  website: z
    .string({ message: "Campo obrigatório." })
    .url({ message: "URL inválida." }),
});

export type URLForm = z.infer<typeof schema>;
