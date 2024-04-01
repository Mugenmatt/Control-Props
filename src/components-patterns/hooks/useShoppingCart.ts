import { useState } from "react";
import { Product } from "../interfaces/product.interfaces";
import { products } from "../data/products";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {

    // [key: string] no es un arreglo. Dice que viene una x cantidad de llaves ('1' y '2') 
    // y que apunta a un ProductInCart.
    // Según id trae el producto
    const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {
        // Destructura del evento = { count, product }
        console.log({ count, product });

        
        // [product.id] es una llave computada, es decir, dinámica según el product.id que llegue
        setShoppingCart(prevShoppingCart => {

            // Obtengo el objeto con ese product.id, sino, lo coloca en 0
            const productInCart: ProductInCart = prevShoppingCart[product.id] || {...product, count: 0};
            
            if( Math.max(productInCart.count + count, 0) > 0 ) { // Si tiene al menos 1 unidad
                productInCart.count += count; // Le suma el valor del contador(count)
                return {
                    ...prevShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = prevShoppingCart;
            return rest;

            // ===========================================
            // Otra forma de hacerlo

            // // Si el count del producto que viene, es 0...
            // if( count === 0 ) {
            //     // Destructura el prevShoppingCart y agarra el producto que esté en 0
            //     // segun el id del producto modificado actualmente, y luego deja el resto
            //     const { [product.id]: toDelete, ...rest } = prevShoppingCart;

            //     // Devuelve el resto, es decir, todo lo que no tenga 0
            //     return { ...rest }
            // }

            // return {
            //     ...prevShoppingCart,
            //     [product.id]: { ...product, count }
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
