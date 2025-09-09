import React from "react";

const Digit = ({ value }) => {


    const digitStyle = {
        fontSize: "xx-large",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        lineHeight: "100px",
        height: "100px",
        backgroundColor: "black",  
        transition: "transform 0.3s ease-in-out",
    };

    return (
        <div className="card" style={digitStyle}>
            {value}
        </div>
    );
};

export default Digit