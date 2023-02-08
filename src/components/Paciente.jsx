import React from "react";

function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-5 my-10 flex justify-between bg-white shadow-lg px-5 py-10 rounded-xl">
      <div>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal  normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal  normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal  normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal  normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Simtonas: {""}
          <span className="font-normal  normal-case">{sintomas}</span>
        </p>
      </div>
      <div>
        <button
          className="py-2 px-3 bg-indigo-500 
          hover:bg-indigo-600 rounded-md 
          text-white font-bold uppercase text-xs mr-2"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-3 bg-red-500 
          hover:bg-red-700 rounded-md 
          text-white font-bold uppercase text-xs mr-2"
          type="button"
          onClick={() => eliminarPaciente(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
