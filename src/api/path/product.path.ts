import { basePath } from "./base/base.path";

const identifiers = "product"

export const productPath = {
    getAll: `${basePath}/${identifiers}/getall`,
    getByCateID: `${basePath}/${identifiers}/getbycateID`
}