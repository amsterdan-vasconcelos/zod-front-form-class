import { z } from "zod";

export const schema = z.object({
  agree_to_terms: z
    .boolean()
    .refine((value) => value, { message: "Aceitar os termos de uso." }),
});

export type AgreementForm = z.infer<typeof schema>;
