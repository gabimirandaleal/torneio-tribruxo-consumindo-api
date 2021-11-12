import axios from "axios"

const api = axios.create({
    baseURL: "https://hp-api.herokuapp.com/api/characters/students"
})

export default api