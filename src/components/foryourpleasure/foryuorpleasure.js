import React from "react";
import './foryourpleasure.css'
import cupCoffee from '../img/coffee-foryourpleasure.png';
import logoBlack from '../img/Beans-logo-black.svg';
import Cards from "../cards/cards";

const ForYourPleasure = () => {
    return (
        <section className="foryourpleasure-top">
            <div className="foryourpleasure-top_head">
                <h1>For your pleasure</h1>
            </div>
            <div className="foryourpleasure-top_main">
                <div>
                    <img src={cupCoffee} alt="drink coffee" />
                </div>
                <div className="foryourpleasure-top_main_text">
                    <div>
                        <h1>About our goods</h1>
                        <img src={logoBlack} alt="logo black" />
                    </div>
                    <p> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p> Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br /> As greatly removed calling pleased improve an. <br /> Last ask him cold feel met spot shy want. <br /> Children me laughing we prospect answered followed.At it went is song that held help face.</p>
                </div>
            </div>
            <div className="line-container">
                <div className="line"></div>
            </div>
            <div>
                <Cards />
            </div>
        </section>

    )
}

export default ForYourPleasure;