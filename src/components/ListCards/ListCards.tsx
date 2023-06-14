import React from 'react';
import { experience } from '../../info';
import ExpCard from '../ExpCard/ExpCard';
import './ListCards.css';

function ListCards() {
    return (
        <section className="section--exp" id="themes">
            <div className="inner">

                <div className="exp-title">
                    <p>{experience.title}</p>
                </div>

                <div className="exp-cards">
                    {experience.lists.map((list, i) => {
                        return <ExpCard experience={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default ListCards;