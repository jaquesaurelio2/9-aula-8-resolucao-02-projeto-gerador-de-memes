import styles from "./index.module.css";
import memesData from "../../memesData";
import { useState } from "react";

export default function Meme() {
  const [image, setImage] = useState("");

  const getNewMeme = () => {
    const memes = memesData.data.memes;

    const randomIndex = Math.floor(Math.random() * memes.length);

    const url = memes[randomIndex].url;

    setImage(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Texto superior"
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Texto inferior"
        />
        <button onClick={getNewMeme} className={styles.button}>
          Obter novo meme 🖼
        </button>
      </div>
      <div className={styles.meme}>
        <img src={image} alt="meme" />
        <h2 className={styles.topText}></h2>
        <h2 className={styles.bottomText}></h2>
      </div>
    </div>
  );
}
