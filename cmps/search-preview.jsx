

export function SearchPreview({title ,book , onAddBook}) {
    console.log(title)
    return <li className="search-preview">
        <h2>{title} <button onClick={() => onAddBook(book)}>+</button></h2>
        
    </li>
}