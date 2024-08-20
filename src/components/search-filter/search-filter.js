import Cards from "../cards/cards";

const SearchFilter = (props) => {

    const { filter, term, onUpdateSearch } = Cards;

    const buttonsData = [
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' },
    ];


    const buttons = buttonsData.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? 'ourcofffee-main_filter-btn-active' : 'ourcofffee-main_filter-btn'

        return (
            <button
                className={`ourcofffee-main_filter-btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>{label}
            </button >
        )
    });

    return (
        <div className="ourcoffee-main_search-panel">
            <div className="ourcoffee-main_search">
                <label htmlFor="search"> Looking for</label>
                <input
                    type="search"
                    placeholder="start typing here..."
                    value={term}
                    onChange={onUpdateSearch} />
            </div>
            <div className="ourcofffee-main_filter">
                <p>Or filter</p>
                <div className="ourcofffee-main_filter-btns">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;