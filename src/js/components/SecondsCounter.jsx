import React from "react";
import Digit from "./Digit";

const SecondsCounter = ({ timer }) => {


  const getDigits = () => {
    const counterStr = String(timer).padStart(6, "0");
    return counterStr.split("");
  };


  const cardStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: "0%",
    margin: "10px",
    width: "98.5%",
  };
  

  const colStyle = {
    fontSize: "xxx-large",
    borderRadius: "5px",
    border: "groove",
    borderColor: "rgba(0, 0, 0, 0.62)",
    marginRight: "1rem",
    height: "100px",
  };

  return (
    <article className="card" style={cardStyle}>
      <div className="card-body">
        <div className="row" style={{ justifyContent: "center", fontSize: "xxx-large" }}>
          <div className="col-1" style={colStyle}>
            <i className="fa-regular fa-clock" style={{ textAlignLast: "center", marginTop: "1.5rem" }}></i>
          </div>

          {getDigits().map((digit, index) => (
            <div key={index} className="col-1" style={colStyle}>
              <Digit value={digit} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};



export default SecondsCounter
