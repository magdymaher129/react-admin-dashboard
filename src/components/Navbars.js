import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import CreatePage from "./CreatePage";
import CreatePost from "./CreatePost";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import Login from "../pages/login";

const Navbars = () => {
  const [show, setShow] = useState(false);
  const [postshow, setPostShow] = useState(false);
  const [usershow, setUserShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginshow, setLoginshow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  const handleUserShow = () => setUserShow(true);
  const handlePostClose = () => setPostShow(false);
  const handleUserClose = () => setUserShow(false);
  const handleLoginShow = () => setLoginshow(true);
  const handleLoginClose = () => setLoginshow(false);
  return (
    <>
   
      <Navbar collapseOnSelect expand='lg' bg='danger' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>AdminStrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
         
              <Link to='/' className="link">Dashboard</Link>
              <Link to='/pages' className="link">pages</Link>
              <Link to='/posts' className="link">posts</Link>
              <Link to='/users' className="link">users</Link>
            </Nav>
            <section>
          <Dropdown >
            <Dropdown.Toggle
              variant='light'
              id='dropdown-basic'
              style={{ marginTop: "5px"}}
            >
              Create Controls
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1' onClick={handleShow}>
                Create Page
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2' onClick={handlePostShow}>Create Post</Dropdown.Item>
              <Dropdown.Item href='#/action-3' onClick={handleUserShow}>Create User</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         
        </section>
            <Nav>
              <Nav.Link eventKey={2} href='#memes'>
                <span style={{ margin: "0 10px" }}>
                  <i class='fa fa-user' aria-hidden='true'></i>
                </span>
                WELCOME Dank
              </Nav.Link>
              
              <li><button onClick={handleLoginShow}style={{backgroundColor:'#dc3545', border:'0',color:'rgba(255, 255, 255, 0.55)',marginTop:'7px'}}>
                <span style={{ marginRight: "10px" }}>
                  <i class='fa fa-sign-in' aria-hidden='true'></i>
                </span>
            Logout
            </button>  </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className='second-navbar '>
        <div className='nav-brand '>
          {" "}
          <div></div>
          <i className='fa fa-gear' style={{fontSize:'3rem'}}></i>
        </div>
        <h4 className='navbar-header'>Dashboard</h4>
        <h8 className='nav-details'>mange your site</h8>
       
      </section>
    <CreatePage  show={show} setShow={setShow} handleClose={handleClose}/>
    <CreatePost  postshow={postshow} setPostShow={setPostShow} handlePostClose={handlePostClose}/>
    <CreateUser  usershow={usershow} setUserShow={setUserShow} handleUserClose={handleUserClose}/>
    <Login loginshow={loginshow} setLoginshow={setLoginshow} handleLoginClose={handleLoginClose}/>
    </>
  );
};

export default Navbars;
