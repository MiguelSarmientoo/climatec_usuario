import React from "react";
function Mockup() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: `url(${require("assets/img/mockup_example.png")})`,
        }}
      >
      </div>
    </>
  );
}

export default Mockup;
