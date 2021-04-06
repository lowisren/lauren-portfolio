import React from "react";
import image from "../twin-peaks.jpg";

export default function Home() {
    return (
        <main>
            <img 
             src= {image} 
             alt ="Motel from TV show Twin Peaks by David Lynch" 
             className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-gray-200 font-bold mono leading-none lg:leading-snug home-name">Nice To<br/>See You.</h1>
            </section>
        </main>
    )
}