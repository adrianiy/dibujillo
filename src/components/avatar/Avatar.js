import React from "react";
import "./Avatar.css";

export default function Avatar({ image, title }) {
    return (
        <div className="AvatarContainer" title={title}>
            <div className="Avatar">
                <img src={image} alt="avatar" />
            </div>
        </div>
    );
}
