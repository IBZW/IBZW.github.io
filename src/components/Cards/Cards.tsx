import React from 'react';
import './Cards.css';
import { achievements } from '../../info';
import ACard from '../ACards/ACards'

function Achievement() {
    return (
        <section className="section--achievement" id="characters">
            <div className="inner">

                <div className="achieve-title">
                    <p>{achievements.title}</p>
                </div>

                <div className="achieve-subtitle">
                    <p>{achievements.subTitle}</p>
                </div>

                <div className="achieve-content">
                    {achievements.lists.map((list, i) => {
                        return <ACard achieves={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Achievement;