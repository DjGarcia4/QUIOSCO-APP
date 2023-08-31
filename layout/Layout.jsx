import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pasos from "../components/Pasos";
import { useState } from "react";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, pagina }) {
  const { modal, menuOpen, setMenuOpen } = useQuiosco();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title> Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside
          className={`${
            menuOpen ? "block" : "hidden"
          } fixed md:sticky bg-white md:w-5/12 xl:w-1/4 2xl:w-2/8 p-5 shadow z-10 top-0 h-full md:block`}
        >
          <Sidebar />
        </aside>
        <main
          className={`${
            menuOpen ? "md:w-8/12 xl:w-3/4 2xl:w-4/5" : "md:w-full"
          } h-screen md:overflow-y-scroll `}
        >
          <button
            className="md:hidden fixed top-0  z-20 p-2 bg-white w-full flex justify-between items-center shadow"
            onClick={toggleMenu}
          >
            <Image
              width={70}
              height={50}
              src={"/assets/img/logo.svg"}
              alt="Imagen Logotipo"
              className=" rounded-md p-2"
            />
            {menuOpen ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </button>
          <div className="p-10 mt-10">
            <div className="fixed bg-white bottom-0 left-0 px-5 py-2  z-10 shadow md:shadow-none w-full  md:top-0 md:h-min md:sticky">
              <Pasos />
            </div>
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
}
