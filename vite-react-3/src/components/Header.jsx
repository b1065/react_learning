import React from "react"
import logo from "../assets/trollface.png"

export default function Navbar() {
    return(
        <header>
            <img src={logo}/>
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}