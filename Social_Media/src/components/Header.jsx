import css from './Header.module.css'
const Header = () => {

    return (
        <div className={css.header}>
            <div> My Website </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header