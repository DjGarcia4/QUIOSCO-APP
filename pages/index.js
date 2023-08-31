import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout.jsx";
import useQuiosco from "../hooks/useQuiosco.jsx";
import Producto from "../components/Producto.jsx";
import { useEffect } from "react";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="md:text-2xl my-10">
        Elige y personaliza tu pedido a continuacion:
      </p>
      <div className="grid gap-2 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 last-of-type:mb-20 md:last-of-type:mb-0">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
