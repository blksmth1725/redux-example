import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1> Profile Page</h1>
      <p className="ptag-text">Name: {user.name}</p>
      <p className="ptag-text">Age: {user.age}</p>
      <p className="ptag-text">Email: {user.email}</p>
    </div>
  );
}

export default Profile;
