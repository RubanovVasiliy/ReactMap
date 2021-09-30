import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:8080/api/'
})

export const mapAPI = {
    getObjects() {
        return instance.get(`getObjects`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
}