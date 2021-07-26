import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-container">
        <img
          className="Profilephoto"
          src={"/" + props.children + ".jpg"}
          alt="image"
        />
        <h2>{props.Fullname}</h2>
        <h3>{props.Profession}</h3>
        <p>{props.Bio}</p>
        <button onClick={() => props.alertMyInput("hello " + props.Fullname)}>
          ClickMe
        </button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  Fullname: "rakia toumia",
  Profession: "none",
  Bio: "none",
  alertMyInput: (name) => alert(name),
};
Profile.propTypes = {
  Fullname: PropTypes.string,
  Profession: PropTypes.string,
  Bio: PropTypes.string,
  Fullname: PropTypes.func,
};

export default Profile;
