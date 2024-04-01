import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components/index";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            {/* Productos */}
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    products.map(product => {
                        return <ProductCard 
                            key={product.id} 
                            product={product} 
                            className="bg-dark" 
                            // También funcionaria así porque lo que envía es el evento
                            // onChange={ onProductCountChange }
                            onChange={ (event) => onProductCountChange( event ) } 
                            value={ shoppingCart[product.id]?.count || 0 }
                            // Si el producto del shoppingCart con el id actual tiene count, sino 0
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    })
                }
            </div>

            {/* El supuesto "Carrito de compras" */}
            <div className="shopping-cart">
                { 
                    // En los parametros, [key, product] es la destructuración del objeto
                    Object.entries(shoppingCart).map(([key, product]) => {
                        return <ProductCard 
                            key={key}
                            product={product} 
                            className="bg-dark" 
                            style={{ width: '100px' }}
                            onChange={ (event) => onProductCountChange( event ) } 
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    })
                }
            </div>

            <div>
                <code>
                    { JSON.stringify(shoppingCart, null, 5) }
                </code>
            </div>

        </div>
    )
}
