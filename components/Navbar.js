import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navbar = (props) => {
    const { version, refTo } = props
    const router = useRouter()
    const url = router.pathname
    return (
        <header>
            <nav>
                <ul className="main-nav">
                    <li className="main-nav__item"> <h2>Matchmaking Technologies</h2></li>
                    {/* <Link href="/en"> */}

                    <div className="main-nav-right">
                        <Link href="/dev">
                            <li className="main-nav__item"><p>Technical Explanation</p></li>
                        </Link>
                        <Link href={refTo}>
                            {/* <li className="main-nav__item"><p>English Version</p></li> */}
                            <li className="main-nav__item"><p>{version}</p></li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
