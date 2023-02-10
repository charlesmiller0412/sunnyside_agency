import React from "react";
import eggD from "../assets/desktop/image-transform.jpg";
import eggM from "../assets/mobile/image-transform.jpg";
import useMediaQuery from "../hooks/useMedia.jsx";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Transform() {
    const matches = useMediaQuery("(min-width: 768px)");
    return (
        <>
            <div className="transform">
                <AnimationOnScroll
                    animateIn="animate__fadeInLeft"
                    className="transform__text"
                    animateOnce="true"
                >
                    <h2>Transform your brand</h2>
                    <p>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </p>
                    <a href="#" className="transform__text--link">
                        learn more
                    </a>
                </AnimationOnScroll>
                <div className="transform__image">
                    <img
                        src={!matches ? eggM : eggD}
                        alt="Transform your brand"
                    />
                </div>
            </div>
        </>
    );
}
