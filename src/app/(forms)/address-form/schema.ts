import { z } from "zod";

export const schema = z.object({
  address: z.object({
    cep: z
      .string({ message: "Campo obrigatório." })
      .regex(/^\d{5}-?\d{3}$/, { message: "CEP inválido." }),
    street: z
      .string({ message: "Campo obrigatório." })
      .min(3, "Deve conter pelo menos 3 caracteres"),
    neighborhood: z
      .string({ message: "Campo obrigatório." })
      .min(3, "Deve conter pelo menos 3 caracteres"),
    city: z.string({ message: "Campo obrigatório." }),
    state: z.string({ message: "Campo obrigatório." }),
  }),
});

export type AddressForm = z.infer<typeof schema>;
