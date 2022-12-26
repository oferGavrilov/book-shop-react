import { bookService } from "../services/book.service.js"

const { useState, useEffect , useRef } = React


export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())
    const elInputRef = useRef(null)

    useEffect(() => {
        elInputRef.current.focus()
    } , [])


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function handleTitleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number')  ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }


    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }





    return <section className="book-filter main-layout">
        <h2>Filter our books</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title-filter">Title:</label>
            <input type="text"
                name="txt"
                id="title-filter"
                placeholder="By title.."
                ref={elInputRef}
                value={filterByToEdit.txt}
                onChange={handleTitleChange} />

            <label htmlFor="price-filter">Minimum price:</label>
            <input type="number"
                name="minPrice"
                id="price-filter"
                placeholder="By minimum price.."
                value={filterByToEdit.minPrice}
                onChange={handleTitleChange} />

            <label htmlFor="page-count-filter">Page count:</label>
            <select name="pageCount" id="page-count-filter" type='number' onChange={handleTitleChange}>
                <option value="all">All</option>
                <option value="500">Serious reading</option>
                <option value="200">Descent reading</option>
                <option value="100">Light reading</option>
            </select>

            <label htmlFor="publishedAt-filter">Published at:</label>
            <select name="minYear" id="publishedAt-filter" type='number' onChange={handleTitleChange}>
                <option value="all">All</option>
                <option value="25">In last 25 years</option>
                <option value="15">In last 15 years</option>
                <option value="8">In last 8 years</option>
            </select>

            <button className="filter-btn">Filter books</button>
        </form>
    </section>
}