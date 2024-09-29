import api from "../services/api";
import Dessert from "../types/models";

export default async function getDesserts() {
    return api<Dessert[]>({
        url: '/desserts',
        method: 'get'
    })
}