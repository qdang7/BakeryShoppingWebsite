import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../product/product.model"
import { Cart, CartItem } from "./cart.model"

export interface CartState{
    items: CartItem[]
}

const initialState : CartState = {
    items: []
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            _addItems: (state, payload: PayloadAction<Product>) => {
                let clonedState = {...state}
                let product = payload.payload
                let updatedFlag = false
                for(let item of clonedState.items){
                    if(item.product.productId === product.productId){
                        item.quantity++
                        updatedFlag = true
                    }
                }
                if(!updatedFlag){
                    clonedState.items.push({
                        product: product,
                        quantity: 1
                    })
                }
                void(state.items = clonedState.items)
                // return clonedState
            },
            _removeItem: (state, payload) => {
                let clonedState = {...state}
                let oldItem = payload.payload
                clonedState.items.filter(itm => itm != oldItem)
                return clonedState
            }
        }
    }
)

export default cartSlice.reducer
export const {_addItems} = cartSlice.actions