import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual, setMenuOpen } = useQuiosco();
  const { nombre, icono, id } = categoria;
  return (
    <button
      className={`${
        categoriaActual?.id === id ? "bg-amber-400 " : ""
      }flex items-center gap-2 w-full border p-2 hover:bg-amber-400 my-3 rounded-md text-2xl font-bold hover:cursor-pointer`}
      onClick={() => {
        handleClickCategoria(id);
        setMenuOpen(false);
      }}
      type="button"
    >
      <Image
        width={60}
        height={60}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Image icono ${nombre}`}
        className="mr-5"
      />
      {nombre}
    </button>
  );
};

export default Categoria;
