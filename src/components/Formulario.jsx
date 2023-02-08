import React, { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setFecha(paciente.fecha);
      setEmail(paciente.email);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  function onSubmit(e) {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setMessage("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);
    // Crear el nuevo paciente
    const objPaciente = {
      nombre,
      propietario,
      fecha,
      email,
      sintomas,
    };

    if (paciente.id) {
      // editando el registro
      objPaciente.id = paciente.id;
      const pacientesActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === objPaciente.id ? objPaciente : pacienteState
      );
      setPacientes(pacientesActualizado);
      setPaciente({});
    } else {
      // nuevo registro
      objPaciente.id = generateId();
      setPacientes([...pacientes, objPaciente]);
    }

    // Reiniciar el form
    setNombre("");
    setPropietario("");
    setFecha("");
    setEmail("");
    setSintomas("");
  }

  const generateId = () => {
    const id = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return id + fecha;
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguiminto Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Agrega pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5"
      >
        {error && <Error>{message}</Error>}
        {/* nombre */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la Mascota"
          />
        </div>

        {/* email propietario */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email del Propietario"
          />
        </div>

        {/* propietario */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre del Propietario"
          />
        </div>

        {/* fecha */}
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* sintomas */}
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
            hover:bg-indigo-700 cursor-pointer transition-all mb-2"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
