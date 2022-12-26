const { useState, useEffect } = React
const {Link} = ReactRouterDOM

import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"
import { eventBusService , showSuccessMsg , showErrorMsg  } from "../services/event-bus.service.js"



export function BookIndex() {

    const [books, setBooks] = useState([])
    const [filterBy , setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => setBooks(books))
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBook = books.filter(book => book.id !== bookId)
            setBooks(updatedBook)
            showSuccessMsg('Book removed')
        })
        .catch((err) =>{
            console.log('error', err)
            showErrorMsg('Could not remove book')
        })
    }

 
    return <section className="book-index">
        <BookFilter onSetFilter={onSetFilter} />

        <div className="btn-container">
        <Link className="add-book-btn" to="/book/edit">Add book</Link>
        </div>

        <BookList books={books} onRemoveBook={onRemoveBook}/>

    </section>
}