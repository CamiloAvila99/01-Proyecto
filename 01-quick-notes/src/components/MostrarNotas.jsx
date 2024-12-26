import React, { useContext, useState } from 'react'
import { contextoNotas } from '../context/ContextoNotas'
import EditarNotasComponent from './EditarNotasComponent'

const MostrarNotas = () => {

    const {notas, setNotas, guardarDatos} = useContext(contextoNotas);

    const [editar, setEditar] = useState(0);

    const eliminarNota = (id) => {

        // Filtrar esas notas para que elimine del array que no quiero
        let nuevoArrayNotas = notas.filter(nota => nota.id !== id);

        //Actualizar estado del listado
        setNotas(nuevoArrayNotas);

        //Actualizar los datos en el LocalStorage
        localStorage.setItem('notas', JSON.stringify(nuevoArrayNotas));
      }
      

    return (
        <div lang='es' className= {notas.length > 0 ? 'contenido' : 'no-contenido'}>


            <h1 className='tituloMain'>Notas</h1>
        
            <div className='contenedorNotas'>
                {notas.length > 0 ? (
                    notas.map((nota, id) => {
                    // si nota es nulo o indefinido, saltar la iteación
                    if(!nota) return null;

                    // Calcula si el título es largo para cada nota
                    const esTituloLargo = nota.titulo.length > 20;

                    return (
                        <div className='nota' key={id}>
                            <h1 className={esTituloLargo ? 'tituloNota-largo' : 'tituloNota'}>
                                {nota.titulo}
                            </h1>
                            <p className='parrafo'>{nota.descripcion}</p>
                            <span>
                                <b>Fecha de Creación:</b> {nota.fecha}
                            </span>

                            <div className='botones'>
                                <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
                                <button onClick={() => setEditar(nota.id)}>Editar</button>
                            </div>
                            {    
                                editar === nota.id && (
                                <EditarNotasComponent
                                    nota = {nota}
                                    setEditar = {setEditar}
                                    setNotas = {setNotas}
                                />)
                            }                           
                        </div>
                    );
                })
                ) : ( 
                        <h1 className='no-notas'>No hay Notas Que Mostrar</h1>
                    )
                
                }
            </div>
        </div>
    )
}

export default MostrarNotas
