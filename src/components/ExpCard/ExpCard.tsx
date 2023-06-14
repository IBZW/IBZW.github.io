import React from 'react';
import './ExpCard.css';

function ExpCard({ experience }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <div className="expcard-main">
            <div className="inner">
                    
                <div className="expcard-first">
                    {experience.first}
                </div>
                <div className="expcard-second">
                    {experience.second}
                </div>
                <div className="expcard-third">
                    {experience.third}
                </div>

            </div>
        </div>
        </Fade>
    );
}
interface Props {
    experience : {
        first: string,
        second: string,
        third: string | number
    }
}
export default ExpCard;