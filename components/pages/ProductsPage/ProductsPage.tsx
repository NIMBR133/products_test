import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Card } from '@/components/ui/Card';
import { Pagination } from '@/components/ui/Pagination';
import { Props } from '@/pages'

import style from './ProductsPage.module.css';

const TOTAL_PAGES = 10

export const ProductsPage = ({ products }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const startLoading = () => setIsLoading(true)
    const stopLoading = () => setIsLoading(false)

    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
  }, [])

  const onPrev = () => {
    if (!router.query.page) return
    router.push({ query: { page: Number(router.query.page) - 1 }})
  }

  const onNext = () => {
    if (Number(router.query.page) === TOTAL_PAGES) return
    router.push({ query: { page: Number(router.query.page) + 1 }})
  }

  if (products.length === 0) {
    return <h1>Данные не получены</h1>
  }

  return (
    <>
      <h1>Список товаров</h1>

      <div className={style.wrapper}>
        {products.map(product => (
          <Card {...product} />
        ))}
        {isLoading && <div className={style.loading}>Загрузка...</div>}
      </div>

      <Pagination 
        initialPage={Number(router.query.page) || 1} 
        onPrev={onPrev} 
        onNext={onNext} 
        totalPages={TOTAL_PAGES}
        className={style.pagination}
      />
    </>
  )
}

