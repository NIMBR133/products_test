import { Badge as BadgeEnum } from '@/interfaces'
import clsx from 'clsx';

import style from './Badge.module.css';

interface Props {
  type: BadgeEnum
  className?: string
}

export const Badge = ({ type, className }: Props) => {

  return (
    <div className={clsx(style.badge, className, {
      [style.green]: type === BadgeEnum.NEW,
      [style.blue]: type === BadgeEnum.TOP
    })}>
      <span>{type}</span>
    </div>
  )
}