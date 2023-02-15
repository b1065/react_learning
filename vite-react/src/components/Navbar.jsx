import logo from "../images/react_logo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img className="image" src={logo}/>
                <h3 className="title">ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}