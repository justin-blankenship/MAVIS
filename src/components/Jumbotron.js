import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import stormImage from '../assets/stormImage.jpg';
import './titleStyle.css';

const Styles = styled.div`
	.jumbo {
		background: url(${stormImage}) no-repeat fixed bottom;
		background-size: cover;
		color: #ccc;
		height: 180px;
		position: relative;
		z-index: -2;
		padding: 30px;
	}

	.overlay {
		background-color: #000;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	.firstLetter {
		float: left;
		color: #000;			
	}

	.remainingLetters {
		color: #444;						
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
				<Container>
					<div className="animate one">
						<p className="firstLetter">M</p><span>e</span><span>t</span><span>e</span><span>o</span><span>r</span><span>o</span><span>l</span><span>o</span><span>g</span><span>y</span>&nbsp;
					</div>

					<div className="animate two">
						<p className="firstLetter">A</p><span>s</span><span>t</span><span>r</span><span>o</span><span>n</span><span>o</span><span>m</span><span>y</span>&nbsp;
					</div>

					<div className="animate three">
						<p className="firstLetter">V</p><span>i</span><span>r</span><span>t</span><span>u</span><span>a</span><span>l</span>&nbsp;
					</div>

					<div className="animate four">
						<p className="firstLetter">I</p><span>n</span><span>f</span><span>o</span><span>r</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>&nbsp;
					</div>

					<div className="animate five">
						<p className="firstLetter">&nbsp;S</p><span>y</span><span>s</span><span>t</span><span>e</span><span>m</span>&nbsp;
					</div>
					
				</Container>
		</Jumbo>
	</Styles>
)