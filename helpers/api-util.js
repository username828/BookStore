import fs from 'fs/promises'
import path from 'path'
export async function readData() {
    const p=path.join(process.cwd(),'data','Data.json')
    const datajson=await fs.readFile(p)
    const data=JSON.parse(datajson)

    return data
}
// export async function readBooks(){
//     // const p=path.join(process.cwd(),'data','Data.json')
//     // const datajson=await fs.readFile(p)
//     // const data=JSON.parse(datajson)
//     const data=await readData()
//     return data.books
// }
export async function getAllBooks(){
    const data=await readData()
    return data.books
    
}

// export async function readAuthors(){
//     const p=path.join(process.cwd(),'data','Data.json')
//     const datajson=await fs.readFile(p)
//     const data=JSON.parse(datajson)

//     return data.authors
// }

export async function getAllAuthors(){
    const data=await readData()
    return data.authors
}
// export async function readGenres(){
//     const p=path.join(process.cwd(),'data','Data.json')
//     const datajson=await fs.readFile(p)
//     const data=JSON.parse(datajson)

//     return data.genres
// }
export async function getAllGenres(){
    const data=await readData()
    return data.genres;
    // const names=genres.reduce((acc,n)=>{
    //     if(n.name!==acc){
    //         return acc
    //     }
    // },[])
}


export async function getBookById(id) {
    const arr=await getAllBooks()
    return arr.find((book)=>book.id===id)
}

export async function getBookByGenre(id) {
    const arr=await getAllBooks()
    console.log(arr)
    return arr.filter((book)=>book.genreId===id)
}


export async function getBookDetails(){
    const books=await getAllBooks();
    const authors=await getAllAuthors();
    const genres=await getAllGenres();

    return books.map(book=>{
        const author=authors.find(a=>a.id===book.authorId)
        const genre=genres.find(g=>g.id===book.genreId) 
    
        return{
            ...book,
            authorName: author? author.name : "Unknown Author",
            genreName: genre ? genre.name : "Unknown Genre",
        }
    })


}
export async function getAuthorInfo(bId) {
    const data=await getAllBooks()
    const bookInfo=data.find(i=>i.id===bId);
    const aId=bookInfo.authorId
    const authors=await getAllAuthors();
    const authorInfo=authors.find(a=>a.id===aId);
    return authorInfo;

}


export async function getFeaturedBooks(){
    const book=await getAllBooks()
    return book.filter(b=>b.rating>4.5)
}