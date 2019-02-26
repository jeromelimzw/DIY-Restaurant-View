import React from "react";

const NavBar = () => {
  return (
    <div className="mv5 f1 flex justify-between purple">
      <div className="pointer dim">
        <small>
          hamb
          <i className=" fas fa-hamburger " />
          rders
        </small>
      </div>
      <i>·</i>
      <a className="pointer dim">Bookings</a>
      <i
        onClick={() => {
          alert("Don't Click Me!!");
        }}
      >
        ·
      </i>
      <a
        className="pointer dim"
        onClick={() => {
          alert("You do not have permission to view this page.");
        }}
      >
        Admin
      </a>
      <i>·</i>
      <i
        className=" pointer fas fa-sign-out-alt dim "
        onClick={() => {
          alert("You have been logged out.");
        }}
      />
    </div>
  );
};

export default NavBar;
