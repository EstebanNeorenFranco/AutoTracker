"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const publicacionesData = [
  {
    venta_id: 1,
    fecha: "17-03-2025",
    vendedor: {
      id: 678,
      nombre: "Juan Pérez",
      email: "juan.perez@email.com",
      telefono: "+54 9 11 1234-5678",
    },
    auto: {
      id: 555,
      marca: "Toyota",
      modelo: "Corolla",
      año: 2022,
      color: "Blanco",
      kilometraje: 25000,
      tipo_combustible: "Nafta",
      transmision: "Automática",
      precio_venta: 12000000,
      imagenes: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujWJBoM82Dt8Ckg85IpB9fiuxMP146JuTrg&s",
      ],
      puntuacion: 4.3,
      financiacion: {
        disponible: false,
        entidad: null,
        cuotas: null,
        tasa_interes: null,
      },
      plataforma: "Instagram",
    },
    forma_pago: {
      metodo: "Transferencia bancaria",
      cuotas: 1,
      moneda: "ARS",
    },
    estado_venta: "Completada",
  },
  {
    venta_id: 2,
    fecha: "17-03-2025",
    vendedor: {
      id: 345,
      nombre: "Carlos López",
      email: "carlos.lopez@email.com",
      telefono: "+54 9 11 5678-1234",
    },
    auto: {
      id: 789,
      marca: "Chevrolet",
      modelo: "Cruze",
      año: 2022,
      color: "Azul",
      kilometraje: 15000,
      tipo_combustible: "Nafta",
      transmision: "Manual",
      precio_venta: 10500000,
      imagenes: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVwEkWNSEbgHDNpcSmKJyIAKbIu-ZPfmz8A&s",
      ],
      puntuacion: 4.8,
      financiacion: {
        disponible: true,
        entidad: "Banco Galicia",
        cuotas: 24,
        tasa_interes: 42.5,
        monto_financiado: 7000000,
        monto_inicial: 3500000,
      },
      plataforma: "MercadoLibre",
    },
    forma_pago: {
      metodo: "Financiación bancaria",
      cuotas: 24,
      moneda: "ARS",
    },
    estado_venta: "Pendiente",
  },
];

const Publicaciones = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuto, setSelectedAuto] = useState(null);

  const openModal = (auto) => {
    setSelectedAuto(auto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAuto(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 bg-gray-50">
      {publicacionesData.map((venta, index) => (
        <motion.div
          key={venta.venta_id}
          className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white cursor-pointer"
          onClick={() => openModal(venta)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold mb-3 hover:text-blue-500 transition-colors">
            {venta.auto.marca} {venta.auto.modelo} ({venta.auto.año})
          </h3>
          <img
            src={venta.auto.imagenes[0] || "https://via.placeholder.com/150"}
            alt={`${venta.auto.marca} ${venta.auto.modelo}`}
            className="w-full h-56 object-cover rounded-lg shadow-md"
          />
          <div className="flex items-center justify-between text-lg font-semibold text-gray-600 mt-3">
            <span>{venta.auto.año}</span>
            <span>{venta.auto.puntuacion} ★</span>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {isModalOpen && selectedAuto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedAuto.auto.marca} {selectedAuto.auto.modelo} (
                {selectedAuto.auto.año})
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {selectedAuto.auto.imagenes.map((imagen, index) => (
                  <motion.img
                    key={index}
                    src={imagen}
                    alt={selectedAuto.auto.marca}
                    className="w-full h-40 object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                ))}
              </div>
              <p>
                <strong>Color:</strong> {selectedAuto.auto.color}
              </p>
              <p>
                <strong>Kilometraje:</strong> {selectedAuto.auto.kilometraje} km
              </p>
              <p>
                <strong>Precio de Venta:</strong> ${selectedAuto.auto.precio_venta}
              </p>
              {selectedAuto.auto.financiacion.disponible && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <h3 className="text-lg font-bold">Financiación Disponible</h3>
                  <p>
                    <strong>Entidad:</strong> {selectedAuto.auto.financiacion.entidad}
                  </p>
                  <p>
                    <strong>Cuotas:</strong> {selectedAuto.auto.financiacion.cuotas}
                  </p>
                </div>
              )}
              <button
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Publicaciones;
