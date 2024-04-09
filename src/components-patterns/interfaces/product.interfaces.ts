import { ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    handleIncreaseBy: (value: number) => void;
}

// Acá se extienden las interfaces para que llegue a ambas formas de declarar el compound component
// Diciendo por ejemplo --> Props: ProductTitleProps => JSX.Element
// Lo que significa --> Las propiedades son las de la interface y devuelve un elemento JSX
// No siempre es asi, pero si querés saber el tipo de algo, dejale el mouse arriba.
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

