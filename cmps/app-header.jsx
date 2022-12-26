const {NavLink} = ReactRouterDOM

export function AppHeader() {
    return <header className="app-header">
        <NavLink to="/"><h1>My Books App</h1></NavLink>
            <nav className="app-nav">
                <NavLink to={"/"}>Home</NavLink> | 
                <NavLink to={"/about"}>About</NavLink> |
                <NavLink to={"/book"}>Book</NavLink>
            </nav>
    </header>
}