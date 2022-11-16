export interface Product{
    productId?: string,
    productName: string,
    description: string,
    imageUrl: string,
    quantity : number,
    originalPrice: number,
    discountedPrice: number,
    categoryId: string
}
export interface ProductResponse {
    result: Product[],
    statusCode: number,
    isError: boolean
}