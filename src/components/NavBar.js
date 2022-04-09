import '../assets/css/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <nav>
                    <a href="/"><img id="navbar-logo" src="assets/svgs/logo.svg" alt="Logo"></img></a>
                    <ul className="primary-nav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                </nav>

                <img id="mobile-cta" className="mobile-menu" src="assets/svgs/logo.svg" alt="logo"></img>

                <nav>
                    <img src="assets/svgs/exit.svg" alt="Exit" id="mobile-exit" className="mobile-menu-exit"></img>
                    <ul className="primary-nav">
                        <li><a href="/">Register</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;