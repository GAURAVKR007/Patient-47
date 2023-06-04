import React from "react";

export default function Hero() {
    return(
        <div className="hero">
            {/* <img src="https://compass-ssl.xbox.com/assets/64/02/6402981a-9446-46d8-8289-e370f3158746.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg " alt="img" width="100%"/> */}

            <video autoPlay loop muted playsInline src="./Short.mp4" typeof="video/mp4" className="back-video">
            </video>

            <div className="content">
                <h1>Patient 47</h1>
                <a href="#trailer"> <span></span> Watch Trailer</a>
            </div>
        </div>
    )
}