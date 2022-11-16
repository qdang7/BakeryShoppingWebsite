import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { SUCCESS_STATUS_CODE } from "../../../constants/http-status-code"
import { Product } from "./product.model"
import { getAllProduct, getProducts } from "./product.service"

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
    async () => {
        const result = await getAllProduct()
        if(result.status == SUCCESS_STATUS_CODE){
            return result.data
        }
    }
)

const _getProducts = createAsyncThunk(
    "product/getProduct",
    async (categoryID: string) => {
        const result = await getProducts(categoryID)
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
        });
        builder.addCase(_getAllProducts.fulfilled, (state, response) => {
            const result = response.payload?.result ? response.payload?.result : [] 
            return {
                ...state,
                isLoading: false,
                products: result
            }
        });
        builder.addCase(_getProducts.pending , (state) => {
            return{
                ...state,
                isLoading: true
            }
        });
        builder.addCase(_getProducts.fulfilled, (state, response) => {
            const result = response.payload?.result ? response.payload?.result : [] 
            return {
                ...state,
                isLoading: false,
                products: result
            }
        });
        builder.addCase(_getProducts.rejected, (state) => {
            return{
                ...state,
                isLoading: false
            }
        })
    }
})

export default productSlice.reducer
export {_getAllProducts, _getProducts}