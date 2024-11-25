"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { schema, type AddressForm } from "./schema";

export default function AddressForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: zodResolver(schema),
  });

  const fetchAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setValue("address.street", logradouro);
      setValue("address.neighborhood", bairro);
      setValue("address.city", localidade);
      setValue("address.state", uf);
    } catch (error) {
      console.error("Failed to fetch address", error);
    }
  };

  const onCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value;
    if (/^\d{5}-?\d{3}$/.test(cep)) {
      fetchAddress(cep);
    }
  };

  const onSubmit = (data: AddressForm) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <input
        {...register("address.cep")}
        placeholder="CEP"
        className="border p-2 rounded"
        onChange={onCepChange}
      />
      {errors.address?.cep && (
        <p className="text-red-500 text-sm">{errors.address.cep.message}</p>
      )}

      <input
        {...register("address.street")}
        placeholder="Street"
        className="border p-2 rounded"
      />
      {errors.address?.street && (
        <p className="text-red-500 text-sm">{errors.address.street.message}</p>
      )}

      <input
        {...register("address.neighborhood")}
        placeholder="Neighborhood"
        className="border p-2 rounded"
      />
      {errors.address?.neighborhood && (
        <p className="text-red-500 text-sm">
          {errors.address.neighborhood.message}
        </p>
      )}

      <input
        {...register("address.city")}
        placeholder="City"
        readOnly
        className="border p-2 rounded read-only:opacity-70"
      />
      {errors.address?.city && (
        <p className="text-red-500 text-sm">{errors.address.city.message}</p>
      )}

      <input
        {...register("address.state")}
        placeholder="State"
        readOnly
        className="border p-2 rounded read-only:opacity-70"
      />
      {errors.address?.state && (
        <p className="text-red-500 text-sm">{errors.address.state.message}</p>
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
