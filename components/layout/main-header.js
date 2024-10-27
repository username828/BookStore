import Link from "next/link";
import styles from './main-header.module.css';
import Theme from "../ui/Theme";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">BookStore</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/info">Information</Link>
                    </li>
                </ul>
            </nav>

            <nav className={styles.navigation}>
                <ul>
                <li><Link href="/books">Books</Link></li>
                </ul>  
            </nav>

            <nav className={styles.navigation}>
                <ul>
                <li><Link href="/authors">Authors</Link></li>
                </ul>  
            </nav>

            <nav className={styles.navigation}>
                <ul>
                <li><Link href="/search">Search</Link></li>
                </ul>  
            </nav>


            <nav className={styles.navigation}>
                <ul> 
                <li><Theme/></li>
                </ul>
            </nav>
        </header>
    );
}