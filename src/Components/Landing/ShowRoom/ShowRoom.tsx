import {StoreContext} from "../../../App";
import React, {useState, useEffect, useContext} from "react";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/keyHandler";
import {productType} from "../../Product/types";
import './showroom.scss';

export const ShowRoom = () => {
    const {state} = useContext(StoreContext);
    const currentItems = state.products;
    const [timer, setTimer] = useState(30);
    const [running] = useState(true);

    useEffect(() => {
        if (running) {
            const id = window.setInterval(() => {
                setTimer((seconds:number )=> seconds > 1 ? seconds - 1 : 0);
            }, 1000)
            return () => window.clearInterval(id);
        }
    }, [running]);
    const chairs:productType[] = currentItems.filter(product => product.category === 'chairs');
    const desks: productType[] = currentItems.filter(product => product.category === 'desks');
    const sofas: productType[]  = currentItems.filter(product => product.category === 'sofas');
    const beds: productType[]  = currentItems.filter(product => product.category === 'beds');
    const carpets: productType[]  = currentItems.filter(product => product.category === 'carpets');
    const cupboards: productType[]  = currentItems.filter(product => product.category === 'cupboards');
    const array = [cupboards, chairs, desks, beds, carpets, sofas];

    const slider = (seconds:any, item:any) => {
        if(seconds  === 1) {
            setTimer(30)
        }
        if(seconds < 5) {
            return item[0];
        }
        if(seconds < 10) {
            return item[1];
        }
        if(seconds < 15) {
            return item[2];
        }
        if(seconds < 20) {
            return item[3];
        }
        if(seconds < 25) {
            return item[4];
        }
        if(seconds < 30) {
            return item[5];
        }
    }

    const current = slider(timer, array)

    return (
        <div>
            <h1 className='showroom__header'>Our ShowRoom:</h1>
        <div className='showroom'>
            {timer === 30 ? sofas.map((product:productType)=> (
                    <ProductCard
                        key={keyHandler(product.id)}
                        id={product.id}
                        category={product.category}
                        title={product.title}
                        price={product.price}
                        discount={product.discount}
                        previewUrl={product.previewUrl}
                        rating={product.rating}
                        salesCount={product.salesCount}
                        isFavourite={product.isFavourite}
                        toBuy={product.toBuy}
                    />)) :
                current.map((product:productType)=> (
                <ProductCard
                    key={keyHandler(product.id)}
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    previewUrl={product.previewUrl}
                    rating={product.rating}
                    salesCount={product.salesCount}
                    isFavourite={product.isFavourite}
                    toBuy={product.toBuy}
                />
            ))}
        </div>
        </div>
    )
}