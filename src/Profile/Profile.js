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
        <h2
          style={{
            backgroundColor: "lightblue",
            width: 150,
            textAlign: "center",
            margin: "auto",
            borderRadius: 5,
          }}
        >
          {props.Fullname}
        </h2>
        <h3>{props.Profession}</h3>
        <p>{props.Bio}</p>
        <button
          className="button"
          onClick={() => props.handleName(" Hello " + props.Fullname)}
        >
          Show Alert
        </button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  Fullname: "rakia toumia",
  Profession: "none",
  Bio: "none",
  handleName: (name) => alert(name),
};
Profile.propTypes = {
  Fullname: PropTypes.string,
  Profession: PropTypes.string,
  Bio: PropTypes.string,
  Fullname: PropTypes.func,
};

export default Profile;
