// import React from 'react'

import { useState } from "react"

// Desestructure setCategories (Tambien onNewCategory) del objeto props
export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('');

    // const onInputChange = (event) => {
    //     console.log( event.target.value );
    //     setinputValue( event.target.value );
    // Desestructure target del objeto enviado desde onChange
    const onInputChange = ( {target} ) => {
        setinputValue( target.value );
    }

    const onSubmit = (event) => {
        // preventDefault hace que no se refresque el navegador, asi podemos usar lo que queda en el recuadro del input
        event.preventDefault();
        // Con esta condicion verificamos que no se puedan ingresar espacios en blanco ni con una letra
        if ( inputValue.trim().length <= 1 ) return;
        // Se debio usar el callback para que setCategories recibiera en su argumento el array que se habia guardado en su useState de su hook, sin eso daba error y decia que categories no habia sido definida
        // setCategories( (categories) => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        // Con esto se limpia el recuadro del input cada vez que ingresemos algo valido
        setinputValue('');
    }

    return (
        // form es un formulario, cada vez que le damos enter recarga la pagina
        // onSubmit={(event) => onSubmit(event)} -> Recordar que en las funciones de flecha cuando se recibe un argumento que le vamos a pasar a otra funcion se puede simplificar solo haciendo referencia a la funcion a la que queremos pasarle el argumento
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange se dispara cuando cambia algo y devuelve un objeto, lo uso para guardar los cambios cuando escribo algo en el cajon del input, sin el no podria escribir nada en ese cajon y solo se podria ver lo que tenga en value
                onChange={ onInputChange }
            />
        </form>
    )

}
