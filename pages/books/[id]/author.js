
import Authors from "@/components/Authors/Authors";
import { getAuthorInfo, getBookDetails } from "@/helpers/api-util";
import { useRouter } from "next/router";
export default function AuthorsPage(props){
    const r=useRouter();
    console.log(r.query.id)
    if(!r.query.id){
        return <p>Loading...</p>
    }
    if(!props.authorInfo){
        return <p>No author info available</p>
    }
    return(
        <>    
         <Authors name={props.authorInfo.name} biography={props.authorInfo.biography}/>
        </>
    )

}

export async function getStaticProps(context) {
    const id=context.params.id
    const authorInfo=await getAuthorInfo(id)
    console.log(authorInfo)
    return {
        props:{authorInfo}
    }
    
}

export async function getStaticPaths(){
    const data=await getBookDetails();
    console.log("Data in Get static Paths: ",data)
    const allIds=data.map(i=>i.id);
    console.log(allIds)
    // Generate paths for each book ID for the author route
    const allPaths = allIds.map(i => ({
        params: { id: i }
    }));

    console.log("Paths: ",allPaths)

    return {
        paths:allPaths.map(id=>({
            params:{id:id.params.id}
        })),
        fallback:true
    }
}