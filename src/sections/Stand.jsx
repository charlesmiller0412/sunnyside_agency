import React from "react";
import cupD from "../assets/desktop/image-stand-out.jpg";
import cupM from "../assets/mobile/image-stand-out.jpg";
import useMediaQuery from "../hooks/useMedia.jsx";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Stand() {
    const matches = useMediaQuery("(min-width: 768px)");
    return (
        <>
            <section className="stand">
                <AnimationOnScroll
                    animateIn="animate__fadeInRight"
                    className="stand__text"
                    animateOnce="true"
                >
                    {" "}
                    <h2>Stand out to the right audience</h2>
                    <p>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we’ll
                        build and extend your brand in digital places.
                    </p>
                    <a href="#" className="stand__text--link">
                        learn more
                    </a>
                </AnimationOnScroll>
                <div className="stand__image">
                    <img src={!matches ? cupM : cupD} alt="Stand out" />
                </div>
            </section>
        </>
    );
}
