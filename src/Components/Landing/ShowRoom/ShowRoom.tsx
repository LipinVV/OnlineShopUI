import {useState, useEffect, useContext} from "react";
import {StoreContext} from "../../../App";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/key-handler";
import './showroom.scss'

export const ShowRoom = () => {
    const {state} = useContext(StoreContext);
    const currentItems = state.products;
    const [timer, setTimer] = useState(30);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (running) {
            const id = window.setInterval(() => {
                //@ts-ignore
                setTimer(seconds => seconds > 1 ? seconds - 1 : 0);
            }, 1000)
            return () => window.clearInterval(id);
        }
    }, [running]);
    const chairs:any = currentItems.filter(product => product.category === 'chairs');
    const desks: any = currentItems.filter(product => product.category === 'desks');
    const sofas: any = currentItems.filter(product => product.category === 'sofas');
    const beds: any = currentItems.filter(product => product.category === 'beds');
    const carpets: any = currentItems.filter(product => product.category === 'carpets');
    const cupboards: any = currentItems.filter(product => product.category === 'cupboards');
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

        console.log('TIME', seconds)
    }

    const current = slider(timer, array)
    return (
        <div className='showroom'>
            {timer === 30 ? sofas.map((product:any )=> (
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
                current.map((product:any )=> (
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
    )
}