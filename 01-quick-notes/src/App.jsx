import { useState } from "react"
import { contextoNotas } from "./context/ContextoNotas";
import HeadNavComponent from "./components/HeadNavComponent"
import MostrarNotas from "./components/MostrarNotas";
import BarraLateral from "./components/BarraLateral";
import PieDePagina from "./components/PieDePagina";


function App() {
  
  //Estado de las Notas
  const [notas, setNotas] = useState(() => {
    //Recuperar los datos alamcenados en el localstorage al cargar la aplicación
    const savedNotas = localStorage.getItem('notas');
    return savedNotas ? JSON.parse(savedNotas) : [];
  })

  //Almacenar los datos de las nota en el LocalStorage
  const guardarDatos = (nota) =>{
    //Se asegura que nota no sea null o undefined
    if(!nota) return;

    //Actualizar el estado de los datos
    const newNotes = [...notas, nota];
    
    setNotas(newNotes);
  
    //Guardar los datos en el LocalStorage
    localStorage.setItem('notas', JSON.stringify(newNotes));

    return newNotes;
  }
 
  return (
    <div className="layout">

      <contextoNotas.Provider value={{notas, setNotas, guardarDatos}}>
          {/*ENCABEZADO Y MENÚ DE NAVEGACIÓN*/}
            <HeadNavComponent/>

          {/*CONTENEDOR PRINCIPAL*/}
          <div className="contenedorMain">
            {/*COMPONENTE QUE MUESTRA LAS NOTA EN LA WEB*/}
              <MostrarNotas/>
            {/*BARRA LATERAL*/}
              <BarraLateral/>
          </div>

          {/*PIE DE PÁGINA*/}
          <PieDePagina/>
      </contextoNotas.Provider>
      
    </div>
  )
}

export default App
