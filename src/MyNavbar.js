import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillCaretRightFill } from "react-icons/bs";
function MyNavbar() {
    return (
        <>
            <Navbar expand='lg' sticky='top' fixed='top' className='nav'>
                <Container>

                    <Navbar.Brand className='Nav'><h3><IoHomeSharp className='icon' />FOOD OWNER</h3></Navbar.Brand>
                    <Nav className='ms-auto'>
                        <Nav.Link className='br'>

                            <Link className='Oppo' to={"/"}><BsFillCaretRightFill />HOME</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/about"}><BsFillCaretRightFill />ABOUT</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/contact"}> <BsFillCaretRightFill />CONTACT</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/mycard"}><BsFillCaretRightFill />MY CARD</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/myorder"}><BsFillCaretRightFill />MY ORDER</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/login"}><BsFillCaretRightFill />LOGIN</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/registretion"}><BsFillCaretRightFill />REGISTRETION</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='Oppo' to={"/profile"}><BsFillCaretRightFill />PROFILE</Link>
                        </Nav.Link>
                    </Nav>
                </Container>

            </Navbar>


        </>
    )
}

export default MyNavbar
