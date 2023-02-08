import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  const eliminarPaciente = (id) => {
    const pacientesFiltrados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesFiltrados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          eliminarPaciente={eliminarPaciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
        />
      </div>
    </div>
  );
}

export default App;
