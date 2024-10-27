import { getAllBooks } from "@/helpers/api-util";
import fs from 'fs/promises'
import path from 'path'
import Link from "next/link";
import { getBookDetails } from "@/helpers/api-util";
import BookDetails from "@/components/Books/BookDetails";
import Button from "@/components/ui/Button";
import styles from './index.module.css'
export default function BookDetailsPage(props){
    if (!props.loadedBook) {
        return <p>Loading...</p>;
    }
    console.log(props.loadedBook.id)
    return(
        <>
            <BookDetails book={props.loadedBook}/>
            
            <div className={styles.btn}>
            <Button><Link href={`/books/${props.loadedBook.id}/author`}>
                View Author Info
            </Link></Button>
            </div>
        </>
    )

}

export async function getStaticProps(context){
    const data=await getBookDetails();
    //console.log("Fetched Data:" ,data)

    const specificBook=data.find(i=>i.id===context.params.id)
    if (!specificBook) {
        return {
            notFound: true, // Return 404 if book is not found
        };
    }
    return{
        props:{
            loadedBook:specificBook
        },
        
    }
}

export async function getStaticPaths(){
    const data=await getBookDetails();
    //console.log("Data in Get static Paths: ",data)
    const allIds=data.map(i=>i.id);
    //console.log(allIds)
    const allPaths=allIds.map(i=>{
        return{
            params:{id: i}
        }
        
    })

    //console.log("Paths: ",allPaths)

    return {
        paths:allPaths,
        fallback:true //for non pre-generated pages
    }
}