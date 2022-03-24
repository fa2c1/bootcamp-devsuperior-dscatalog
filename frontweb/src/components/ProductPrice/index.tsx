import './styles.css';

type Props = {
    price: number;
}

function ProductPrice({ price } : Props) {
    return (
        <div className='product-price-countainer'>
            <span>R$</span>
            <h3>9999,99</h3>
        </div>
    );
}

export default ProductPrice;