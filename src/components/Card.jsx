import React from "react";

function Card(props) {
    return(
        <div className="box">
            <div className="image-sec">
                <img src={props.img} alt="image" />
            </div>
            <div className="text">
            <h2> <u> {props.heading}</u></h2>
                <p>{props.para1}</p>
                <br />
                <p>{props.para2}</p>
            </div>
        </div>
    )
}

export default Card;

// https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/one-piece-zoro-s-10-best-moves-ranked-according-to-strength.jpg