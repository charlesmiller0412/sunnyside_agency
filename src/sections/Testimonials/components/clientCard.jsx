import React from "react";

export const ClientCard = (props) => {
    return (
        <div className="clientCard">
            <div className="clientCard__image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="clientCard__text">{props.text}</div>
            <div className="clientCard__info">
                <div className="clientCard__info--name">{props.name}</div>
                <div className="clientCard__info--title">{props.title}</div>
            </div>
        </div>
    );
};
