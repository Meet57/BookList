import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export const BookForm = () => {
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    
    const {dispatch} = useContext( BookContext )
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {title,author}})
        setAuthor('')
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book" />
        </form>
    )
}
