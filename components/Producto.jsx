import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio } = producto;
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  return (
    <div className="border p-3 rounded-xl">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={300}
        height={10}
        alt={`Imagen Producto ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">$ {precio}</p>
      </div>
      <button
        type="button"
        className="bg-amber-400 hover:bg-amber-600 text-white w-full mt-1 p-3 font-bold rounded-md"
        onClick={() => {
          handleChangeModal();
          handleSetProducto(producto);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default Producto;
