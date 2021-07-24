import "./App.css";
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Dangerous Women",
      artist: "Ariana Grande",
      img_src: "./art/Dangerous_Woman.png",
      src: "./music/Dangerous Woman — Ariana Grande.mp3",
    },
    {
      title: "God is a dancer",
      artist: "Mabel",
      img_src: "./art/god.png",
      src: "./music/God Is A Dancer — Tiësto.mp3",
    },
    {
      title: "Self Control",
      artist: "Laura Branigan",
      img_src: "./art/control.png",
      src: "./music/Self Control — Laura Branigan",
    },
    {
      title: "Side to Side",
      artist: "Ariana Grande",
      img_src: "./art/side_to_side.jpeg",
      src: "./music/Side To Side — Ariana Grande, Nicki Minaj.mp3",
    },
    {
      title: "The Way",
      artist: "Ariana Grande",
      img_src: "./art/the_way.jpeg",
      src: "./music/The Way — Ariana Grande.mp3",
    },
    {
      title: "The Less I know the better",
      artist: "Tame Impala",
      img_src: "./art/less.jpeg",
      src: "./music/The Less I Know The Better — Tame Impala.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
