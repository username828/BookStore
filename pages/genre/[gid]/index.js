import Books from "@/components/Books/Books"
import { getBookByGenre } from "@/helpers/api-util"

export default function GenrePage(props){
    return (
        <>
            {props.books.map(book=>{
                return <Books id={book.id} title={book.title}/>
            })}
        </>
    )

}

export async function getServerSideProps(context){
    //gid--same as dynamic folder name 
    const genreId=context.params.gid
    const books=await getBookByGenre(genreId)
    return{
        props:{books}
    }
    
}