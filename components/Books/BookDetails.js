import styles from './BookDetails.module.css'; // Import CSS module

export default function BookDetails(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.book.title}</h1>
            <p className={styles.description}>{props.book.description}</p>
            <p className={styles.author}>Author: <span className={styles.value}>{props.book.authorName}</span></p>
            <p className={styles.genre}>Genre: <span className={styles.value}>{props.book.genreName}</span></p>
            <p className={styles.price}>Price: <span className={styles.value}>${props.book.price}</span></p>
            <p className={styles.rating}>Rating: <span className={styles.value}>{props.book.rating} / 5</span></p>
        </div>
    );
}
