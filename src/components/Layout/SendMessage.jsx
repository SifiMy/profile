import React from "react";
import { Link } from "react-router-dom";

const SendMessage = ({ mailto, label }) => {
    return (
        <Link
            to='mailto:hr@sifi.my'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default SendMessage;