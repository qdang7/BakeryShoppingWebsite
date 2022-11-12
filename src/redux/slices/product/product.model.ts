export interface Product{
    productName: string,
    description: string,
    imageUrl: string,
    quantity : number,
    originalPrice: number,
    discountedPrice: number,
}
export interface ProductResponse {
    result: Product[],
    statusCode: number,
    isError: boolean
}