import { LongTxt } from "../cmps/long-txt.jsx"


const { useState , useEffect } = React


export function BookDetails({ book, onGoBack }) {

    const [] = useState()

    function getPageCount(pageCount) {
        if(pageCount >= 500) return 'Serious reading'
        else if(pageCount >= 200) return 'Descent reading'
        else if(pageCount < 100) return 'Light reading'
    }

    function getPublishedDate(year) {
        const yearNow = new Date().getFullYear()
        const diff = yearNow - year
        if(diff >= 10) return 'Vintage'
        else if(diff <= 1) return 'New'
    }

    function getPriceColor() {
        if(book.listPrice.amount >= 150) return 'red'
        else if(book.listPrice.amount <= 20) return 'green'
        else return 'black'
    }


    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        {book.listPrice.isOnSale && <img className="icon" src="assets/style/img/sale.png"></img>}
        <h3 style={{color:getPriceColor()}}>Price:{book.listPrice.amount}</h3>
        <h3>{getPageCount(book.pageCount)}</h3>
        <h3>{getPublishedDate(book.publishedDate)}</h3>
        <p>Description: {book.description}</p>
        <LongTxt />
        <img src={`${book.thumbnail}`} alt="" />
        <button className="back-btn" onClick={onGoBack}>Go back</button>
    </section>
}