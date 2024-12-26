import React, { useState } from 'react'
import { useContext } from 'react';
import { contextoNotas } from '../context/ContextoNotas'

const BarraLateral = () => {

  const {notas, setNotas} = useContext(contextoNotas)

  const [busqueda, setBusqueda] = useState('');

  const [noEncontrado, setNoEncotrado] = useState(false);

  const busquedaNota = e =>{

    e.preventDefault();

    setBusqueda(e.target.value);

    //Buscar Elmento en Array notas

    let buscarNotas = notas.filter(nota =>{
      return nota.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    });

    //Filtrar para buscar coicindecias
    if(busqueda.length <= 1 || buscarNotas <= 0){
      buscarNotas = JSON.parse(localStorage.getItem("notas"))
      setNoEncotrado(true);
    }
    else(
          setNoEncotrado(false)
        )
    
    //Actualizar estdo del listado principal con lo que he logrado filtrar
    setNotas(buscarNotas);
   
  }

  return (
    <div className='BarraLateral'>
      <h1>Buscador</h1>

      <h3 className="title">Buscador: {busqueda}</h3>

      {(noEncontrado === true && busqueda.length > 1) &&
                  <span className='no-encontrado'>
                    No se ha encontrado ninguna coincidencia
                  </span>
      }

      <form>
        <input 
          type="text" 
          name='busqueda'
          value={busqueda}
          onChange={busquedaNota}
        />

        <input type='submit' name='buscar' value="Buscar"/>
      </form>
      
      <div className='listado'>
        <h3>Listado de Notas Creadas</h3>
        <ol className='listaNotas'>
          {
            notas.map((nota, id) =>{
              return <li key={id}>
                {nota.titulo}
              </li>
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default BarraLateral
