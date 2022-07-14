import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import '../styles.scss';
import { getGifs } from '../actions';
import { useFetchGifs } from '../hooks/useFetchGifs';




export const GifGrid = ({ category, onDeleteCategory }) => {

    const {currentGifs, loading} = useFetchGifs(category);
    
    return (
        <div className='grid-container'>
            <h2>{category}</h2>
            <input onClick={() => onDeleteCategory(category)} className='delete-btn' type='button' value='Eliminar categoria' />
            <div className='card-grid'>
                {currentGifs?.map(gif => (
                    <GifGridItem key={gif.id} {...gif} />
                ))}
            </div>
        </div>
  )
}
