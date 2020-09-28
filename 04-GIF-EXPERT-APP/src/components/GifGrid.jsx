import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from '../components/GifGridItem'
import { Spinner } from './Spinner';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h2 className="grid_title">{category}</h2>
            {loading && <Spinner /> }
            <div className="card_grid">
                {
                    data.map(img =>( 
                        <GifGridItem 
                            key={img.id}
                            // Enviando las propiedades de img 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
