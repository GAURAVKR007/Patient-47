import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

export default function Overwiew() {
    
    return(
        <div>
            <div className="boxes-overview">
            <h1 style={{textAlign : "center"}}> <span> Game Overview </span></h1>
               <Card 
                img="./3.png"
                heading="My Dummy Text"
                para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
                para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
                />

               <Card2
               img="./2.png"
               heading="My Dummy Text"
               para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
               para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
               />

               <Card 
                img="./4.png"
                heading="My Dummy Text"
                para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
                para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
                />

               <Card2
               img="./bloodDoor.png"
               heading="My Dummy Text"
               para1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro blanditiis cum alias voluptate fugiat ea, repellat omnis sequi accusamus officia nemo praesentium quibusdam quo illum sint id explicabo repellendus, quia eaque ex? Maxime vitae officia aliquam, nisi perspiciatis id quasi corrupti, perferendis ducimus vero ipsa!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur!"
               para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi unde nesciunt adipisci numquam iure explicabo, suscipit distinctio maxime consectetur corrupti voluptates, aliquid, sit consequatur!"
               />



            </div>
        </div>
    )
}