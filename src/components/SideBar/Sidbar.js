import React, { useState, useEffect, useRef } from "react";

const Sidbar = (props) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !props.sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      props.setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return;
      props.setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={` absolute left-0 top-0  my-4 mr-3 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform  xl:translate-x-0 z-9999 flex flex-col overflow-y-hidden bg-clip-border bg-gradient-to-b from-blue-600 to-blue-400  shadow-blue-500/40 shadow-lg duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        props.sidebarOpen ? "translate-x-0" : "-translate-x-80"
      }`}
    >
      {/*  <!-- START SIDEBAR HEADER --> */}
      <div className="flex items-center gap-5  py-6 px-8 ">
        <img
          src={props.UserImg}
          alt="Avatar user"
          className="w-10 md:w-16 md:h-16 rounded-full "
        />

        <div>
          <span className="block text-lg font-bold text-white font-sans ">
            {props.userName}
          </span>
          <span className="block text-md text-gray font-sans">
            {props.userRoll}
          </span>
        </div>
        <button
          ref={trigger}
          onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={props.sidebarOpen}
          className=" absolute right-4  block lg:hidden text-gray-3"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!--END SIDEBAR HEADER --> */}

      {/* <!-- START Sidebar Menu --> */}
      <nav className="m-4">
        {/* <!-- Menu Group --> */}

        <ul className="mb-4 flex flex-col gap-1">
          {/* <!-- Menu Item Dashboard --> */}

          {props.children}

          {/* <!-- Menu Item Dashboard --> */}
        </ul>
      </nav>
      {/* <!-- ENDSidebar Menu --> */}
    </aside>
  );
};

export default Sidbar;
