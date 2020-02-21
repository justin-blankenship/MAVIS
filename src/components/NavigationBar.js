import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import mavisLogo from '../assets/mavisLogo.png';
import './titleStyle.css';

const Styles = styled.div`
	.navbar {
		background-color: #222;
		height: 3rem;
	}

	.navbar-brand, .navbar-nav .nav-link {
		color: #bbb;

		&:hover {
			color: white;
		}
	}

`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/">
				<img
        			src={mavisLogo}
        			width="45"
        			height="35"
        			className="m-auto p-auto"
        			alt="MAVIS Logo"
      			/>
      			<p className="navbarTitle m-auto pl-3">MAVIS</p>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item><Nav.Link href="/MAVIS/">Home</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/MAVIS/forecast">5 Day Forecast</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/MAVIS/moon">Moon</Nav.Link></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
)