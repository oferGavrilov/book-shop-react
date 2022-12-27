import { SearchList } from "../cmps/search-list.jsx"
import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { googleBookService } from "../services/google-book.service.js"

const {useState} = React

export function BookAdd() {

    const [search , setSearch] = useState(googleBookService.getDefaultSearch())
    const [books , setBooks] = useState(null)

    function onHandleChange({target}) {
        let {value , name : field , type} = target
        console.log(value)
        setSearch((prevSearch) => {
            return {...prevSearch,[field]:value }
        })
    }

    function onSubmitSearch(ev) {
        ev.preventDefault()
        console.log(search)

        googleBookService.query(search).then((res) => setBooks(res))
    }

   function onAddBook(book) {
        const isExist =  bookService.isAlreadyExist(book.id)
        if(isExist) {
            showErrorMsg('Book already exists')
            return
        }
        showSuccessMsg('Book saved successfully')
        bookService.addGoogleBook(book).then((res)=> console.log(res))
   }


    return <section className="book-add">
        <h2>Add books from Google :</h2>
        <form onSubmit={onSubmitSearch}>
            <label htmlFor="search"></label>
            <input type="text"
            name="txt"
            id="search"
            placeholder="Search here..."
            value={search.txt}
            onChange={onHandleChange} />

            <button className={(search.txt ? "search-btn" : " hidden")}>Search</button>
        </form>

        { books && <SearchList books={books} onAddBook={onAddBook} />}
    </section>
}