import React from "react";

function User(props) {
  return (
    <div>
      <button onClick={props.data}> Show alert!! </button>
    </div>
  );
}

export default User;
