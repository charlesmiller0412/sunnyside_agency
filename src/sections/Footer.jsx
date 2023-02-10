import React from "react";
import { useState } from "react";
import { Logo } from "../components/Logo";
import { Facebook } from "../components/Facebook";
import { Instagram } from "../components/Instagram";
import { Twitter } from "../components/Twitter";
import { Pinterest } from "../components/Pinterest";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <a href="#">
                    <Logo fill="#2C7566" width="170px" height="33px" />
                </a>
            </div>
            <div className="footer__links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className="footer__social">
                <a href="#">
                    <Facebook fill="#2C7566" height="20px" width="20px" />
                </a>
                <a href="#">
                    <Instagram fill="#2C7566" height="20px" width="20px" />
                </a>
                <a href="#">
                    <Twitter fill="#2C7566" height="20px" width="20px" />
                </a>
                <a href="#">
                    <Pinterest fill="#2C7566" height="20px" width="20px" />
                </a>
            </div>
        </div>
    );
}
