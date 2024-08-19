import React from "react";
import { Container } from "react-bootstrap";
import logoBlack from '../img/Beans-logo-black.svg'
import beanLogoWhite from '../img/Beans-logo-white.svg';
import logoCard from '../img/solimo-coffee.png';
import bestCard from '../img/best-card-2.png';
import bestCard2 from '../img/best-card-3.png';
import AddCards from "../examples_cards/examples-cards";
import './main.css'

const Main = () => {
    return (
        <Container>
            <section className="main">
                <div className="main-headname">
                    <h1>Everything You Love About Coffee</h1>
                    <img src={beanLogoWhite} alt="Белый переход" />
                </div>
                <div className="main-name">
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button className="main-name_btn">More</button>
                </div>
            </section>
            <section className="main-middle">
                <div className="pt-4"><h1>About Us</h1></div>
                <div><img src={logoBlack} alt="черные бобы переход" /></div>
                <div className="about-text"><p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
                    <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</p>
                </div>
            </section>
            <section className="main-bottom">
                <div><h1>Our best</h1></div>
                <div className="main-bottom-cards">
                    <AddCards src={logoCard} alt='Coffee' name={'Solimo Coffee Beans 2 kg'} price={10.73} />
                    <AddCards src={bestCard} alt='Coffee' name={'Presto Coffee Beans 1 kg'} price={15.99} />
                    <AddCards src={bestCard2} alt='Coffee' name={'AROMISTICO Coffee 1 kg'} price={6.99} />
                </div>
            </section >
        </Container >
    )
}

export default Main;