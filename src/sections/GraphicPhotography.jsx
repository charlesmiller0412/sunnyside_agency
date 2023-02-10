import React from "react";
import DesignD from "../assets/desktop/image-graphic-design.jpg";
import DesignM from "../assets/mobile/image-graphic-design.jpg";
import PhotoD from "../assets/desktop/image-photography.jpg";
import PhotoM from "../assets/mobile/image-photography.jpg";
import useMediaQuery from "../hooks/useMedia.jsx";

export default function GraphicPhotography() {
    const matches = useMediaQuery("(min-width: 768px)");

    return (
        <div className="graphicPhotography">
            <div className="graphicPhotography__graphic">
                <img src={!matches ? DesignM : DesignD} alt="Graphic Design" />
                <div className="graphicPhotography__graphic--text">
                    <h3 className="graphicPhotography__graphic--text-heading">
                        graphic design
                    </h3>
                    <p className="graphicPhotography__graphic--text-p">
                        Great design makes you memorable. We deliver artwork
                        that underscores your brand message and captures
                        potential clients’ attention.
                    </p>
                </div>
            </div>
            <div className="graphicPhotography__photography">
                <img src={!matches ? PhotoM : PhotoD} alt="Photography" />
                <div className="graphicPhotography__photography--text">
                    <h3 className="graphicPhotography__photography--text-heading">
                        photography
                    </h3>
                    <p className="graphicPhotography__photography--text-p">
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    );
}
