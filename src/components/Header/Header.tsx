/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Header.css';
import { greeting, skills, experience, openSourceProjects, achievements, blogs, final, achievements2 } from '../../info';

function Header() {
	
	const onClickMenu = function(): void {
		if (window.innerWidth < 768) {
			let navMenu = document.getElementById("toggle-nav");
			if (!navMenu) throw new Error("HTML Error!");
			if (navMenu.className === "nav-menu") {
				navMenu.className += " responsive";
			} else {
				navMenu.className = "nav-menu";
			}
		}
	}

	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<a href="/">{greeting.username}</a>
				</div>
				
				<div className="icon">
					<a href="#toggle-nav" className="icon fas fa-bars" onClick={onClickMenu}></a>
				</div>

				<ul className="nav-menu" id="toggle-nav">
					{skills.view && <li className="nav-list">
						<a href="#plot" onClick={onClickMenu}>
							Plot
						</a>
					</li>}
					{achievements.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#characters">
							Characters
						</a>
					</li>}
					{experience.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#themes">
							Themes
						</a>
					</li>}
					{openSourceProjects.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#opensource">
							Open Source
						</a>
					</li>}
					{achievements2.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#symbols">
							Symbols
						</a>
					</li>}
					{blogs.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#blog">
							Blogs
						</a>
					</li>}
					{final.view && <li className="nav-list" onClick={onClickMenu}>
						<a href="#end">
							Bottom
						</a>
					</li>}
				</ul>

			</div>
		</header>
	);
}
export default Header;