import Button from '../ui/Button'
import styles from './Books.module.css'
export default function Books(props){
    return (
        <li className={styles.item}>
            <div className={styles.content}>
                    <h2>Book Name: {props.title}</h2>
            </div>
            <div className={styles.actions}>
                <Button lnk={"/books/"+props.id}>View Details</Button>
            </div>
        </li>

    )
}