import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <div className="grid place-items-center mt-10">
        <Image
          width={200}
          height={50}
          src={"/assets/img/logo.svg"}
          alt="Imagen Logotipo"
        />
        <nav className="mt-4">
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
