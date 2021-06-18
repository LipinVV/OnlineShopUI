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
    const handleChangeMaxValue = ((evt:any) => {
        const { value } = evt.target
        setMaxValue(value)
        let newMaxPrice = +value;
        if(value >= availableOptions.maxPrice || !value) {
            optionsChanged({
                ...options,
                maxPrice:  newMaxPrice
            })
        }
    })

    const handleChangeMinValue = ((evt:any) => {
        const { value } = evt.target
        setMinValue(value)
        let newMinPrice = +value;
        if(value >= availableOptions.minPrice) {
            optionsChanged({
                ...options,
                minPrice:  newMinPrice
            })
        }
    })

    return (
        <div>
            <h3>Filter</h3>
            {availableOptions.categories.map((category: any) => {
                return (
                    <div key={category}>
                        <label>
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
            <div>
                <input
                    type='checkbox'
                    // value={availableOptions.rating}
                    checked={rating}
                    onChange={handleChangeCheckBox}
                />4 Star Up
            </div>

            <div>
                <h4>Price</h4>
                <div>
                    <label>$
                        <input
                            placeholder='Maximum Price'
                            type='number'
                            onChange={handleChangeMaxValue}
                        />
                    </label>
                </div>
                <div>
                    <label>$
                        <input
                            placeholder='Minimum Price'
                            type='number'
                            onChange={handleChangeMinValue}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}