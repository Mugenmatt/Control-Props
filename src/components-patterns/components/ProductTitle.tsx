import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props { 
    title?: string
    className?: string
    style?: React.CSSProperties | undefined;
}

export const ProductTitle = ({ title, className, style }: Props ) => {
    const { product } = useContext(ProductContext);
    let titleToShow: string;

    // Se muestra una u otra imagen dependiendo de donde llegue la data (props o contexto)
    // img viene de props y product.img viene del contexto
    if(title) {
        titleToShow = title;
    } else if(product.title) {
        titleToShow = product.title;
    } else {
        titleToShow = 'Sin título';
    }
    return (
        <span style={ style } className={ `${styles.productDescription} ${className}` }>{ titleToShow }</span>
    )
}