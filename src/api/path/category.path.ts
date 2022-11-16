import { basePath } from "./base/base.path";

const identifiers = "category"

export const categoryPath = {
    getAll: `${basePath}/${identifiers}/getall`,
    getOne: `${basePath}/${identifiers}/get`
}