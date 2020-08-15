import React from "react";
function Header() {
  return (
    <React.Fragment>
      <h2>Customer Details</h2>

      <input
        className="input"
        type="text"
        //style={{ borderRadius: "5px", borderColor: "#a7a8ca", width: "20rem" }}
      />
    </React.Fragment>
  );
}
export default Header;
