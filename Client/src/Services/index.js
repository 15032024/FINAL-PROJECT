import { BASE_URL } from "./constant.js"

import axios from "axios"



export async function getAllData() {

    const response = await axios(`${BASE_URL}/products`)
    return response
}

export async function getDataById(id) {
    // const {id}=req.params;

    const response = await axios(`${BASE_URL}/products/${id}`)
    return response
}

export async function addNewData (){

    const response = await axios.post(`${BASE_URL}/products`)
    return response
}