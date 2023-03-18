import { useState } from 'react';
import { IProductsData } from '../../lib//products/types';
import styles from './Products.module.css';
import ProductTile from './ProductTile';

export interface IResults {
    productResults: IProductsData[];
}

const Products: React.FC<IResults> = ({ productResults }) => {
    const [list, setList] = useState(productResults);
    const [fList, setFList] = useState(productResults);
    const filterArray = fList.map((item:IProductsData) => item.type)
        .filter((value:string, index:string, self:any) => self.indexOf(value) === index);

    function filterSelectedProduct(productType: string) {
        if (productType === "All") {
            setList(fList);
        }
        else {
            let newArray = [];
            for (let i = 0; i < fList.length; i++) {
                if (productType === fList[i].type) {
                    newArray.push(fList[i]);
                }
            }
            setList(newArray);
        }
    }

    return (
        <div>
            <h2 className={styles.products__heading}>Explore our Alcoholic Products</h2>
            <section >
                <div className={styles.products__navigation}>
                    <p className={styles.products__filter}> Filter by: </p>
                    { //@ts-ignore
                        <select className={styles.products__filter_dropdown} onChange={() => filterSelectedProduct(event?.target.value)}>
                            <option value="All">All</option>
                            {fList !== undefined &&
                                fList.length &&
                                filterArray.map((item:string, index:string) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                        </select>
                    }
                </div>
                <div className={styles.product__tiles}>
                    {list !== undefined &&
                        list.length &&
                        list.map((item: IProductsData) => (
                            <ProductTile key={item.index} {...item} />
                        ))}{' '}
                </div>
            </section>
        </div>
    );
};

export default Products;
