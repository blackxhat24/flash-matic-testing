import React from 'react'
import logo from '../../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><img src={logo} alt="Logo" height="50"/>Flash Matic</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Dashboard</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/swap">Swap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/reinvestment">Reinvestment</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/calculator">Calculator</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
