"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type TagsForm } from "./schema";

export default function TagsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TagsForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: TagsForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("tags.0")}
        placeholder="Tag 1"
        className="border p-2 rounded"
      />
      {errors.tags?.[0] && (
        <p className="text-red-500 text-sm">{errors.tags[0].message}</p>
      )}

      <input
        {...register("tags.1")}
        placeholder="Tag 2"
        className="border p-2 rounded"
      />
      {errors.tags?.[1] && (
        <p className="text-red-500 text-sm">{errors.tags[1].message}</p>
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
