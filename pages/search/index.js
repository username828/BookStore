import { useState,useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styles from './index.module.css'
export default function SearchPage() {
    const [search, setSearch] = useState("");
    const [recentSearch, setRecentSearch] = useState([]);
    const router = useRouter(); // Initialize useRouter


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/data/Data.json', fetcher);

    useEffect(() => {
        const searchHistory = JSON.parse(localStorage.getItem("recentSearch")) || [];
        setRecentSearch(searchHistory);
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const updatedHistory = [search, ...recentSearch.slice(0, 4)];
        setRecentSearch(updatedHistory);
        localStorage.setItem("recentSearch", JSON.stringify(updatedHistory));
        // Determine the type of search (book, author, genre)
        if (data) {
            const book = data.books.find(b => b.title.toLowerCase() === search.toLowerCase());
            const author = data.authors.find(a => a.name.toLowerCase() === search.toLowerCase());
            const genre = data.genres.find(g => g.name.toLowerCase() === search.toLowerCase());

            if (book) {
                router.push(`/books/${book.id}`); // Navigate to the book details page
            } 
            else if (author) {
                router.push(`/authors`); // Navigate to the author page
            } 
            else if (genre) {
                router.push(`/genre/${genre.id}`); // Navigate to the genre page
            }
            else {
                router.push(`/404`);
            }
        }
        setSearch("");
    };

    if (!data) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Failed to load data</div>;
    }

    return (
        <div className={styles.searchcontainer}>
            <h1 className={styles.searchtitle}>Search for Books, Genres and Authors</h1>
            <form className={styles.searchform} onSubmit={handleSearch}>
                <input
                    type="text"
                    className={styles.searchinput}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit" className={styles.searchbutton}>Search</button>
            </form>

            <div className={styles.recentsearches}>
                <h3 className={styles.searchtitle}>Recent Searches</h3>
                <ul>
                    {recentSearch.map((item, index) => (
                        <li key={index} className={styles.recentsearchitem}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
