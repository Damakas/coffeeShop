import React from "react";
import { Component } from "react";
import './ourcoffe.css'
import drinkCoffee from '../img/our-coffee-drink-coffee.jpg';
import logoBlack from '../img/Beans-logo-black.svg';
import { Container } from "react-bootstrap";
import AddCards from "../cards/cards";
import exempleCard from '../img/best-card-3.png';


class OurCoffe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
                {
                    id: 2, name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 15.99,
                },
                { id: 3, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99 },
                { id: 4, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99 },
                { id: 5, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99 },
                { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99 },
            ],
            term: '',
            filter: '',
        }
    }

    searchEmp = (item, term) => {
        if (term.length === 0) {
            return item
        }

        return item.filter(item => {
            return item.name.toLowerCase().startsWith(term.toLowerCase());
        })
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term })
    }

    filterPost = (item, filter) => {
        switch (filter) {
            case 'Brazil':
                return item.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return item.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return item.filter(item => item.country === 'Columbia');

            default:
                return item
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }


    render() {
        const { data, term, filter } = this.state;
        const filterData = this.filterPost(this.searchEmp(data, term), filter);
        const buttonsData = [
            { name: 'Brazil', label: 'Brazil' },
            { name: 'Kenya', label: 'Kenya' },
            { name: 'Columbia', label: 'Columbia' },
        ];
        const buttons = buttonsData.map(({ name, label }) => {
            const active = this.state.filter === name;
            const clazz = active ? 'ourcofffee-main_filter-btn-active' : 'ourcofffee-main_filter-btn'
            return (
                <button
                    className={`ourcofffee-main_filter-btn ${clazz}`}
                    key={name}
                    onClick={() => this.onFilterSelect(name)}>{label}
                </button>
            )
        });

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
                            <input
                                type="search"
                                placeholder="start typing here..."
                                value={this.state.term}
                                onChange={this.onUpdateSearch} />
                        </div>
                        <div className="ourcofffee-main_filter">
                            <p>Or filter</p>
                            <div className="ourcofffee-main_filter-btns">
                                {buttons}
                                {/* <button>Brazil</button>
                                <button>Kenya</button>
                                <button>Columbia</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="ourcoffee-main_cards">
                        <div className="ourcoffee-main_cards-inner">
                            {filterData.map((item, index) => (
                                <AddCards
                                    key={index}
                                    src={exempleCard}
                                    alt='Coffee'
                                    name={item.name}
                                    coffeeCountry={item.country}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Container >

        )
    }

}

export default OurCoffe