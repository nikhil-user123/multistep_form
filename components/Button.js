import styles from '../styles/button.module.css'

const Button = ({variant, color, page, onClick, children}) => {
    return (
        <div className={`${styles.button} ${styles[color]} ${page === 0 ? styles.display_none : ''} ${styles[variant]}`} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;