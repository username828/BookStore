import GenreMain from "@/components/GenreMain/GenreMain";
import GenreSearch from "@/components/GenreMain/GenreSearch";
import { getAllGenres } from "@/helpers/api-util";
export default function Genre(props){
    
    return(
        <>
        {
            props.genres.map((g)=>{
                return <GenreMain id={g.id} name={g.name}/>
            })
        }
        </>
    )
}
export async function getServerSideProps(){
    const genres=await getAllGenres();
    return {
        props: {genres},
    }
}