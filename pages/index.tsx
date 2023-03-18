import { GetServerSideProps } from 'next';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Products from "../components/products/Products";
import { IProductsData } from '../lib/products/types';
import { IApiProductsResponseData } from './api/products';
import { NextPageWithLayout } from './page';

export interface IResults {
    productResults: IProductsData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async (context) => {
    let productResults: IApiProductsResponseData = [];
    const response = await fetch(`http://${context.req.headers.host}/api/products`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      productResults = await response.json();
    return {
      props: {
        // Will be passed to the page component as props
        productResults,
      },
    };
  };


const Home: NextPageWithLayout<IResults> = ( productResults: any) => {
console.log(typeof(productResults));
  return (
    <div>
        <Products {...productResults}/>
    </div>
  );
};

export default Home;


Home.getLayout = (page: any) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};