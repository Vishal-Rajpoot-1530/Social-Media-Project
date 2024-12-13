import css from './LoadingSpinner.module.css'
const LoadingSpinner = () => {

    return (
        <div className={css.loadingtext}>
             Loading <span className={css.dots}></span>
        </div>
    )
}

export default LoadingSpinner