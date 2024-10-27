import useSWR from "swr";
import Authors from "@/components/Authors/Authors";
export default function AuthorsPage(){
    const fetcher=(url)=>fetch(url).then((res)=>res.json())
    const {data,error}=useSWR('/data/Data.json',fetcher)
    if (error){
        return <div>Failed to load authors</div>
    }
    if (!data){
        return <div>Loading...</div>;
    }

    //console.log(data.authors)
    return(
        <>
        <ul>
            {data.authors.map((auth)=>{
                return <Authors name={auth.name} biography={auth.biography}/>
            }
            )}
        </ul>
        </>
    )
}