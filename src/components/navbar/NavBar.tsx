import React, { useState } from "react";
import './NavBar.scss';
import {
    MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem, MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";

export default function NavBar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <MDBContainer>
                <MDBNavbar expand="lg">
                    <MDBNavbarBrand href='/'>tktong</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}>
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar={true} show={showBasic}>
                        <MDBNavbarNav fullWidth={false} right={true}>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/'>Home</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled={true}>About</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled={true}>Resume</MDBNavbarLink>
                            </MDBNavbarItem>
                            {/*<MDBNavbarItem>*/}
                            {/*    <MDBDropdown>*/}
                            {/*        <MDBDropdownToggle className='nav-link' tag='a' role="button">*/}
                            {/*            TIL*/}
                            {/*        </MDBDropdownToggle>*/}
                            {/*        <MDBDropdownMenu>*/}
                            {/*            <MDBDropdownItem>*/}
                            {/*                <MDBDropdownLink>Engineering</MDBDropdownLink>*/}
                            {/*            </MDBDropdownItem>*/}
                            {/*            <MDBDropdownItem>*/}
                            {/*                <MDBDropdownLink>Badminton</MDBDropdownLink>*/}
                            {/*            </MDBDropdownItem>*/}
                            {/*        </MDBDropdownMenu>*/}
                            {/*    </MDBDropdown>*/}
                            {/*</MDBNavbarItem>*/}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </MDBContainer>
        </header>
    )
}
