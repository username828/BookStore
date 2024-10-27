import Books from "./Books";
import styles from './BookList.module.css'
export default function BookList(props){
    return(
        <div className={styles.list}>
            <ul>
                {
                    props.list.map(book=>{
                        return <Books key={book.id} id={book.id} title={book.title} />
                    })
                }
            </ul>

        </div>
    )
}
