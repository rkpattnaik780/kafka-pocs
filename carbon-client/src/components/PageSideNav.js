import React from "react";

import {
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";


export const PageSideNav = () => (
    <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
    >
        <SideNavItems>
            <SideNavMenu title="L0 menu">
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                    L0 menu item
            </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
            <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
        </SideNavItems>
    </SideNav>
);