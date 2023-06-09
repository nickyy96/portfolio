import { useEffect } from 'react';
import styles from '../styles/Header.module.css'
import Link from 'next/link'

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className={styles.header} id="header">
            <div className={styles.headerContainer}>
                <Link href="/">
                    Nicholas Yarnall
                </Link>
                <div className={styles.buttons}>{children}</div>
            </div>
            <div className={styles.bottom}>
            </div>
        </div>
    )
}

export default Header