import { bookService } from "../services/book.service.js"
import { eventBusService , showSuccessMsg , showErrorMsg } from "../services/event-bus.service.js"

const {useState , useEffect} = React
const {useNavigate , useParams , Link} = ReactRouterDOM

export function BookEdit() {

    const [bookToEdit , setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const {bookId} = useParams()

    useEffect(() =>{
        if(!bookId) return
        loadBook()
    } , [])

    function loadBook() {
        bookService.get(bookId)
        .then((book) => setBookToEdit(book))
        .catch((err) =>{
            console.log(err)
            navigate('/book')
        })
    }

    function handelChange({target}) {   
        let {value , type , name:field} = target
        value = type ==='number' ? +value : value
        setBookToEdit((prevBook) => ({...prevBook , [field] : value}))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then((book)=>{
            console.log('book', book)
            // eventBusService.emit('show-user-msg' , {txt:'Book saved' , type:'success'})
            showSuccessMsg('Book saved')
            navigate('/book')

        })
    }

    return <section className="book-edit">
        <h2> {bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>

        <form onSubmit={onSaveBook}>
            <label htmlFor="title">Title:</label>
            <input type="text" 
                name="title"
                id="title"
                placeholder="Enter title..."
                value={bookToEdit.title}
                onChange={handelChange}/>
            
            <label htmlFor="price">Price:</label>
            <input type="number" 
                name="price"
                id="price"
                placeholder="Enter price..."
                value={bookToEdit.price}
                onChange={handelChange}/>
            
            <div>
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/book">Cancel</Link>
            </div>
        </form>
    </section>
}