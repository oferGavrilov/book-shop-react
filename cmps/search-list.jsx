import { SearchPreview } from "./search-preview.jsx"



export function SearchList({books , onAddBook}) {
    console.log(books)
    return <ul className="search-list">
        {books.map((book, idx) => <SearchPreview key={idx} title={book.title} book={book} onAddBook={onAddBook} />)}
    </ul>
}