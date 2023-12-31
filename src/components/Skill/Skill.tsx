import React from 'react';
import './Skill.css';
import { skills } from '../../info';
import SkillCard from '../SkillCard/SkillCard';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section--skill" id="plot">
            <div className="inner">

                <Fade left duration={800}>
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.subTitle}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-desc">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="profile-img center">
            <img src={require("../../assets/hviwb1o6.png")} alt="profile" />
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Skill;