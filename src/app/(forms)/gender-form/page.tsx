"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type GenderForm } from "./schema";

export default function GenderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenderForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: GenderForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <select
        defaultValue=""
        {...register("gender")}
        className="border p-2 rounded dark:bg-slate-800"
      >
        <option value="" disabled>
          Select Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && (
        <p className="text-red-500 text-sm">{errors.gender.message}</p>
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
