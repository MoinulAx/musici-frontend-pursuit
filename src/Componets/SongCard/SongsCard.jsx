import "./songcard.scss";
import { Link, useParams } from "react-router-dom";

export default function SongCard({ song, index }) {
    
    return (
        <Link to = {`/songs/${song.id}`}>
             <div className="song-card" key={index}>
            <h2 className="song-title">{song.songname}</h2>
            <p className="song-artist">{song.artist}</p>
            <p className="song-album">{song.album}</p>

        </div>
        </Link>
       
    );
}
