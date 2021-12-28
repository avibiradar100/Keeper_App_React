import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{ position: "absolute", bottom: `0px`, left: `40%` }}>
        Copyright ⓒ {year}
      </p>
    </footer>
  );
}

export default Footer;
