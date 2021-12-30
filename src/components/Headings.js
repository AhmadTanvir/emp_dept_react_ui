import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

export const Headings = () => {
    return (
        <Navbar color='dark' dark>
            <Container style={{ display: 'contents' }}>
                <NavbarBrand href='/'>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary' style={{ margin: '0 1rem 0' }} to='/add'>Add User</Link>
                        <Link className='btn btn-primary' to='/add_emp'>Add Employee</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
