/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import { setPage } from "../redux/formSlice";
import { setCurrentMonth, setCurrentYear } from "../redux/generalSlice";

import "./stylesheets/Navbar.scss";

import arrowRightBlue from "../assets/arrowRightBlue.svg";
import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";

export default function Navbar(headTitle) {
  const page = useSelector((state) => state.form.page);
  const currentMonth = useSelector((state) => state.general.currentMonth);
  const currentYear = useSelector((state) => state.general.currentYear);

  //   const headTitle = useSelector((state) => state.general.headTitle);
  const dispatch = useDispatch();
  if (headTitle === "Connexion" || headTitle === "Inscription") {
    dispatch(setPage(-1));
  }

  const handleChangeMonth = (direction) => {
    if (direction === "arrowRight") {
      if (currentMonth === 11) {
        dispatch(setCurrentMonth(0));
        dispatch(setCurrentYear(currentYear + 1));
      } else {
        dispatch(setCurrentMonth(currentMonth + 1));
      }
    } else if (direction === "arrowLeft") {
      if (currentMonth === 0) {
        dispatch(setCurrentMonth(11));
        dispatch(setCurrentYear(currentYear - 1));
      } else {
        dispatch(setCurrentMonth(currentMonth - 1));
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (headTitle === "Contrats") {
      dispatch(setPage(e.target.alt === "arrowLeft" ? -1 : 1));
    } else {
      handleChangeMonth(e.target.alt);
    }
  };

  return (
    <div className="header">
      <MenuLogo />
      <div className="header__month">
        <img
          onClick={(e) => {
            handleClick(e);
          }}
          src={arrowLeftBlue}
          alt="arrowLeft"
          className={page < 2 ? "hidden" : "visible"}
        />
        {/* {page === 0 ? "Contrats" : "Nouveau contrat"} */}
        {headTitle.headTitle}
        <img
          onClick={() => {
            dispatch(setPage(1));
          }}
          src={arrowRightBlue}
          alt="arrowRight"
          className={page < 1 || page > 2 ? "hidden" : "visible"}
        />
      </div>
    </div>
  );
}

function MenuLogo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Le menu se cache ici">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img key={logo} className="header__logo" src={logo} alt="logo" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 40,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CalendarMonthRoundedIcon />
          </ListItemIcon>{" "}
          Gérer mon contrat
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DateRangeRoundedIcon />
          </ListItemIcon>
          Tous mes contrats
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Ajouter un enfant
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PostAddIcon fontSize="small" />
          </ListItemIcon>
          Ajouter contrat
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          Déconnexion
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LockOpenRoundedIcon fontSize="small" />
          </ListItemIcon>
          Se connecter
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LoginRoundedIcon fontSize="small" />
          </ListItemIcon>
          S'inscrire
        </MenuItem>
      </Menu>
    </>
  );
}
