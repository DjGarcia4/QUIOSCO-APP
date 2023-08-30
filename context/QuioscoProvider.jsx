import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategotiaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

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

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategotiaActual(categoria[0]);
    router.push("/");
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((p) => p.id === producto.id)) {
      const pedidoActualizado = pedido.map((p) =>
        p.id === producto.id ? producto : p
      );
      setPedido(pedidoActualizado);
      toast.success(` ${producto.nombre} Actualizado`);
    } else {
      setPedido([...pedido, producto]);
      toast.success(
        `${producto.cantidad} ${producto.nombre} Agregado al pedido`
      );
    }
    setModal(!modal);
  };
  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((p) => p.id !== id);
    setPedido(pedidoActualizado);
  };
  const colocarOrden = async (e) => {
    e.preventDefault();
    alert("Enviando...");
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleSetProducto,
        handleChangeModal,
        modal,
        producto,
        handleAgregarPedido,
        pedido,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
