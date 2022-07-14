import React, { useState } from 'react'
import { CategoriesForm, GifGrid } from './components';

export const GiphyApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddNewCategory = (newCategory) => {
        if (categories.find(c => c.toUpperCase() === newCategory.toUpperCase())) return
        setCategories(previousValue => [newCategory, ...previousValue])
    }

    const onDeleteCategory = (category) => {
        setCategories(categories.filter(c => c !== category))
    }

  return (
    <>

        <h1 >GiphyApp</h1> 

        <CategoriesForm onAddNewCategory={onAddNewCategory}/>

        <ol>
            {
                categories.length > 0 && categories.map(c => <GifGrid key={c} category={c} onDeleteCategory={onDeleteCategory}/>) 
            }
        </ol>
    </>
  )
}
