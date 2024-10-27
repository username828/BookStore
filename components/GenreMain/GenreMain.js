import styles from './GenreMain.module.css'
import Link from 'next/link'
export default function GenreMain(props){
    return (
        <li className={styles.container}>
        
            <Link href={"/genre/"+props.id} className={styles.card}>
                {props.name}
            </Link>
            
        </li>

    )

}