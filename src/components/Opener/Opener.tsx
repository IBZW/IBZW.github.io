import React from 'react';
import './Opener.css';
import { greeting } from '../../info';
import Social from '../Social/Social';

function Opener() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
					</div>
					<div className="role">
						<span>{greeting.role}</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div>
					<div className="social-links">
						<Social />
					</div>
					<div className="wrapper-links">
						<a href="#end" id="about">Bottom &gt;</a>
						<a href={greeting.resumeLink} id="resume" target="_blank" rel="noopener noreferrer">New Page &gt;</a>
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Opener;