export interface IProductState {
    products: ISingleProduct[];
    product: ISingleProduct;
    loading: boolean;
    error: null | string;
    productsPerPage: number;
    currentPage: number;
    firstProduct: number;
    lastProduct: number;
    modal: boolean;
    shoppingCart:  ISingleProduct[],
}

export interface ISingleProduct {
    id:  number,
    title: string,
    price: number,
    qty: number,
    qtyLimit: number
}
