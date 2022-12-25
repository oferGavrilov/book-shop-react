import { BookPreview } from "./book-preview.jsx";




export function BookList({ books, onRemoveBook , onSelectBook}) {

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove book</button>
                    <button onClick={() => onSelectBook(book.id)}>Select book</button>
                </div>
            </li>)
        }
    </ul>
}