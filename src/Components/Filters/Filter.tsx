import {filterTypes} from "./types";
import {useState} from "react";

const availableOptions: filterTypes = {
    colors: ['black', 'white', 'grey'],
    categories: ['sofas', 'chairs', 'desks', 'beds', 'carpets', 'cupboards'],
    minPrice: 5,
    maxPrice: 999,
    rating: false
};


export const Filter =({options, optionsChanged} : any) => {

    const [rating, setRating] = useState(false);
    const handleChange = () => {
        setRating((prevState: any) => !prevState)
        optionsChanged({
            ...options,
            rating: !rating
        })
    }

    return (
        <div>
            <h1>Filter</h1>
            {availableOptions.categories.map((category:any) => {
                return (
                    <div key={category}>
                        <label>
                            <input
                                type='checkbox'
                                onChange={(evt) => {
                                    let newCategories = options.categories;
                                    if(evt.target.checked) {
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
                    onChange={handleChange}
                />4
            </div>
        </div>
    )
}