import Link from 'next/link'

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className="header">
            <div className="flex flex-row justify-between items-center box-border p-4 font-semibold text-[1.5rem] z-[99] transition-background-color duration-500 ease-linear">
                <Link href="/">
                    Nicholas Yarnall
                </Link>
                <div className="flex flex-row items-center justify-center gap-4">{children}</div>
            </div>
            <div className="bottom">
            </div>
        </div>
    )
}

export default Header