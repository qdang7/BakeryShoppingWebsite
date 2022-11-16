import { AxiosResponse } from "axios";
import { categoryPath } from "../../../api/path/category.path";
import { httpClient } from "../../../utils/http-client";
import { CategoryResponse, SingleCategoryResponse } from "./category.model";

export const getAllCategories = async () : Promise<AxiosResponse<CategoryResponse>> => {
    return await httpClient.get(`${categoryPath.getAll}`)
}

export const getCategoryByID = async (id: string) : Promise<AxiosResponse<SingleCategoryResponse>> => {
    return await httpClient.get(`${categoryPath.getOne}?id=${id}`)
}