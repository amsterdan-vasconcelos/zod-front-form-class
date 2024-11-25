import { z } from "zod";

export const schema = z.object({
  tags: z
    .array(
      z
        .string({ message: "Campo obrigatório." })
        .refine((tag) => tag.length >= 3 && tag.length <= 10, {
          message: "Deve conter entre 3 à 10 caracteres",
        })
    )
    .min(1, { message: "Deve enviar pelo menos uma tag." }),
});

export type TagsForm = z.infer<typeof schema>;
