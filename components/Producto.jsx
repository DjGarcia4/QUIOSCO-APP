import { useEffect, useState } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio } = producto;
  const { handleSetProducto, handleChangeModal, pedido } = useQuiosco();
  const [edicion, setEdicion] = useState(false);

  const pedidoActual = pedido.find((p) => p.id === producto.id);

  useEffect(() => {
    const pedidoActual = pedido?.find((p) => p.id === producto.id) || {};
  }, [pedido, producto.id]);

  useEffect(() => {
    if (pedido.some((p) => p.id === producto.id)) {
      setEdicion(true);
    }
  }, [pedido, producto]);
  return (
    <div className="shadow border p-3 rounded-xl">
      <div className="relative text-center">
        {pedidoActual && (
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-8 w-6 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full p-2 h-9 w-12 bg-red-500 text-white ">
              {pedidoActual?.cantidad}
            </span>
          </span>
        )}

        <Image
          src={`/assets/img/${imagen}.jpg`}
          width={270}
          height={10}
          alt={`Imagen Producto ${nombre}`}
          className="mx-auto my-auto rounded-lg"
        />
      </div>

      <div className="p-2 md:p-5">
        <h3 className="md:text-2xl font-bold">{nombre}</h3>
        <p className="md:mt-5 font-black md:text-4xl text-amber-500">
          $ {precio}
        </p>
      </div>
      <button
        type="button"
        className="bg-amber-400 hover:bg-amber-600 text-white w-full mt-1 md:p-3 font-bold rounded-md"
        onClick={() => {
          handleChangeModal();
          handleSetProducto(producto);
        }}
      >
        {edicion ? "Actualizar" : "Agregar"}
      </button>
    </div>
  );
};

export default Producto;
