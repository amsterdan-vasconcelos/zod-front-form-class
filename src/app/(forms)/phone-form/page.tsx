"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type PhoneForm } from "./schema";

export default function PhoneForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PhoneForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="border p-2 rounded"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
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
