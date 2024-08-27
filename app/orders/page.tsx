'use client'
import Logo from "@/components/ui/Logo";
import useSWR from "swr";
import { OrderWithProducts } from "@/src/types";
import LastestOrderItem from "@/components/order/LastestOrderItem";

export default function OrdersPage() {

    const url = '/orders/api';
    const fetcher = () => fetch(url).then( res => res.json()).then( data => data);
    const { data, isLoading, error } = useSWR<OrderWithProducts[]>(url, fetcher, {
      refreshInterval: 60000,
      revalidateOnFocus: false
    })
  
    if ( isLoading) return <p>Cargando....</p>

   if (data) return (
    <>
        <h1 className="text-center font-black mt-20 text-6xl">Ordenes Listas</h1>

        <Logo/>

        {data.length ? (
            <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                {data.map( order => (
                    <LastestOrderItem key={order.id} order={order}/>
                ))}
            </div>
        ) : <p className="text-center my-10">No hay Ordenes listas</p>}

    </>
  )
}
