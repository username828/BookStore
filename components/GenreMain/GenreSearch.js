import{useRef} from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/router'
import styles from './GenreSearch.module.css'


export default function GenreSearch(props){
    const g=useRef()
    const r=useRouter();
    function submit(event){
        event.preventDefault();
        const selectedGenre=g.current.value;
        r.push('/genre/'+selectedGenre);
    }
    return(
        <form className={styles.form}>
            <div className={styles.control}>
                <label>Genre</label>
                <select id='genre' ref={g}>
                    <option value="1">Fiction</option>
                    <option value="2">Dystopian</option>
                    <option value="3">Romance</option>
                    <option value="4">Adventure</option>
                </select>
            </div>
            <Button onClick={submit}>Select Genre</Button>
        </form>

    )
}