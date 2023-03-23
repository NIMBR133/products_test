
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '../Button';
import style from './Pagination.module.css';

interface Props {
  initialPage: number
  onPrev: () => void
  onNext: () => void
  totalPages: number
  className?: string
}

export const Pagination = ({ onPrev, onNext, initialPage, totalPages, className }: Props) => {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const onClickPrev = () => {
    setCurrentPage((prev) => prev - 1)
    onPrev()
  }

  const onClickNext = () => {
    setCurrentPage((prev) => prev + 1)
    onNext()
  }

  return (
    <div className={clsx(style.wrapper, className)}>
      <Button onClick={onClickPrev} disabled={currentPage === 1}>Назад</Button>
      <div className={style.currentPage}>{currentPage}</div>
      <Button onClick={onClickNext} disabled={currentPage === totalPages}>Вперёд</Button>
    </div>
  )
}
