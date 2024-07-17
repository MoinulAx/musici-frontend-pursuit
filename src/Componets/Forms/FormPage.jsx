import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.scss"; 

const API = import.meta.env.VITE_BASE_URL;

function NewSongForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    songname: "",
    artist: "",
    album: "",
    is_favorite: false,
  });

  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        
        return res.json();
      })
      .then(() => {
        navigate("/songs");
      })
      .catch(err => console.error("Error:", err));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="songname">Song Name:</label>
        <input
          id="songname"
          value={song.songname}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />

        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist"
          required
        />

        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Album"
          required
        />

        <div className="checkbox-container">
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
          <label htmlFor="is_favorite">Favorite</label>
        </div>
        
        <button type="submit">Add Song</button>
      </form>
      <br />
      <Link to={`/songs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NewSongForm;
