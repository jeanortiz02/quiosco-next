'use client'

import { useStore } from "@/src/utils/store";
import { Product } from "@prisma/client";

type AddProductButtomProps = {
  product : Product
}

export default function AddProductButtom({product} : AddProductButtomProps) {

  const addToOrder = useStore(state => state.addToOrder);

  return (
    <button
      onClick={() => addToOrder(product)}
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 w-full mt-5 p-3 uppercase font-bold cursor-pointer text-white"
    >
      Agregar
    </button>
  );
}
