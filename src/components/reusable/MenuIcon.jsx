import React from "react";

const MenuIcon = ({ open, showExpolore, setOpen, screenSize }) => {
  return (
    <div
      className={`menu-icon ${open && "open"} ${
        open == false ? (showExpolore ? "dark" : "") : ""
      } me-0 me-md-5  ${
        screenSize == "lg" ? "d-none d-md-block" : "d-block d-md-none"
      }`}
      onClick={() => setOpen(!open)}
    >
      <small
        className={`${
          open == false
            ? showExpolore
              ? "text-black"
              : "text-white"
            : "text-white"
        }`}
      >
        MENU
      </small>
      <div className="first "></div>
      <div className="second "></div>
      <div className="third "></div>
    </div>
  );
};

export default MenuIcon;
