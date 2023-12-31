import Image from "next/image";
import axios from "axios";

import { toast } from "react-toastify";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  const completarOrden = async () => {
    try {
      await axios.post(`/api/ordenes/${id}`);
      toast.success(`Orden ${id} lista`);
    } catch (error) {
      toast.error("Hubo un Error");
    }
  };
  return (
    <div className="border rounded-md p-10 space-y-5 mt-4 shadow">
      <h3 className="text-2xl font-bold">Orden {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>
      <div className="">
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`Platillo ${platillo.nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {platillo.nombre}
              </h4>
              <p className="text-lg font-bold">
                {" "}
                Cantidad: {platillo.cantidad}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-xl md:text-4xl text-amber-500">
          Total a Pagar: ${total}
        </p>
        <button
          onClick={completarOrden}
          type="button"
          className="bg-amber-500  hover:bg-amber-600 cursor-pointer lg:w-auto py-2 rounded text-white font-bold p-4 mt-3"
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
};

export default Orden;
