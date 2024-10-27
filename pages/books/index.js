import BookList from "@/components/Books/BookList";
import GenreSearch from "@/components/GenreMain/GenreSearch";
import { getAllBooks } from "@/helpers/api-util";
import { notFound } from "next/navigation";
export default function BooksPage(props){
    const arr=props.allBooks
    return(
        <>
        
        <GenreSearch/>
        <BookList list={arr}/>
        </>
    )
}
export async function getStaticProps() {
    const books=await getAllBooks();

    if(!books || books.length===0){
        return{
            notFound:true //404 if data unavailable
        }
    }
    return{
        props:{
            allBooks:books
        },
        revalidate:60 //after 60s update
    }
    
}