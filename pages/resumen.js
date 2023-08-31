import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";
import { useEffect } from "react";

export default function Resumen() {
  const { pedido } = useQuiosco();

  return (
    <Layout pagina={`Resumen`}>
      <h1 className="text-2xl md:text-4xl font-black">Resumen</h1>
      <p className="md:text-2xl md:my-10">Revisa tu Pedido:</p>
      {pedido.length === 0 ? (
        <p className="md:text-2xl text-center">No hay elementos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
