import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export const Navbar = () => {

    const { books } = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have { books.length } to read. </p>
        </div>
    )
}
 