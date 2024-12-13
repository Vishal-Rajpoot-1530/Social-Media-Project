import css from './Footer.module.css'
const Footer = () => {
    return (
        <div className={css.footer}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
             
        </div>
    )
}

export default Footer