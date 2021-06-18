import {keyHandler} from "../../Services/key-handler";

export const ProductList = ({products = []}: any) => {

    return (
        <div>ProductList
            {products.map((product:any) => (
                <div key={keyHandler(1)}>{product.title}
                    <div></div>
                </div>
            ))}
        </div>
    )
}