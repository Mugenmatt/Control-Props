import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components/index"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {/* ProductCard = Compound Component Pattern */}
                {/* La idea de este ProductCard es que tiene todas las props y ellas */}
                {/* se dispersan en el resto de sus componentes hijos */}
                <ProductCard product={product} className="bg-dark">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" title="Compound - Forma 1" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/* Esta es otra manera de hacerlo */}
                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                
                {/* Con estilos en linea con tipo React.CSSProperties */}
                <ProductCard product={product} style={{ background: '#70D1F8' }}>
                    <ProductImage style={{ boxShadow: '7px 7px 7px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard>
            </div>
        </div>
    )
}
