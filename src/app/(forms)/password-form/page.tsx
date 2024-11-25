"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type PasswordForm } from "./schema";

export default function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PasswordForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <input
        {...register("confirm_password")}
        type="password"
        placeholder="Confirm Password"
        className="border p-2 rounded"
      />
      {errors.confirm_password && (
        <p className="text-red-500 text-sm">
          {errors.confirm_password.message}
        </p>
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
