import { Outlet } from "react-router-dom";
import HeaderComponant from "../headder component/HeaderComponant";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="h-auto">
        <HeaderComponant />
      </div>
      <div className="row h-auto">
        <div className="col-2 pr-0">
          <Sidebar />
        </div>
        <div className="col-10 pl-0 mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
