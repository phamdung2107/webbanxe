import React, { useState } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeartIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserData = ({ user }) => {

  const history = useNavigate();

  const [open, setOpen] = useState(false);
  
  const scroolEffect = useRef(null);

  window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        document.querySelector(".speedDial").classList.add("active");
    }
    else{
      document.querySelector(".speedDial").classList.remove("active");
    }
  })

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    {
      icon: (
        <ShoppingCartIcon
        style={{
         color: "tomato",
        }}
        />
      ),
      name: `Đã mua (3})`,
      func: cart,
    },
    {
      icon:
          <HeartIcon 
          style={{
            color: "tomato",
           }}
          />,
      name: `Xem sau (4)`,
      func: favourite,
    },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "Creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history("/dashboard");
  }
  function home() {
    history("/");
  }
  function cart() {
    history("/cart");
  }
  function favourite() {
    history("/favourites");
  }
  function account() {
    history("/me");
  }

  function logoutUser() {
   
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        useref={scroolEffect}
        icon={
          <img
            className="speedDialIcon"
            src="/profile.png"
            alt="Profile"
            style={{
              position:"fixed"
            }}
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={false}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserData;
