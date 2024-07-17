import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSong() {
  const API = import.meta.env.VITE_BASE_URL;
  let { id } = useParams();
  const [song, setSong] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setSong(res);
      })
      .catch(err => console.error(err));
  }, [API, id]);

  const handleDelete = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => navigate('/songs'))
      .catch(err => console.error(err));
  };

  if (!song) return <div>Loading...</div>;

  return (
    <div className="song-card">
      <h2 className="song-title">{song.songname}</h2>
      <p className="song-artist">{song.artist}</p>
      <p className="song-album">{song.album}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
