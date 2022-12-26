const { useParams, useNavigate } = ReactRouterDOM
const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { AddReview } from "../cmps/add-review.jsx"
import { LongTxt } from "../cmps/long-txt.jsx"
import { ReviewList } from "../cmps/review-list.jsx"
import { bookService } from "../services/book.service.js"
import { showSuccessMsg ,showErrorMsg } from "../services/event-bus.service.js"

export function BookDetails({ onGoBack }) {
    let [currBook, setCurrBook] = useState(null)
    // const [showReviews, setShowReviews] = useState(false)

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        loadBook()
    }, [])

    useEffect(() => {
        loadBook()
    }, [currBook])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log(err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    function getPageCount(pageCount) {
        if (pageCount >= 500) return 'Serious reading'
        else if (pageCount >= 200) return 'Descent reading'
        else if (pageCount < 100) return 'Light reading'
    }

    function getPublishedDate(year) {
        const yearNow = new Date().getFullYear()
        const diff = yearNow - year
        if (diff >= 10) return 'Vintage'
        else if (diff <= 1) return 'New'
    }

    function getPriceColor() {
        if (book.price >= 150) return 'red'
        else if (book.price <= 20) return 'green'
        else return 'black'
    }

    function onRemoveReview(reviewId) {
        const reviews = book.reviews.filter(review => review.id !== reviewId)
        console.log(reviews)
        const updateBook = {...book , 'reviews' : reviews}
        bookService.save(updateBook).then((book)=> {
            showSuccessMsg('Review deleted')
            setCurrBook(book)
        })
        .catch((err) => {
            console.log(err)
            showErrorMsg('Could not remove review')
        })
    }


    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        {book.listPrice.isOnSale && <img className="icon" src="assets/style/img/sale.png"></img>}
        <h3 style={{ color: getPriceColor() }}>Price:{book.price}</h3>
        <h3>{getPageCount(book.pageCount)}</h3>
        <h3>{getPublishedDate(book.publishedDate)}</h3>

        <LongTxt txt={book.description} length={100} />

        <img src={`${book.thumbnail}`} alt="" />

     
        <AddReview currBook={book} setCurrBook={setCurrBook} />
    
        {(!book.reviews.length) && <span className="title">No reviews yet</span>}

        { <ReviewList book= {book} onRemoveReview={onRemoveReview}/>}
        
        <Link className={"edit-btn"} to={`/book/edit/${book.id}`}>Edit book</Link>
        <button className="back-btn" onClick={onGoBack}>Go back</button>
    </section>
}