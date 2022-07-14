import React, {useState} from 'react'

export const CategoriesForm = ({onAddNewCategory}) => {
    
    const [newCategory, setNewCategory] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(newCategory.trim().length < 1) return
        onAddNewCategory(newCategory);
        setNewCategory('');
    }

  return (
    <form onSubmit={onSubmit} >
        <input placeholder='Nueva categoria' type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
        <input type="submit" value='Agregar'/>
    </form>
  )
}
