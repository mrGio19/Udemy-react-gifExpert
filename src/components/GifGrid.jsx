// import React from 'react'
// import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category );
    // console.log( {images, isLoading});

    return (
        <>
            <h3>{ category }</h3>

            {/* Esta parte es para configurar cuando aun no se han cargado las imagenes, se uso un ternario */}
            {/* {
                isLoading
                ? ( <h2>Cargando...</h2>)
                : null
            } */}

            {/* Se usa un AND logico, es como un if corto que solo evalua si se cumple, y sino se cumple corta y sigue con el resto de codigo, en teoria funciona igual que el ternario anterior */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            {/* class no lo podemos usar ya que estamos usando codigo de javaScript y alli hay una palabra reserva class para las clases, entonces react puso la palabra className para referirse a class de html */}
            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            // title={ image.title }
                            // url={ image.url }
                            // Es una tecnica para esparcir todas las propiedades del image, asi ya podriamos tener todas las propiedades y no solo title y url que fueron las que se enviaron en las lineas anteriores
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
