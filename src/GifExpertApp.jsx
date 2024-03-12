// No es necesario importar en todos los functional component a react, el ya esta importado globalmente desde vite.config
// import React from 'react';
import { useState } from 'react';
// Se va usar el archivo index para 'centralizar' las importaciones, cuando un archivo tiene por nombre index por defecto simpre se va a ese archivo, por eso no se coloca components/index ya que seria redundante'
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
// url de Giphy: 7uDnVUmxoZcqpkTDncq1VueeY7pkTl6C

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch' ]);

    const onAddCategory = ( newCategory ) => {
        // categories.push('Valorant');

        // Esta condicion sirve para evaluar si el elemento que viene en newCategory existe en el array de categories, si existe que se salga de la funcion y no haga nada, esto para evitar repetidos
        if ( categories.includes(newCategory))  return;

        // En lo posible en react y en los Hooks no se debe usar push para agregar elementos a un arreglo ya que esto lo que hace es mutar el objeto y los Hooks son constantes porque asi se declaran, es decir no deja hacerlo y no hace nada, para eso se debe usar set del hook y tambien el operador spreed (['Nuevo elemento', ...array]), esto desenvuelve array y lo pega junto al nuevo elemento creando un nuevo array.
        setCategories( [newCategory, ...categories] );
        // Otra manera de hacerlo, usando el callback que recibe cat, ademas cambiamos el orden, ahora se desenvuelve el array primero y al final se pega lo que queremos agregar para el nuevo array
        // setCategories( cat => [...cat, 'Valorant']);
        // console.log(newCategory);
    }

    // console.log(categories);

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        {/* Listados de Gifs */}
        {
            categories.map( (category) => (
                // <div key={ category }>
                //     <li>{ category }</li>
                // </div>   
                <GifGrid
                    key={ category }
                    category={ category }
                />
            ))
        }

        {/* <li>ABC</li> */}

    
        {/* Gif item */}
        

    </>
  )
}

