import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export const BookDetails = ({book}) => {

    const {dispatch} = useContext(BookContext)

    return (
        <li>
            <div className="title"> {book.title} </div>
            <div className="author"> {book.author} </div>
            <button style={{ float: 'right' }} onClick={ () => dispatch({type:'REMOVE_BOOK',id: book.id}) }>Completed</button>
        </li>
    )
}
