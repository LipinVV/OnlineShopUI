import React, {useEffect, useState} from "react";
import { filterTypes } from "./types";

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
        setRating((prevState: boolean) => !prevState)
        optionsChanged({
            ...options,
            rating: !rating
        })
    }

    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const handleChangeMaxValue = ((evt: React.ChangeEvent<any>) => {
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
    const handleChangeMinValue = ((evt: React.ChangeEvent<any>) => {
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
    const [sortByTheHighest, setSortByTheHighest] = useState(true);
    const sortingByTheHighestHandler = () => {
        if(sortByTheLowest) {
            setSortByTheLowest((prevState: boolean) => !prevState)
        }
        setSortByTheHighest((prevState: boolean) => !prevState)
        optionsChanged({
            ...options,
            sortFromTheTop: !sortByTheHighest,
            sortFromTheBottom: !sortByTheLowest
        })
    }

    const [sortByTheLowest, setSortByTheLowest] = useState(false);
    const sortingByTheLowestHandler = () => {
        if(sortByTheHighest) {
            setSortByTheHighest((prevState: boolean) => !prevState)
        }
        setSortByTheLowest((prevState: boolean) => !prevState)
        optionsChanged({
            ...options,
            sortFromTheBottom: !sortByTheLowest,
            sortFromTheTop: !sortByTheHighest,
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='filtered-results-menu'>
            <h3 className='filtered-results-header' onClick={filterShowHandler}>Filter</h3>
            {showFilter ?
                <div className='filtered-results-controls'>
                    <div className='filtered-results-categories'>
                        <h4>Category</h4>
                        {availableOptions.categories.map((category: string) => {
                            return (
                                <div key={category}
                                     className='filtered-results-category-wrapper'>
                                    <label className='filtered-results-category' >
                                        <input
                                            className='filtered-results-category-input'
                                            type='checkbox'
                                            onChange={(evt) => {
                                                let newCategories = options.categories;
                                                if (evt.target.checked) {
                                                    newCategories.push(category)
                                                } else {
                                                    newCategories = newCategories.filter(
                                                        (selectedCategory: string) => category !== selectedCategory)
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
                                className='filtered-results-category-input'
                                type='checkbox'
                                checked={rating}
                                onChange={handleChangeCheckBox}
                            />4 Stars Up
                        </label>
                    </div>
                    <div><h4>Color</h4>
                        {availableOptions.colors.map((color: string) => {
                            return (
                                <div key={color}>
                                    <label className='filtered-results-coloring'>
                                        <input
                                            type='checkbox'
                                            onChange={(evt) => {
                                                let newColors = options.colors;
                                                if (evt.target.checked) {
                                                    newColors.push(color)
                                                } else {
                                                    newColors = newColors.filter(
                                                        (selectedColor: string) => color !== selectedColor)
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
                            <div className='filtered-results-max-price'>
                                <label className='filtered-results-price-label'>$</label>
                                <input
                                    className='filtered-results-price-input'
                                    placeholder='Maximum Price'
                                    type='number'
                                    onChange={handleChangeMaxValue}
                                />
                            </div>
                            <div className='filtered-results-min-price'>
                                <label className='filtered-results-price-label'>$</label>
                                <input className='filtered-results-price-input'
                                    placeholder='Minimum Price'
                                    type='number'
                                    onChange={handleChangeMinValue}
                                />
                            </div>
                            <div className='filtered-results__sorting-by-price'>
                                <label className={sortByTheHighest ? 'filtered-results-sorted' : 'filtered-results-unsorted'}>Sort by price ∇
                                    <input
                                        className='filtered-results__sorting-input'
                                        type='checkbox'
                                        checked={sortByTheHighest}
                                        onChange={sortingByTheHighestHandler}
                                    />
                                </label>
                                <label className={!sortByTheHighest ? 'filtered-results-sorted' : 'filtered-results-unsorted'} >Sort by price ∆
                                    <input
                                        className='filtered-results__sorting-input'
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