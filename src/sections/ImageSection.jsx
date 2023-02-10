import React from "react";
import MilkD from "../assets/desktop/image-gallery-milkbottles.jpg";
import MilkM from "../assets/mobile/image-gallery-milkbottles.jpg";
import ConeD from "../assets/desktop/image-gallery-cone.jpg";
import ConeM from "../assets/mobile/image-gallery-cone.jpg";
import OrangeD from "../assets/desktop/image-gallery-orange.jpg";
import OrangeM from "../assets/mobile/image-gallery-orange.jpg";
import SugarD from "../assets/desktop/image-gallery-sugarcubes.jpg";
import SugarM from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import useMediaQuery from "../hooks/useMedia";

export default function ImageSection() {
    const matches = useMediaQuery("(min-width: 768px)");

    return (
        <section className="imageSection">
            <img src={!matches ? MilkM : MilkD} alt="" />
            <img src={!matches ? OrangeM : OrangeD} alt="" />
            <img src={!matches ? ConeM : ConeD} alt="" />
            <img src={!matches ? SugarM : SugarD} alt="" />
        </section>
    );
}
