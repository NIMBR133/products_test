import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'

import { ProductsPage } from '@/components/pages/ProductsPage';
import { Badge, Product, ProductFetch } from '@/interfaces';

const INITIAL_PAGE = 1;

export interface Props {
  products: Product[]
}

const Main = ({products}: Props) => {
  return (
    <>
      <Head>
        <title>Список продуктов</title>
      </Head>
      <ProductsPage products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  try {
    const params = new URLSearchParams({
      page: String(query.page || INITIAL_PAGE),
      size: '10',
    }).toString()
  
    const res = await fetch(`${process.env.API_URL}/?${params}`)
    if (res.status !== 200) {
      throw new Error("Failed to fetch")
    }
    
    const { data }: { data: ProductFetch[] } = await res.json()

    const enrichedData: Product[] = data.map(item => (
      { ...item, image: 'https://jjji.ru/400x225', badge: Math.random() > 0.5 ? Badge.NEW : Badge.TOP }
    ))

    return { props: { products: enrichedData } }
  } catch (e) {
    console.error(e)
    return { props: { products: [] } }
  }
}

export default Main
