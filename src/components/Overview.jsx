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
                heading="Mystry Unseen"
                para1="Patience 47 aims to deliver a bone-chilling horror adventure, providing players with a unique blend of psychological suspense, exploration, and strategic decision-making. Are you ready to face your fears and discover the truth behind the hospital's dark secrets? Brace yourself, for the darkness is calling, and salvation may lie only in the hands of the brave."
                para2="Throughout the game, players will face challenging puzzles, requiring them to solve intricate mysteries and manipulate the environment to progress. They'll need to gather clues, examine objects, decipher cryptic messages, and interact with the twisted inhabitants of the hospital. Every decision matters, as the consequences can lead to survival or a gruesome demise."
                />

               <Card2
               img="./2.png"
               heading="Advanced Tools in our possession"
               para1="As a skilled police officer, you possess unique abilities and tools that aid in your investigation. These include forensic equipment, detective instincts, and combat training. While delving deeper into the hospital's dark history, you'll encounter grotesque creatures, disturbed patients, and vengeful spirits. Using your wit, reflexes, and limited resources, you must survive encounters with these otherworldly entities and uncover the truth behind the death that haunts the hospital."
               para2="Within the hospital's forsaken halls, the air grows thick with fear and the echoes of forgotten souls. Every shadow holds a lurking terror, and every step brings you closer to the heart-pounding truth. As you confront the horrors that dwell within, your own willpower becomes the ultimate weapon against the darkness."
               />

               <Card 
                img="./4.png"
                heading="Compelling StoryLine"
                para1="The narrative unfolds through gripping storytelling, uncovering the hospital's sinister past and the events that led to its current state. As you investigate, you'll uncover a web of corruption, supernatural occurrences, and personal traumas that haunt the hospital's twisted history. The game's atmospheric soundtrack, detailed visuals, and immersive audio design work together to intensify the sense of terror and suspense, further immersing players in the haunting experience."
                para2="Through the masterful storytelling, players will be drawn into a narrative that twists and turns, keeping them engaged and on the edge of their seats. The unraveling of the hospital's sinister past will reveal shocking revelations and unexpected connections, driving the suspense to new heights."
                />

               <Card2
               img="./bloodDoor.png"
               heading="Horror Hospital"
               para1="The hospital serves as the main backdrop, providing an eerie atmosphere and a sense of foreboding. The dimly lit hallways, flickering lights, and unsettling sounds create an environment that keeps players on the edge of their seats. Each step forward brings a palpable sense of dread and anticipation, as the game takes unexpected turns and reveals terrifying secrets lurking in the shadows."
               para2="The attention to detail in the hospital's design creates a fully immersive experience, with intricate textures, haunting artwork, and subtle clues that hint at the darkness that permeates the surroundings. The dynamic sound design further intensifies the horror, with creaking floors, echoing footsteps, and eerie whispers that seem to follow players wherever they go."
               />



            </div>
        </div>
    )
}