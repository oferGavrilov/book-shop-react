

export function BookPreview({book}) {
    return <article className="book-preview">
        <h2>Book title: {book.title}</h2>
        <h3>Price: {book.listPrice.amount}</h3>
        <h4>Description: {book.description}</h4>
        <img src={`${book.thumbnail}`} alt="" />
    </article>
}