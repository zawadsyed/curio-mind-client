import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import img from '../../assets/curio-mind-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Image src={img} style={{ height: '48px' }}></Image>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 d-flex gap-3">
                            <NavLink to="/courses">All Courses</NavLink>
                            <NavLink to="/faq">FAQ</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                        </Nav>
                        <Nav>{user ? user.displayName : <p>none</p>}
                            <NavLink></NavLink>
                            <Link to='/login'>
                                <Button>Log in</Button>
                            </Link>
                            <Link to='register'><Button>Registration</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;