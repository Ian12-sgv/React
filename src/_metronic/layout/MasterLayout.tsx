import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderWrapper } from "./components/header";
import { HeaderFood } from "./components/header/HeaderFood";
import { RightToolbar } from "../partials/layout/RightToolbar";
import { ScrollTop } from "./components/scroll-top";
import { FooterWrapper } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import {
  ActivityDrawer,
  DrawerMessenger,
  InviteUsers,
  UpgradePlan,
} from "../partials";
import { PageDataProvider } from "./core";
import { reInitMenu } from "../helpers";
import arrowUp from "../../assets/svg/arrowUp.svg";
import Boton from "../../app/modules/V8/components/barra/Boton";

const MasterLayout = () => {
  const location = useLocation();
  useEffect(() => {
    reInitMenu();
  }, [location.key]);

  const [activeButton, setActiveButton] = useState("original");

  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <HeaderFood />

          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <Sidebar />
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  );
};

export { MasterLayout };
