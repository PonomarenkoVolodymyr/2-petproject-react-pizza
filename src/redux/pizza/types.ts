export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export enum Status {
  LOADING = 'loading',
  SUCSESS = 'sucsess',
  ERROR = 'error',
}

export interface PizzaSliseState {
  items: Pizza[];
  status: Status;
}
