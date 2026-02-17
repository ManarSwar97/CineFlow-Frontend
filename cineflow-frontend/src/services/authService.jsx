import axios from "../utils/axiosConfig";

const API_URL = "http://localhost:8080/api/v1/auth";

export const login = (email, password) =>{
    return axios.post(`${API_URL}/signin`, {email, password});

}

export const signup = (firstName, lastName, email, password, confirmPassword) =>{
    return axios.post(`${API_URL}/signup`, {firstName, lastName, email, password, confirmPassword});
}
