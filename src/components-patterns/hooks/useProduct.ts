import { useState } from 'react';

export const UseProduct = () => {
    
    const [counter, setCounter] = useState(0)

    const handleIncreaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }
    return {
        counter, 
        handleIncreaseBy, 
    }
}
