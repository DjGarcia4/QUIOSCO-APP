import { useEffect, useState } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((p) => p.id === producto.id)) {
      setEdicion(true);
      const productoEdicion = pedido.find((p) => p.id === producto.id);
      setCantidad(productoEdicion.cantidad);
    }
  }, [pedido, producto]);

  return (
    <div className=" md:flex gap-10">
      <button
        onClick={() => {
          handleChangeModal();
        }}
        className="flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="grid place-items-center md:w-1/3">
        <Image
          width={400}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
          className="rounded w-40 md:w-full"
        />
      </div>

      <div className="grid place-items-center md:block md:w-2/3">
        <h1 className=" text-xl md:text-3xl font-bold mt-5">
          {producto.nombre}
        </h1>
        <p className="font-black mt-2 md:mt-5 text-2xl md:text-5xl text-amber-500">
          ${producto.precio}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <p className="text-2xl md:text-3xl">{cantidad}</p>
          <button
            type="button"
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className=" bg-amber-400 hover:bg-amber-600 text-white p-2 md:p-3 font-bold rounded-md mt-5 text-base md:text-1xl"
          onClick={() => {
            handleAgregarPedido({ ...producto, cantidad });
          }}
        >
          {edicion ? "Actualizar Pedido" : "Añadir Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
