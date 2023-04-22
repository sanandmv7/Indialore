import React from "react";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";

function Update({ details }) {
    const { name, item, time} = details;
  return (
    <div className="update">
      <div className="profile-photo">
        <span>
          <FaceSharpIcon />
        </span>
      </div>
      <div className="message">
        <p>
          <b>{name}</b> received order for {item}.
        </p>
        <small className="text-muted">{time} ago</small>
      </div>
    </div>
  );
}

export default Update;
