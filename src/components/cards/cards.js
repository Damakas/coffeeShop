import { Component } from "react";
import AddCards from "../examples_cards/examples-cards";
import exempleCard from '../img/best-card-3.png';
import SearchFilter from "../search-filter/search-filter";


class Cards extends Component {
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
        return (
            <div className="ourcoffee-main_cards">
                <SearchFilter filter={filter} onFilterSelect={this.onFilterSelect} onUpdateSearch={this.onUpdateSearch} />

                <div className="ourcoffee-main_cards-inner">
                    {filterData.map((item) => (
                        <AddCards
                            id={item.id}
                            // key={item.id}
                            src={exempleCard}
                            alt='Coffee'
                            name={item.name}
                            coffeeCountry={item.country}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Cards