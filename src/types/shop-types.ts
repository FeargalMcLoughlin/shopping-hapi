
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

export interface Shoptype {
  category: string;
  _id: string;
}

export interface Shop {
  name: string;
  address: string;
  rating: number;
  method: string;
  shoptype: Shoptype | string;
  creator: User | string;
  lat: number;
  lng: number;
}

export interface Db {
  userStore: any;
  shoptypeStore: any;
  shopStore: any;
}
