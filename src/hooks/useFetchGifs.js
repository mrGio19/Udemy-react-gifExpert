// import React from 'react'
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState( [] );
    const [isLoading, setisLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setisLoading( false );
    };

    // useEffect es otro hook (gancho), recibe 2 argumentos, el 1ro una funcion y el 2do una lista de dependencias que es opcional pero se recoimenda siempre ponerla, lo que hace es que renderiza segun la lista de dependencias, en este caso la lista de referencia es vacia [] entonces dispara getGifs solo la 1ra vez que se renderiza GifGrid. Esto evita que se renderice una y otra vez la lista que arroja getGrifs cada que se renderice GifGrid por haber agregado una nueva category
    useEffect( () => {
        getImages();
    }, [] );

  return {
    // images: images,
    images,
    // isLoading: isLoading
    isLoading
  }
}
