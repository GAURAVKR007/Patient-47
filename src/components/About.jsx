import React from "react";

export default function About() {
    return (
        <div className="about-sec">
            <div className="about">
            <h1>Patient 47</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum iure ut cumque eveniet ipsum alias aliquid quasi dolores nobis sunt odio suscipit veniam expedita eum, labore laboriosam. Perspiciatis facilis delectus beatae deleniti sint explicabo vero pariatur enim totam tempore. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga accusantium. Minima quisquam, quidem voluptatibus deserunt asperiores fuga autem hic veritatis deleniti quam. Alias, sint!
            </p>
            <br />
            <br />
            <div className="about-game1">
                <h4>Release Date : 23/09/2023</h4>
                <h4>Genre : Horror/Action/Adventure</h4>
            </div>
            <div className="about-game1">
                <h4>Developer : Impression Studio</h4>
                <h4>Platforms : PC / Xbox One X / PlayStation 4 / PlayStation 5</h4>
            </div>

            <h2> Follow on : </h2>
            <div className="social-icons">
             <a href="https://youtube.com/@3dworld150" target="_blank"><i className="fa-brands fa-youtube" style={{fontSize : "4.7rem", marginRight: "30px"}}></i></a>   
            <a href="https://www.instagram.com/impression._.studio/" target="_blank"><i class="fa-brands fa-instagram" style={{fontSize : "4.7rem"}}></i></a>
            
            </div>
            </div>
        </div>
    )
}