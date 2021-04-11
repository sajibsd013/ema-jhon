import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggler = ()=>{
        setNavOpen(!navOpen);
    }

    return (
        <div>
            <Navbar dark color="dark" expand='sm'>
                <div className='container'>
                    <NavbarToggler onClick={toggler}/>
                    <Collapse isOpen={navOpen} navbar>
                        <Nav navbar className="m-auto">
                            <NavItem>
                                <Link className="nav-link active" to='/'>Shop</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/review'>Order Review</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/inventory'>Manage Inventory</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/about'>About</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>

            </Navbar>
        </div>
    );
};

export default Navigation;