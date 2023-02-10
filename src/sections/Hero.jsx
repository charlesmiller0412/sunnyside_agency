import React from "react";
import Arrow from "../assets/icon-arrow-down.svg";

export default function Hero() {
    return (
        <section className="hero">
            {/* TODO: add animations for fun */}
            <h1 className="hero__heading">we are creatives</h1>
            <img src={Arrow} alt="arrow pointing down" />
        </section>
    );
}
