import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './HomePage';
import PostsPage from './PostsPage';
import TodosPage from './TodosPage';

const RouterPage = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" className='py-3'>
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100%' }}
                            navbarScroll>
                        </Nav>
                        <Link to="/">HOME</Link>
                        <Link to="/posts">게시글</Link>
                        <Link to="/todos">할일 목록</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/posts" component={PostsPage}/>
                <Route path="/todos" component={TodosPage}/>
            </Switch>
        </>
    )
}

export default RouterPage