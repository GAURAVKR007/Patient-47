import React from "react";

export default function Card2(props) {
    return (
        <div className="box2">
            <div className="image-sec2">
                <img src={props.img} alt="image" />
            </div>
            <div className="text2">
            <h2>{props.heading}</h2>
                <p>{props.para1}</p>
                <br />
                <p>{props.para2}</p>
            </div>
        </div>
    )
}