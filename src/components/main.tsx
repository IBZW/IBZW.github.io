import React from 'react';
import Header from './Header/Header';
import Opener from './Opener/Opener';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import OpenSource from './OpenSource/OpenSource';
import Achievement from './Cards/Cards';
import Blog from './Blog/Blog';
import End from './End/End';
import Symbols from './Cards copy/Cards';
import Footer from './Footer/Footer';
import ListCards from './ListCards/ListCards';
import Project from './Project/Project';
import { greeting, skills, experience, openSourceProjects, projects, achievements, achievements2, blogs, final } from '../info';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Opener />}
			{skills.view && <Skill />}
			{achievements.view && <Achievement />}
			{experience.view && <ListCards />}
			{openSourceProjects.view && <OpenSource />}
			{projects.view && <Project />}
			{achievements2.view && <Symbols />}
			{blogs.view && <Blog />}
			{final.view && <End />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;