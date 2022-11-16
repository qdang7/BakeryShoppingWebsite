export interface Category{
    categoryId?: string,
    categoryName: string,
    imageName: string
}

export interface CategoryResponse{
    result: Category[],
    statusCode: number
}

export interface SingleCategoryResponse {
    result: Category,
    statusCode: number
}