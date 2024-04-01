import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/product.interfaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

// En JS todo menos los primitivos son objetos, por eso podemos
// asignar más propiedades con Object.assign en vez de usar
// ProductCard.Title = ProductTitle; que usabamos en ProductCard.tsx
// Y así se pueda ver como <ProductCard.Title />
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} )

export default ProductCard