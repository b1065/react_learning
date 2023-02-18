import React, {useState} from "react"
import memesData from "../memeData"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: allMemeImages.data.memes[Math.floor(Math.random()*allMemeImages.data.memes.length)].url
    })
    
    function getNewImage(){
        setMeme(prevMeme => (
            {
                ...prevMeme, 
                randomImage: allMemeImages.data.memes[Math.floor(Math.random()*allMemeImages.data.memes.length)].url
            }
        ))
    }
    
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top" value={meme.bottomText}></input>
                <input type="text" placeholder="Bottom" value={meme.bottomText}></input>
                <button className="memeButton" onClick={getNewImage}>Get a new image 🖼</button>
            </div>
            <img className="memeImage" src={meme.randomImage}/>
        </main>
    )
}