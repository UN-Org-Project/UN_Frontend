import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { ParentAvatar } from "../../components/assets";
import { DashboardIcon } from "../../components/assets";
import Sidbar from "../../components/SideBar/Sidbar";
import Btn from "../../components/SideBar/MenuBtn/Btn";
import Header from "../../components/HeaderDash/Header";
import NotificationBtn from "../../components/NotificationBtn/NotificationBtn";

const ParentDb = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/parent/children");
  }, []);

  return (
    <div id="view" className="flex">
      <Sidbar
        UserImg={ParentAvatar}
        name="Mhammed"
        dashbordUser="Parent Dashboard"
      >
        <Btn path="children" icon={DashboardIcon} btnName="Your Children" />
      </Sidbar>
      <div className=" flex flex-col flex-1 ml-1 gap-5 w-full">
        <Header>
          <NotificationBtn />
        </Header>

        <Outlet />
      </div>
    </div>
  );
};

export default ParentDb;
