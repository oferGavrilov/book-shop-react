const { useParams, useNavigate , Link } = ReactRouterDOM
const { useState, useEffect , useRef } = React


import { AddReview } from "../cmps/add-review.jsx"
import { LongTxt } from "../cmps/long-txt.jsx"
import { ReviewList } from "../cmps/review-list.jsx"
import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

export function BookDetails({ onGoBack }) {

    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    // const [navigator , setNavigator] = useState(null)
    const navigate = useNavigate()
    // const navigator =  useRef(null)
    const { bookId } = useParams()

    useEffect(() => {
        loadBook()
    }, [bookId])


    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log(err)
                navigate('/book')
            })

        bookService.getNextBookId(bookId)
            .then(setNextBookId)
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
        bookService.removeReview(book.id, reviewId).then(() => {
            const filteredReviews = book.reviews.filter((review) => review.id !== reviewId)
            showSuccessMsg('Review removed successfully')
            setBook({ ...book, reviews: filteredReviews })
        })
            .catch((err) => {
                console.error(err)
                showErrorMsg('Could not remove review')
            })

    }

    function onSaveReview(reviewToAdd) {
        bookService.saveReview(book.id, reviewToAdd)
            .then(review => {
                const reviews = [review, ...book.reviews]
                showSuccessMsg('Review added successfully')
                setBook({ ...book, reviews })
            })
            .catch((err) => {
                console.error(err)
                showErrorMsg('Could not save review')
            })
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        {book.isOnSale && <img className="icon" src="assets/style/img/sale.png"></img>}
        <h3 style={{ color: getPriceColor() }}>Price:{book.price}</h3>
        <h3>{getPageCount(book.pageCount)}</h3>
        <h3>{getPublishedDate(book.publishedDate)}</h3>

        <LongTxt txt={book.description} length={100} />

        <img src={`${book.thumbnail}`} alt="" />


        <AddReview onSaveReview={onSaveReview} />

        {(!book.reviews.length) && <span className="title">No reviews yet</span>}

        <ReviewList book={book} onRemoveReview={onRemoveReview} />

        <Link className={"edit-btn"} to={`/book/edit/${book.id}`}>Edit book</Link>

        {/* <Link className={"prev-btn"} to={`/book/${nextBookId}`}>Prev book</Link> */}
        <Link className={"next-btn"} to={`/book/${nextBookId}`}>Next book</Link>

        <button className="back-btn" onClick={onGoBack}>Go back</button>
    </section>
}