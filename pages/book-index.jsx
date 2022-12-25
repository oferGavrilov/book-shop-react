import { BookDetails } from "./book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"


const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [filterBy , setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook , setSelectedBook] = useState(null)

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
            console.log('removed')
            const updatedBook = books.filter(book => book.id !== bookId)
            setBooks(updatedBook)

        })
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then(book =>{
            setSelectedBook(book)
        })
    }



    return <section className="book-index">
        {!selectedBook && <div>

        <BookFilter onSetFilter={onSetFilter} />
        <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook}/>
        </div>}

        {selectedBook && <BookDetails book={selectedBook}
         onGoBack ={() => setSelectedBook(null)} />}
    </section>
}