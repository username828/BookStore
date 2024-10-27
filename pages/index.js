import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import { getFeaturedBooks } from "@/helpers/api-util";
import BookList from "@/components/Books/BookList";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home(props) {
  //navigate to genres page
  const r=useRouter();
  const handleClick=()=>{
    r.push('/genre');
  }
  
  return (
    <>
    
    <ul>
        <BookList list={props.featuredBooks}/>
    </ul>
    
    <div className={styles.btn}>
      <Button onClick={handleClick}>View Genres</Button>
    </div>
      
    
    </>
  );
}

export async function getStaticProps() {
  const featuredBooks=await getFeaturedBooks();
  return{
    props:{featuredBooks}
  }
  
}