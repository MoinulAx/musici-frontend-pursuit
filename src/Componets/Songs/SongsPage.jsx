import { useEffect, useState } from "react";
import SongCard from "../SongCard/SongsCard";
export default function SongPage() {
    const API = import.meta.env.VITE_BASE_URL; 
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
            .then(res => res.json())
            .then(res => {
                setSongs(res);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {songs.map((song,index) => {
               return <SongCard key={index} song={song} /> 
        })}
        </div>
    );
}
