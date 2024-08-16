import React from "react";
import './ourcoffe.css'
import drinkCoffee from '../img/our-coffee-drink-coffee.jpg';
import logoBlack from '../img/Beans-logo-black.svg';
import { Container } from "react-bootstrap";
import AddCards from "../cards/cards";
import exempleCard from '../img/best-card-3.png'
const OurCoffe = () => {
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
                <div className="ourcoffee-main_search-panel">
                    <div className="ourcoffee-main_search">
                        <label htmlFor="search"> Looking for</label>
                        <input type="search" placeholder="start typing here..." />
                    </div>
                    <div className="ourcofffee-main_filter">
                        <p>Or filter</p>
                        <div className="ourcofffee-main_filter-btns">
                            <button>Brazil</button>
                            <button>Kenya</button>
                            <button>Columbia</button>
                        </div>
                    </div>
                </div>
                <div className="ourcoffee-main_cards">
                    <div className="ourcoffee-main_cards-inner">
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                    </div>
                    <div className="ourcoffee-main_cards-inner">
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} coffeeCountry={'Kenya'} price={10.73} />
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                        <AddCards src={exempleCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                    </div>
                </div>
            </section>
        </Container>

    )
}

export default OurCoffe