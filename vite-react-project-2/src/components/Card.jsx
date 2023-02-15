import pin from "../assets/pin-icon.png"

export default function Card(props) {
    return(
        <div>
            <div className="card">
                <img className="cardImage" src={props.imageUrl}/>
                <div className="cardNotImage">
                    <div className="cardLocation">
                        <img src={pin}/>
                        <p className="cardCountry">{props.location.toUpperCase()}</p>
                        <a className="cardButton" href={props.googleMapUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="cardTitle">{props.title}</h1>
                    <p className="cardDuration">{props.startDate} - {props.endDate}</p>
                    <p className="cardDesc">{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}