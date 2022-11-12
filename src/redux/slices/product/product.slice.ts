import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { SUCCESS_STATUS_CODE } from "../../../constants/http-status-code"
import { Product } from "./product.model"
import { getAllProduct } from "./product.service"

export interface ProductState {
    products: Product[],
    isLoading: boolean
}
const initialState : ProductState = {
    products : [],
    isLoading: true
}

const _getAllProducts = createAsyncThunk(
    "product/getAll",
    async (params,thunk) => {
        const result = await getAllProduct()
        if(result.status == SUCCESS_STATUS_CODE){
            return result.data
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(_getAllProducts.pending , (state) => {
            return{
                ...state,
                isLoading: true
            }
        })
    }
})

export default productSlice.reducer
export {_getAllProducts}