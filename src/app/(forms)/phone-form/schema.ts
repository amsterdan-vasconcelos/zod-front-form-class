import { z } from "zod";

export const schema = z.object({
  phone: z
    .string({ message: "Campo obrigatório." })
    .regex(/^\(\d\d\) [0-9]{4,5}-[0-9]{4}$/, { message: "Telefone inválido." }),
});

export type PhoneForm = z.infer<typeof schema>;
