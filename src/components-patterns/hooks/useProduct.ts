import { useEffect, useRef, useState } from 'react';
import { Product } from '../interfaces/product.interfaces';
import { OnChangeArgs } from '../components/ProductCard';

interface UseProductArgs {
    product: Product,
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const UseProduct = ( { onChange, product, value = 0 }: UseProductArgs ) => {
    
    const [counter, setCounter] = useState( value )

    // Doble !! significa que es true;
    const isControlledRef = useRef( !!onChange )

    const handleIncreaseBy = (value: number) => {

        // Si tiene función onChange
        if( isControlledRef.current ) {
            return onChange!({ count: value, product })
        }
        
        // Guarda el nuevo valor
        const newValue = Math.max(counter + value, 0);
        // Establece el estado
        setCounter( newValue )
        // Si la función viene desde props, la emite
        if(onChange) onChange({ count: newValue, product });
    }

    // Re-dibuja el valor cuando cambia el valor
    useEffect(() => {
        setCounter( value )
    }, [value])
    
    
    return {
        counter, 
        handleIncreaseBy, 
    }
}
