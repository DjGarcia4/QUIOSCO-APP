import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategotiaActual] = useState({});

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios("/api/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);
  useEffect(() => {
    setCategotiaActual(categorias[0]);
  }, [categorias]);
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategotiaActual(categoria[0]);
  };
  return (
    <QuioscoContext.Provider
      value={{ categorias, categoriaActual, handleClickCategoria }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
