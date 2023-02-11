import React from "react";

export const NavLinks = (props) => {
    return (
        <ul className="navLinks">
            <li className="navLinks__link">
                <a
                    href="#"
                    aria-label="About"
                    style={{
                        color: props.matches
                            ? props.scrolled
                                ? "#24303E"
                                : "#FFFFFF"
                            : "#24303E",
                    }}
                >
                    about
                </a>
            </li>
            <li className="navLinks__link">
                <a
                    href="#"
                    aria-label="Services"
                    style={{
                        color: props.matches
                            ? props.scrolled
                                ? "#24303E"
                                : "#FFFFFF"
                            : "#24303E",
                    }}
                >
                    services
                </a>
            </li>
            <li className="navLinks__link">
                <a
                    href="#"
                    aria-label="Projects"
                    style={{
                        color: props.matches
                            ? props.scrolled
                                ? "#24303E"
                                : "#FFFFFF"
                            : "#24303E",
                    }}
                >
                    projects
                </a>
            </li>
            <li className="navLinks__link--contact">
                <a
                    href="#"
                    aria-label="Contact"
                    style={{
                        color: props.scrolled ? "#FFFFFF" : "#24303E",
                        background: props.matches
                            ? props.scrolled
                                ? "#24303E"
                                : "#FFFFFF"
                            : "#FBD600",
                    }}
                >
                    contact
                </a>
            </li>
        </ul>
    );
};
