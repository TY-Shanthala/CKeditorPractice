import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import "./sidebar.scss";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: (
      <i>
        <DashboardOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/",
    section: "",
  },
  {
    display: "users",
    icon: (
      <i>
        <PeopleAltOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/started",
    section: "started",
  },
  {
    display: "Roles",
    icon: (
      <i>
        <ManageAccountsIcon fontSize="small" />
      </i>
    ),
    to: "/user",
    section: "user",
  },
  {
    display: "Categories",
    icon: (
      <i>
        <CategoryOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/calendar",
    section: "calendar",
  },
  {
    display: "Community",
    icon: (
      <i>
        <GroupsOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "FAQs",
    icon: (
      <i>
        <ContactSupportOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
  {
    display: "Support",
    icon: (
      <i>
        <SupportAgentOutlinedIcon fontSize="small" />
      </i>
    ),
    to: "/order",
    section: "order",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //   const [stepHeight, setStepHeight] = useState(0);
  //   const sidebarRef = useRef();
  //   const indicatorRef = useRef();
  const location = useLocation();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       const sidebarItem = sidebarRef.current.querySelector(
  //         ".sidebar__menu__item"
  //       );
  //       indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //       setStepHeight(sidebarItem.clientHeight);
  //     }, 50);
  //   }, []);

  // change active index on url search
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      {/* <div className="sidebar__logo">
            Animate
        </div> */}
      <div
        //   ref={sidebarRef}
        className="sidebar__menu"
      >
        <div
        //   ref={indicatorRef}
        //   className="sidebar__menu__indicator"
        //   style={{
        //     transform: `translateX(-50%) translateY(${
        //       activeIndex
        //       //   activeIndex * stepHeight
        //     }px)`,
        //   }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link className="text-decoration-none" to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
