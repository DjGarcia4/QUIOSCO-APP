import Layout from "../layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";

export default function Resumen() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);
  return (
    <Layout pagina={`Total y Confirmar Pedido`}>
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
      <form action="" onSubmit={colocarOrden}>
        <div>
          <label
            for="nombre"
            className="block text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-200 mt-3 w-full rounded lg:w-1/3 p-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar: <span className="font-bold">${total}</span>
          </p>
        </div>
        <div>
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`${
              comprobarPedido()
                ? "bg-amber-200"
                : "bg-amber-500  hover:bg-amber-600 cursor-pointer"
            } w-full lg:w-auto py-2 rounded text-white font-bold p-4 mt-3 `}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
