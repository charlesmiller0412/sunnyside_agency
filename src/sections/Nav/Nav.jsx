import React, { useLayoutEffect, useState } from "react";
import { Logo } from "../../components/Logo";
import { NavBtn } from "./components/NavBtn";
import { NavLinks } from "./components/NavLinks";
import useMediaQuery from "../../hooks/useMedia";
import { NavMenu } from "./components/NavMenu";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const matches = useMediaQuery("(min-width: 768px)");

    useScrollPosition(({ currPos }) => {
        if (currPos.y < 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    useLayoutEffect(() => {
        matches && setShowMenu(false);
    });

    return (
        <div
            className="nav"
            id="nav"
            style={{ background: scrolled ? "#FFFFFF" : "transparent" }}
        >
            <div className="nav__logo" id="nav__logo">
                <a href="#">
                    <Logo
                        fill={scrolled ? "#24303E" : "#FFFFFF"}
                        width={matches ? "170px" : "123px"}
                        height={matches ? "33px" : "24px"}
                    />
                </a>
            </div>
            {matches ? (
                <NavLinks scrolled={scrolled} matches={matches} />
            ) : (
                <NavBtn
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                    matches={matches}
                    fill={scrolled ? "#24303E" : "#FFFFFF"}
                />
            )}
            <NavMenu showMenu={showMenu} />
        </div>
    );
}
