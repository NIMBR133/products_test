export interface ProductFetch {
  _id: string 
  name: string
  trips: string
}

export enum Badge {
  TOP = 'top',
  NEW = 'new'
}

export interface Product extends ProductFetch {
  image: string
  badge: Badge
}