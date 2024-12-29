import axios from "axios";
// debugger;
import { setupInterceptors } from "./interceptors";

// console.log(process.env);
console.log(import.meta.env.VITE_API_BASE_URL);

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
        // "X-CSRF-Token": "",
        // "credentials":""1
    },
    withCredentials: true
    // withXSRFToken:true
});
// debugger;
setupInterceptors(httpClient);

export default httpClient;
