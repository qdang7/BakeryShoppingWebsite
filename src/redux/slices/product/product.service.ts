import { AxiosResponse } from "axios"
import { productPath } from "../../../api/path/product.path"
import { httpClient } from "../../../utils/http-client"
import { ProductResponse } from "./product.model"

export const getAllProduct = async () : Promise<AxiosResponse<ProductResponse>> => {
    return await httpClient.get(`${productPath.getAll}`)
} 
export const getProducts = async (categoryID: string) : Promise<AxiosResponse<ProductResponse>> => {
    return await httpClient.get(`${productPath.getByCateID}?categoryID=${categoryID}`)
} 