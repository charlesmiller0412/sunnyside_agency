import React from "react";
import Arrow from "../assets/icon-arrow-down.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Hero() {
    return (
        <section className="hero">
            {/* TODO: add animations for fun */}
            <AnimationOnScroll
                animateIn="animate__slideInLeft"
                animateOnce="true"
            >
                <h1 className="hero__heading">we are creatives</h1>
            </AnimationOnScroll>
            <AnimationOnScroll
                animateIn="animate__fadeInDown"
                delay={1000}
                animateOnce="true"
            >
                <img src={Arrow} alt="arrow pointing down" />
            </AnimationOnScroll>
        </section>
    );
}
