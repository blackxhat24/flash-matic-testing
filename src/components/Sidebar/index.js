import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                        Dashboard
                    </SidebarLink>
                    <SidebarLink to="/reinvestment">
                        Reinvestment
                    </SidebarLink>
                    <SidebarLink to="/swap">
                        Swap
                    </SidebarLink>
                    <SidebarLink to="/calculator">
                        Calculator
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
