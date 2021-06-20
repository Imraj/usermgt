import { UPDATE_PASSWORD } from "./types";
import axios from 'axios'
const apiURL = "http://localhost:3000"

export const updatePassword = (data) => {
    return{
        type: 'UPDATE_PASSWORD',
        payload: {
            password: data.password
        }
    }
}

