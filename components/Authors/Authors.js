import styles from './Authors.module.css'
export default function Authors(props){

    return(
        <div className={styles.container}>

            <h2>Author Name: {props.name}</h2>
            <h2>Author Biography: {props.biography}</h2>
            
        </div>
    )

}