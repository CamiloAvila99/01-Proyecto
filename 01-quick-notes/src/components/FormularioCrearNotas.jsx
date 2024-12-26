import React, { useContext, useState } from 'react'
import { contextoNotas } from '../context/ContextoNotas';

const FormularioCrearNotas = ({setVentanaForm}) => {

      const {guardarDatos} = useContext(contextoNotas);

      //Cuando se envia el formulario
      const capturarDatosNota = e =>{
        e.preventDefault();

        const obtenerFechaActual = () => {
          const fecha = new Date(); 
          const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; 
          return fecha.toLocaleDateString('es-ES', opciones);
        };

    
        let evento = e.target;
    
        let nota = {
          id: new Date().getTime(),
          titulo: evento.titulo.value,
          descripcion: evento.descripcion.value, 
          fecha: obtenerFechaActual()
        }
    
        guardarDatos(nota);

        setVentanaForm(false);
      }

  return (
    <div className='crear'>
        <h1>Crear Nota</h1>

        <form onSubmit={capturarDatosNota} className='formulario'>
            <div className='campo'>
                <label htmlFor="titulo">Titúlo: </label>
                
                <input  type="text" 
                        id='titulo' 
                        name="titulo" 
                        placeholder='Ingresa el Titúlo...'
                />
            </div>

            <div className='campo'>
                <label htmlFor="descripcion">Descripción: </label>
                
                <textarea   name="descripcion" 
                            id="descripcio" 
                            placeholder='Descripción...'></textarea>
            </div>

            <div className='campo'>
                <input type="submit" value="Guardar"/>
            </div>
        </form>
    </div>
  )
}

export default FormularioCrearNotas
