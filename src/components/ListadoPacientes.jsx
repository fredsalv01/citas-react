import React from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {/** Listado de Pacientes */}
      {pacientes.length > 0 ? (
        pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            setPaciente={setPaciente}
            paciente={paciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))
      ) : (
        <>
          <p className="text-center text-2xl font-bold">No hay pacientes</p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
