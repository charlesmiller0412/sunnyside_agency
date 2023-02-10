import React from "react";
import cupD from "../assets/desktop/image-stand-out.jpg";
import cupM from "../assets/mobile/image-stand-out.jpg";
import useMediaQuery from "../hooks/useMedia.jsx";

export default function Stand() {
    const matches = useMediaQuery("(min-width: 768px)");
    return (
        <>
            <section className="stand">
                <div className="stand__text">
                    <h2>Stand out to the right audience</h2>
                    <p>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we’ll
                        build and extend your brand in digital places.
                    </p>
                    <a href="#" className="stand__text--link">
                        learn more
                    </a>
                </div>
                <div className="stand__image">
                    <img src={!matches ? cupM : cupD} alt="Stand out" />
                </div>
            </section>
        </>
    );
}
