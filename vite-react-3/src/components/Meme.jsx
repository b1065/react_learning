import React, {useState, useEffect} from "react"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    
    function getNewImage(){
        setMeme(prevMeme => (
            {
                ...prevMeme, 
                randomImage: allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url
            }
        ))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))
    }
    
    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="memeButton" 
                    onClick={getNewImage}
                >
                    &#128079; Get a new image &#128079;
                </button>
            </div>
            <div className="meme">
                <img className="memeImage" src={meme.randomImage}/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}