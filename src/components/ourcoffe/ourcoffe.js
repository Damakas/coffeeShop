import React from "react";
import './ourcoffe.css'
import drinkCoffee from '../img/our-coffee-drink-coffee.jpg';
import logoBlack from '../img/Beans-logo-black.svg';
import { Container } from "react-bootstrap";
import Cards from '../cards/cards';

function OurCoffe() {

    return (
        <Container>
            <section className="ourcoffee-top">
                <div className="ourcoffee-top_head">
                    <h1>Our Coffee</h1>
                </div>
                <div className="ourcoffee-top_main">
                    <div>
                        <img src={drinkCoffee} alt="drink coffee" />
                    </div>
                    <div className="ourcoffee-top_main_text">
                        <div>
                            <h1>About our beans</h1>
                            <img src={logoBlack} alt="logo black" />
                        </div>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p> Afraid at highly months do things on at. Situation recommend objection do intention <br />
                            so questions. <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </div>
                </div>
                <div className="line-container">
                    <div className="line"></div>
                </div>
            </section>
            <section className="ourcoffee-main">
                <Cards />
            </section>
        </Container >

    )
}

export default OurCoffe