import { useEffect } from 'react';
import styles from '../styles/Header.module.css'

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className={styles.header}>
            Nicholas Yarnall
            <div className={styles.buttons}>{children}</div>
        </div>
    )
}

export default Header