import React from 'react';
import './Cards.css';
import { achievements2 } from '../../info';
import ACard from '../ACards copy/ACards'

function Achievement() {
    return (
        <section className="section--achievement" id="symbols">
            <div className="inner">

                <div className="achieve-title">
                    <p>{achievements2.title}</p>
                </div>

                <div className="achieve-subtitle">
                    <p>{achievements2.subTitle}</p>
                </div>

                <div className="achieve-content">
                    {achievements2.lists.map((list, i) => {
                        return <ACard achieves={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Achievement;