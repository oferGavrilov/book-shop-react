

export function BookPreview({book}) {

    return <article className="book-preview">
        <h2>Book title: {book.title}</h2>
        <h3>Price: {book.price}</h3>
        <h4>Description: {book.description.substring(0,200)}</h4>
        {book.thumbnail && <img src={`${book.thumbnail}`} alt="" />}
        {!book.thumbnail && <img src={`assets/style/img/default.png`} alt="" />}
    </article>
}