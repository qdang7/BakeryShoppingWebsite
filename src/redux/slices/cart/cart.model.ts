import { Product } from "../product/product.model"

export interface CartItem{
    product: Product,
    quantity: number
}

export interface Cart{
    items: CartItem[]
}