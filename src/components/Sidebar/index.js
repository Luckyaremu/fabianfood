import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap,
SidebarRoute} from "./SidebarElements.js";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onclick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full menu</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to="/">Order now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
