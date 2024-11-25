"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type URLForm } from "./schema";

export default function URLForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<URLForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: URLForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("website")}
        placeholder="Website URL"
        className="border p-2 rounded"
      />
      {errors.website && (
        <p className="text-red-500 text-sm">{errors.website.message}</p>
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
