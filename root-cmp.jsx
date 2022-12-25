const { useState} = React

import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'
import {Home} from './pages/home.jsx'

export function App() {

const [page , setPage] = useState('book')
console.log('page' , page)

return <section className="full app">
        <header className="app-header">
            <h1>My Books App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> | 
                <a href="#" onClick={() => setPage('book')}>Book</a> 
            </nav>
        </header>
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}