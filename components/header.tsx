import styles from '../styles/Header.module.css'

export const HEADER_SIZE = 100;

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className={styles.header} style={{minHeight: `${HEADER_SIZE}px`}}>
            here
            {children}
        </div>
    )
}

export default Header