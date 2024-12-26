import React from 'react'

const EditarNotas = ({setEditar, setNotas, nota}) => {

    const guardarEdicion = (e) =>{
        e.preventDefault();

        //CAPTURAMOS EL EVENTO
         const evento = e.target;

         const notasAlmacenadas = JSON.parse(localStorage.getItem("notas")) || [];;

         const indice = notasAlmacenadas.findIndex(n => n.id === nota.id);

         if(indice === -1) return;

         //Crear objeto con ese id de ese indice, con titulo y descripcion del formulario 
         
         const notaActualizada = {
            ...nota,
            titulo: evento.titulo.value,
            descripcion: evento.descripcion.value,
         }

         //Actualizar el elemento con ese indice
         const nuevoArrayNotas = [...notasAlmacenadas];

         nuevoArrayNotas[indice] = notaActualizada;

         console.log(nuevoArrayNotas);

         //Actualiza el estado de las notas
         setNotas(nuevoArrayNotas);

         //Guardar el nuevo array en el localstorage
         localStorage.setItem("notas", JSON.stringify(nuevoArrayNotas));

         //Cerrar el Fomulario de Edicion
         setEditar(0);
    }
    

  return (
    <div className='editar-nota'>
       <h1>Editar Nota</h1> 

       <form onSubmit={guardarEdicion}>
            <input 
                type="text"
                name='titulo'
                className='titulo_editado'  
                defaultValue={nota.titulo}
            />

            <textarea 
                name='descripcion'
                className='descripcion-editada'
                defaultValue={nota.descripcion}
            />

            <input type="submit" className='editar' value="Actualizar"/>
       </form>
    </div>
  )
}

export default EditarNotas
