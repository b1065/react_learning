import photo from "../../assets/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={photo}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities leb by 
            one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}