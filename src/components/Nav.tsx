import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

  export default class Navigation extends React.Component {
    render() {    
		return (
			<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
				<Navbar.Brand href="/companies">Compnaql</Navbar.Brand>
				<Nav className="mr-auto">
				{/* <Nav.Link href="/companies">Home</Nav.Link> */}
				{/* <Nav.Link href="/companies">Companies</Nav.Link> */}
				</Nav>
				<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="primary" className="searchButton">Search</Button>
				</Form>
			</Navbar>
      	);
    }
  }
