const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM


import { AppHeader } from './cmps/app-header.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BookAdd } from './pages/book-add.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { BookEdit } from './pages/book-edit.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { Home } from './pages/home.jsx'

export function App() {


    return <Router>
        <section className="full app">

            <AppHeader />

            <main>
                <Routes>
                    <Route element={<Home /> } path="/" />
                    <Route element={<AboutUs /> } path="/about" />
                    <Route element={<BookIndex /> } path="/book" />
                    <Route element={<BookEdit />} path="/book/edit" />
                    <Route element={<BookEdit />} path="/book/edit/:bookId" />
                    <Route element={<BookAdd />} path="/book/addBook" />
                    <Route element={<BookDetails/>} path="/book/:bookId" />
                </Routes>
            </main>

            <UserMsg />
        </section>
    </Router>
}