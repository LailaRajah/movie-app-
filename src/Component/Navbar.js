import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function   NavScrollExample ({setsearch, setrate , add}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {

    add({title:newmovie.title, poster :newmovie.poster, rating:newmovie.rating})
  }


  const [newmovie, setnewmovie] =useState({
    title:"",
    poster:"",
    rating:0,

  })
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            onChange={(e)=>setsearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Form.Select aria-label="Default select example" style={{width:'160px'}} onChange={(e)=>setrate(parseInt(e.target.value))}>
      <option value="0">Filter by rate</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
    <Button variant="success" style={{marginLeft:"5px"}} onClick={handleShow}>
    Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control style={{marginBottom:"15px"}} type="text" placeholder="Poster link" onChange={(e)=>setnewmovie({...newmovie,poster : e.target.value})}/>
        <Form.Control style={{marginBottom:"15px"}} type="text" placeholder="Movie Name" onChange={(e)=>setnewmovie({...newmovie,title : e.target.value})}/>
        <Form.Select aria-label="Default select example"  onChange={(e)=>setnewmovie({...newmovie,rating : e.target.value})}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={() => {handleClose() ; handleSubmit();}}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;