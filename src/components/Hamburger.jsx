import React from "react";

export const Hamburger = (props) => (
    <svg
        width={props.width}
        height={props.height}
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        onClick={props.onClick}
    >
        <path
            d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
            fill={props.fill}
            fillRule="evenodd"
        />
    </svg>
);
