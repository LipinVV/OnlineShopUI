import {filterTypes} from "./types";
import {useState} from "react";

const availableOptions: filterTypes = {
    colors: ['black', 'white', 'grey'],
    categories: ['sofas', 'chairs', 'desks', 'beds', 'carpets', 'cupboards'],
    minPrice: 1,
    maxPrice: 1,
    rating: false
};

export const Filter = ({options, optionsChanged}: any) => {

    const [rating, setRating] = useState(false);
    const handleChangeCheckBox = () => {
        setRating((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            rating: !rating
        })
    }

    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)
    const handleChangeMaxValue = ((evt: any) => {
        const {value} = evt.target
        setMaxValue(value)
        let newMaxPrice = +value;
        if (value >= availableOptions.maxPrice || !value) {
            optionsChanged({
                ...options,
                maxPrice: newMaxPrice
            })
        }
    })

    const handleChangeMinValue = ((evt: any) => {
        const {value} = evt.target
        setMinValue(value)
        let newMinPrice = +value;
        if (value >= availableOptions.minPrice) {
            optionsChanged({
                ...options,
                minPrice: newMinPrice
            })
        }
    })

    const [showFilter, setShowFilter] = useState(false);
    const filterShowHandler = () => {
        setShowFilter(!showFilter)
    }

    return (
        <div className='filtered-results-menu'>
            <h3 className='filtered-results-header' onClick={filterShowHandler}>unroll to filter</h3>
            {showFilter ?
                <div className='filtered-results-controls'>
                    <div className='filtered-results-categories'>
                        <h4>Category</h4>
                        {availableOptions.categories.map((category: any) => {
                            return (
                                <div key={category}>
                                    <label className='filtered-results-category' >
                                        <input
                                            type='checkbox'
                                            onChange={(evt) => {
                                                let newCategories = options.categories;
                                                if (evt.target.checked) {
                                                    newCategories.push(category)
                                                } else {
                                                    newCategories = newCategories.filter(
                                                        (selectedCategory: any) => category !== selectedCategory)
                                                }
                                                optionsChanged({
                                                    ...options,
                                                    categories: newCategories
                                                })
                                            }}
                                        />{category}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h4>Rating</h4>
                        <label className='filtered-results-rating' >
                            <input
                                type='checkbox'
                                checked={rating}
                                onChange={handleChangeCheckBox}
                            />4 Star Up
                        </label>
                    </div>
                    <div>
                        <div>
                            <h4>Price</h4>
                            <form className='filtered-results-max-price'>
                                <label className='filtered-results-price-label'>$</label>
                                    <input
                                        className='filtered-results-price-input'
                                        placeholder='Maximum Price'
                                        type='number'
                                        onChange={handleChangeMaxValue}
                                    />
                            </form>
                            <form className='filtered-results-min-price'>
                                <label className='filtered-results-price-label'>$</label>
                                    <input className='filtered-results-price-input'
                                        placeholder='Minimum Price'
                                        type='number'
                                        onChange={handleChangeMinValue}
                                    />
                            </form>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}