import React, { useState } from 'react'
import FormularioCrearNotas from './FormularioCrearNotas';

const HeadNavComponent = () => {
    const [ventanaForm, setVentanaForm] = useState(false);

    const crearNota = e =>{
        e.preventDefault();
        setVentanaForm(!ventanaForm);
    }

    return (
        <>
            <header className='header'>
                <h1>Quick-Notes</h1>

                <nav>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="" onClick={crearNota}>Crear Nota</a>
                        </li>
                        <li>
                            <a href="">Contactanos</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {ventanaForm == true && <FormularioCrearNotas setVentanaForm={setVentanaForm}/>}
        </>
    )
}

export default HeadNavComponent
