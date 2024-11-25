"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type AgeForm } from "./schema";

export default function AgeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgeForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: AgeForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        placeholder="Age"
        className="border p-2 rounded"
      />
      {errors.age && (
        <p className="text-red-500 text-sm">{errors.age.message}</p>
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
