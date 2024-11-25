"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type BasicForm } from "./schema";

function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: BasicForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="border p-2 rounded"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
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

export default BasicForm;
