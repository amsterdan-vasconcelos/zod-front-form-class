"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type EmailForm } from "./schema";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: EmailForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
