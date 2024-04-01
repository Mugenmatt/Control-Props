import { Product } from "../interfaces/product.interfaces";

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
}
const product2 = {
    id: '2',
    title: 'Coffee Mug 2 - Card',
    img: './coffee-mug2.png',
}

export const products: Product[] = [product1, product2];