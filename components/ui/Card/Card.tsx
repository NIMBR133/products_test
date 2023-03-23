import { Badge } from '../Badge';

import { Badge as BadgeEnum, Product } from '@/interfaces'
import style from './Card.module.css';

export const Card = ({ _id: id, badge, name, image }: Product) => {
  return (
    <div key={id} className={style.card}>
      <img src={image} className={style.image} />
      <h4 className={style.title}>{name}</h4>
      <div className={style.brand}>Бренд: {id}</div>
      <Badge type={badge} className={style.badge} />
    </div>
  )
}