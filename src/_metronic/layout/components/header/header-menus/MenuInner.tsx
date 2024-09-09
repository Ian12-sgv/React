import { useIntl } from "react-intl";
import { MenuItem } from "./MenuItem";
import { MenuInnerWithSub } from "./MenuInnerWithSub";
import { MegaMenu } from "./MegaMenu";

export function MenuInner() {
  const intl = useIntl();
  return (
    <>
      <MenuItem
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        to="/dashboard"
      />
      <MenuItem title="Layout Builder" to="/builder" />
      <MenuInnerWithSub
        title="Crafted"
        to="/crafted"
        menuPlacement="bottom-start"
        menuTrigger="click"
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title="Pages"
          to="/crafted/pages"
          fontIcon="bi-archive"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title="Profile"
            to="/crafted/pages/profile"
            hasArrow={true}
            hasBullet={true}
            menuPlacement="right-start"
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem
              to="/crafted/pages/profile/overview"
              title="Overview"
              hasBullet={true}
            />
            <MenuItem
              to="/crafted/pages/profile/projects"
              title="Projects"
              hasBullet={true}
            />
            <MenuItem
              to="/crafted/pages/profile/campaigns"
              title="Campaigns"
              hasBullet={true}
            />
            <MenuItem
              to="/crafted/pages/profile/documents"
              title="Documents"
              hasBullet={true}
            />
            <MenuItem
              to="/crafted/pages/profile/connections"
              title="Connections"
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title="Wizards"
            to="/crafted/pages/wizards"
            hasArrow={true}
            hasBullet={true}
            menuPlacement="right-start"
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem
              to="/crafted/pages/wizards/horizontal"
              title="Horizontal"
              hasBullet={true}
            />
            <MenuItem
              to="/crafted/pages/wizards/vertical"
              title="Vertical"
              hasBullet={true}
            />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        {/* ACCOUNT */}
        <MenuInnerWithSub
          title="Accounts"
          to="/crafted/accounts"
          fontIcon="bi-person"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to="/crafted/account/overview"
            title="Overview"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/account/settings"
            title="Settings"
            hasBullet={true}
          />
        </MenuInnerWithSub>

        {/* ERRORS */}
        <MenuInnerWithSub
          title="Errors"
          to="/error"
          fontIcon="bi-sticky"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to="/error/404" title="Error 404" hasBullet={true} />
          <MenuItem to="/error/500" title="Error 500" hasBullet={true} />
        </MenuInnerWithSub>

        {/* Widgets */}
        <MenuInnerWithSub
          title="Widgets"
          to="/crafted/widgets"
          fontIcon="bi-layers"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to="/crafted/widgets/lists"
            title="Lists"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/widgets/statistics"
            title="Statistics"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/widgets/charts"
            title="Charts"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/widgets/mixed"
            title="Mixed"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/widgets/tables"
            title="Tables"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/widgets/feeds"
            title="Feeds"
            hasBullet={true}
          />
        </MenuInnerWithSub>

        {/* V8 */}

        <MenuInnerWithSub
          title="V8"
          to="/crafted/V8"
          fontIcon="bi-layers"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            to="/crafted/v8/restaurante"
            title="restaurante"
            hasBullet={true}
          >
            <MenuItem
              to="/crafted/v8/restaurante/mesaReservacion"
              title="mesa_reservacion"
              hasBullet={true}
            />
          </MenuInnerWithSub>

          <MenuItem
            to="/crafted/v8/Takeaway"
            title="Takeaway"
            hasBullet={true}
          />
          <MenuItem
            to="/crafted/v8/OrdenPay "
            title="OrdenPay "
            hasBullet={true}
          />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub
        title="Apps"
        to="/apps"
        menuPlacement="bottom-start"
        menuTrigger="click"
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title="Chat"
          to="/apps/chat"
          icon="message-text-2"
          hasArrow={true}
          menuPlacement="right-start"
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to="/apps/chat/private-chat"
            title="Private Chat"
            hasBullet={true}
          />
          <MenuItem
            to="/apps/chat/group-chat"
            title="Group Chart"
            hasBullet={true}
          />
          <MenuItem
            to="/apps/chat/drawer-chat"
            title="Drawer Chart"
            hasBullet={true}
          />
        </MenuInnerWithSub>
        <MenuItem
          icon="abstract-28"
          to="/apps/user-management/users"
          title="User management"
        />
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title="Layouts"
        to="/mega-menu"
        menuPlacement="bottom-start"
        menuTrigger="click"
      >
        <MegaMenu />
      </MenuInnerWithSub>
    </>
  );
}
