import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual, setMenuOpen } = useQuiosco();
  const { nombre, icono, id } = categoria;
  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400 " : ""
      }flex items-center gap-2 w-full border p-2 hover:bg-amber-400 my-3 rounded-md`}
    >
      <Image
        width={60}
        height={60}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Image icono ${nombre}`}
        className="mr-5"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => {
          handleClickCategoria(id);
          setMenuOpen(false);
        }}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
