import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

export default function Overwiew() {
    return(
        <div>
            <div className="boxes-overview">
            <h1 style={{textAlign : "center"}}> Game Overview</h1>
               <Card 
                img="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/one-piece-zoro-s-10-best-moves-ranked-according-to-strength.jpg"
                heading="My Dummy Text"
                para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
                para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
                />

               <Card2
               img="https://pbs.twimg.com/media/EiNuz3LU0AAOBh0.jpg"
               heading="My Dummy Text"
               para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
               para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
               />

               <Card 
                img="https://india.postsen.com/content/uploads/2023/01/05/917b67b091.jpg"
                heading="My Dummy Text"
                para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
                para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
                />

               <Card2
               img="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2019-10/lays.jpg"
               heading="My Dummy Text"
               para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
               para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
               />



            </div>
        </div>
    )
}