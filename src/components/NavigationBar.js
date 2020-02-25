import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import mavisLogo from '../assets/mavisLogo.png';
import './titleStyle.css';
import '../Navbar.css';

const Styles = styled.div`
	.navbar {
		background-color: #474747;
		height: 100%;
	}

	.navbar-brand, .navbar-nav .nav-link {
		color: #000;

		&:hover {
			color: #15C8F9;
		}
	}

	.logoImage {
		width: 45px;
        height: 35px;
	}
`;


export const NavigationBar = () => (

	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/">
				<img
	    			src={mavisLogo}
	    			className="logoImage ml-4"
	    			alt="MAVIS Logo"
	  			/>
	  			<p className="navbarTitle m-auto pl-3">MAVIS</p>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto text-right">

					<Nav.Item>
						<Nav.Link href="#/">Home</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="#/forecast">5 Day Forecast</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="#/moon">Moon</Nav.Link>
					</Nav.Item>
					
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	</Styles>
	
)