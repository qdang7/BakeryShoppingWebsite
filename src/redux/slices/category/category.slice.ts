import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "./category.model";
import { getAllCategories, getCategoryByID } from "./category.service";

export interface CategoryState {
    categories: Category[],
    isLoading: boolean,
}

const initialState : CategoryState = {
    categories: [],
    isLoading: false,
}

const _getAllCategories = createAsyncThunk("category/all", async () => {
    const result = await getAllCategories()
    return result.data
})

const _getCategoryById = createAsyncThunk("category/getByID", async(id: string) => {
    const result = await getCategoryByID(id)
    return result.data
})

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(_getAllCategories.pending, (state) =>  {
            return{
                ...state,
                isLoading: true
            }
        });
        builder.addCase(_getAllCategories.rejected, (state) => {
            return{
                ...state,
                isLoading: false
            }
        });
        builder.addCase(_getAllCategories.fulfilled, (state, data) => {
            const {result} = data.payload
            return{
                ...state,
                isLoading: false,
                categories: result
            }
        });
        builder.addCase(_getCategoryById.pending, (state) => {
            return {
                ...state,
                isLoading: false
            }
        } )
    }
})
export default categorySlice.reducer
export {_getAllCategories}