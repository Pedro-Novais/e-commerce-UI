import { ProductProvide } from "../../context/ProductContext"
import Product from "../../components/product/Product"

const Index: React.FC = () => {
    return (
        <ProductProvide>
            <Product />
        </ProductProvide>
    )
}

export default Index