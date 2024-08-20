import React from 'react';
import aromistico from '../img/aromistico-about.jpg';
import logoBlack from '../img/Beans-logo-black.svg';

const CardDetail = () => {

    return (
        <section className="ourcoffee-top">
            <div className="ourcoffee-top_head">
                <h1>Our Coffee</h1>
            </div>
            <div className="ourcoffee-top_main">
                <div>
                    <img src={aromistico} alt="drink coffee" />
                </div>
                <div className="ourcoffee-top_main_text">
                    <div>
                        <h1>About it</h1>
                        <img src={logoBlack} alt="logo black" />
                    </div>
                    <div className='inner-description-country'>
                        <h4>Country:</h4>
                        <p>Brasil</p>
                    </div>
                    <div className='inner-description-descr'>
                        <h4>Description:</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='inner-description-country-price'>
                        <h4>Price:</h4>
                        <p>16.99$</p>
                    </div>
                </div>
            </div>
            <div className="line-container">
                <div className="line"></div>
            </div>
        </section>
    );
};

export default CardDetail;