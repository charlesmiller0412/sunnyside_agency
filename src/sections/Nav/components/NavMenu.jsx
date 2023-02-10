import React from "react";
import { NavLinks } from "./NavLinks";
export const NavMenu = (props) => {
    return (
        <div
            className={
                props.showMenu ? "nav__menu nav__menu--active" : "nav__menu"
            }
        >
            <NavLinks />
        </div>
    );
};
