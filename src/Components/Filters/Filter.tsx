import { filterTypes } from "./types";
import { useState } from "react";

const availableOptions: filterTypes = {
    colors: ['black', 'white', 'grey'],
    categories: ['sofas', 'chairs', 'desks', 'beds', 'carpets', 'cupboards'],
    minPrice: 1,
    maxPrice: 1,
    rating: false,
    sortByAlphabet: false,
    sortFromTheTop: true,
    sortFromTheBottom: false,
};

export const Filter = ({ options, optionsChanged }: any) => {

    const [rating, setRating] = useState(false);
    const handleChangeCheckBox = () => {
        setRating((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            rating: !rating
        })
    }

    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const handleChangeMaxValue = ((evt: any) => {
        const { value } = evt.target
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
        const { value } = evt.target
        setMinValue(value)
        let newMinPrice = +value;
        if (value >= availableOptions.minPrice) {
            optionsChanged({
                ...options,
                minPrice: newMinPrice
            })
        }
    })
    const windowSize = window.outerWidth;
    const renderFilterHandler = ((size: number) => {
        return size >= 1024;
    })
    const [showFilter, setShowFilter] = useState(renderFilterHandler(windowSize));
    const filterShowHandler = () => {
        setShowFilter(!showFilter)
    }
    
    const [sortByAlphabet, setSortByAlphabet] = useState(false);
    const sortByAlphabetHandler = () => {
        setSortByAlphabet((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            sortByAlphabet: !sortByAlphabet
        })
    }

    const [sortByTheHighest, setSortByTheHighest] = useState(true);
    const sortingByTheHighestHandler = () => {
        if(sortByTheLowest) {
            setSortByTheLowest((prevState: any) => !prevState)
        }
        setSortByTheHighest((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            sortFromTheTop: !sortByTheHighest,
            sortFromTheBottom: !sortByTheLowest
        })
    }

    const [sortByTheLowest, setSortByTheLowest] = useState(false);
    const sortingByTheLowestHandler = () => {
        if(sortByTheHighest) {
            setSortByTheHighest((prevState: any) => !prevState)
        }
        setSortByTheLowest((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            sortFromTheBottom: !sortByTheLowest,
            sortFromTheTop: !sortByTheHighest,
        })
    }

    return (
        <div className='filtered-results-menu'>
            <h3 className='filtered-results-header' onClick={filterShowHandler}>Filter</h3>
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
                    <div><h4>Color</h4>
                        {availableOptions.colors.map((color: any) => {
                            return (
                                <div key={color}>
                                    <label className='' >
                                        <input
                                            type='checkbox'
                                            onChange={(evt) => {
                                                let newColors = options.colors;
                                                if (evt.target.checked) {
                                                    newColors.push(color)
                                                } else {
                                                    newColors = newColors.filter(
                                                        (selectedColor: any) => color !== selectedColor)
                                                }
                                                optionsChanged({
                                                    ...options,
                                                    colors: newColors
                                                })
                                            }}
                                        />{color}
                                    </label>
                                </div>
                            )
                        })}
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
                            <div>
                                <h4>Sort by the name</h4>
                                <label className='filtered-results-sort-by-the-name' >
                                    <input
                                        type='checkbox'
                                        checked={sortByAlphabet}
                                        onChange={sortByAlphabetHandler}
                                    />
                                </label>
                            </div>
                            <div>
                                <h4>Sort by price ∇</h4>
                                <label className='filtered-results-sort-from-highest' >
                                    <input
                                        type='checkbox'
                                        checked={sortByTheHighest}
                                        onChange={sortingByTheHighestHandler}
                                    />
                                </label>
                            </div>
                            <div>
                                <h4>Sort by price ∆</h4>
                                <label className='filtered-results-sort-from-lowest' >
                                    <input
                                        type='checkbox'
                                        // disabled={sortByTheLowest}
                                        checked={sortByTheLowest}
                                        onChange={sortingByTheLowestHandler}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}