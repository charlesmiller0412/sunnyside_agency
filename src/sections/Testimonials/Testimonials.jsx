import React from "react";
import { ClientCard } from "./components/clientCard";
import Emily from "../../assets/image-emily.jpg";
import Thomas from "../../assets/image-thomas.jpg";
import Jennie from "../../assets/image-jennie.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const data = [
    {
        id: 1,
        image: Emily,
        name: "Emily R.",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        title: "marketing director",
    },
    {
        id: 2,
        image: Thomas,
        name: "Thomas S.",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        title: "chief operating officer",
    },
    {
        id: 3,
        image: Jennie,
        name: "Jennie F.",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        title: "business owner",
    },
];
export default function Testimonials() {
    return (
        <section className="testimonials">
            <h4 className="testimonials__heading">client testimonials</h4>
            <AnimationOnScroll
                animateIn="animate__backInUp"
                className="testimonials__cards"
                duration={1.5}
                animateOnce="true"
            >
                {data.map((client) => (
                    <ClientCard
                        key={client.id}
                        image={client.image}
                        name={client.name}
                        text={client.text}
                        title={client.title}
                    />
                ))}
            </AnimationOnScroll>{" "}
        </section>
    );
}
