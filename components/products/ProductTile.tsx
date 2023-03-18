import Image from 'next/image';
import Link from 'next/link';
import { IProductsData } from '../../lib//products/types';
import styles from './Products.module.css';

const ProductTile: React.FC<IProductsData> = ({
    isSale,
    price,
    productImage,
    productName,
}) => {
    return (
        (<Link href="/card" className={styles.proudct__link} passHref>
            {isSale &&
            <div className={styles.product__sales}>Sale</div>
            }
            <div className={styles.product__tile}>
                <div className={styles.product__header}>
                    <Image
                        src={productImage}
                        alt={productName}
                        className={styles.product__image}
                        width="600"
                        height="400"
                    />
                </div>
                <div className={styles.product__body}>
                    <h4 className={styles.product__description}>
                        {productName}
                        <span className={`${styles.product__price} ${styles['tag-blue']}`}>
                            {price}
                        </span>
                    </h4>
                    <p>{isSale}</p>
                </div>
            </div>

        </Link>)
    );
};

export default ProductTile;
