import { z } from "zod";

export const schema = z
  .object({
    password: z
      .string({ message: "Tipo inválido." })
      .min(6, { message: "Deve conter pelo menos 6 dígitos." }),
    confirm_password: z.string(),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas devem coincidir.",
    path: ["confirm_password"],
  });

export type PasswordForm = z.infer<typeof schema>;
