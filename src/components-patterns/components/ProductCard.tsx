import styles from '../styles/styles.module.css';
import { UseProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { InitialValues, Product, ProductContextProps } from '../interfaces/product.interfaces';

export interface OnChangeArgs {
    product: Product; 
    count: number;
}
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]; // "ReactElement" es una export interface para elementos HTML
    className?: string;
    style?: React.CSSProperties | undefined;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

// Contexto para que el padre le pase a los hijos la data
export const ProductContext = createContext({} as ProductContextProps) ;
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues}: ProductCardProps) => {

    // El hook tiene el argumento "onChange"
    const { counter, handleIncreaseBy } = UseProduct({ 
        product,
        value,
        initialValues
    })

    // Provider: Data a enviar a los hijos
    return (
        <Provider value={{ 
            counter,
            handleIncreaseBy,
            product
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={ style }
            >

                { children }

            </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;