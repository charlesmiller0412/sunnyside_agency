import React from "react";
import Footer from "./sections/Footer";
import GraphicPhotography from "./sections/GraphicPhotography";
import Hero from "./sections/Hero";
import ImageSection from "./sections/ImageSection";
import Nav from "./sections/Nav/Nav";
import Stand from "./sections/Stand";
import Testimonials from "./sections/Testimonials/Testimonials";
import Transform from "./sections/transform";

export function App() {
    return (
        <div className="header">
            <header className="header">
                <Nav />
            </header>
            <main>
                <Hero />
                <Transform />
                <Stand />
                <GraphicPhotography />
                <Testimonials />
                <ImageSection />
            </main>
            <Footer>
                <Footer />
            </Footer>
        </div>
    );
}
