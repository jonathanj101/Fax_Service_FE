import axios from "axios";
import httpClient from "./httpClient";
import { setItem, getItem, removeItem } from "../local-storage/storage";
import { getCookie } from "../../utils/helpers";
import errorHandler from "./errorHandler";

/**
 * Configures interceptors for a given Axios instance
 * @param {AxiosInstance} httpClient - The Axios instance to configure
 */

export const setupInterceptors = (httpClient) => {
    // debugger;
    // request
    httpClient.interceptors.request.use(
        (config) => {
            // Add Authorization token
            console.log(document.cookie);
            if (config.requiresAuth) {
                const token = getItem("authToken");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }

            // add csrf token if required
            if (config.requiresCSRF) {
                // const test = getCookie(import.meta.env.VITE_XSRF_TOKEN_NAME);
                // const csrfToken = getItem("csrfToken"); // Fetch CSRF token
                const csrfToken = getCookie(import.meta.env.VITE_XSRF_TOKEN_NAME);

                if (csrfToken) {
                    config.headers["X-CSRFToken"] = csrfToken;
                }
            }

            // log request details
            console.log(` Request: ${config.method.toUpperCase()} ${config.url},`, config);

            return config;
        },
        (error) => {
            // handle request errors
            console.error(`Request error: `, error);
            return Promise.reject(error);
        }
    );
    // reponse
    httpClient.interceptors.response.use(
        (response) => {
            // debugger;
            const authToken = response.headers["authorization"];
            authToken
                ? setItem(import.meta.env.VITE_AUTH_TOKEN_NAME, `Bearer ${authToken}`)
                : removeItem(import.meta.env.VITE_AUTH_TOKEN_NAME);
            const xsToken = getCookie(import.meta.env.VITE_XSRF_TOKEN_NAME);
            xsToken && authToken ? (response.headers["X-CSRFToken"] = xsToken) : null;

            return response;
        },
        (error) => {
            return errorHandler(error);
            // debugger;
            // if (error.response) {
            //     const { status, data } = error.response;

            //     if (status === 401) {
            //         console.error("Unauthorized - possible invalid token");
            //         // Optional: Redirect to login or clear local storage
            //     } else if (status === 403) {
            //         console.error("Forbidden - insufficient permissions");
            //     } else if (status >= 500) {
            //         console.error("Server error:", data.message || "Something went wrong");
            //     }
            // } else {
            //     console.error("Network error:", error.message || "Unable to connect to the server");
            // }
            // return Promise.reject(error);
        }
    );
};

// import errorHandler from './errorHandler';

// export const setupInterceptors = (httpClient) => {
//   httpClient.interceptors.request.use(
//     (config) => {
//       console.log('Request Interceptor:', config);
//       return config;
//     },
//     (error) => {
//       console.error('Request Error:', error);
//       return Promise.reject(error);
//     }
//   );

//   httpClient.interceptors.response.use(
//     (response) => {
//       // Access response headers
//       const headers = response.headers;

//       // Example: Log specific headers (like CSRF tokens or custom headers)
//       if (headers['x-csrf-token']) {
//         console.log('CSRF Token:', headers['x-csrf-token']);
//         // Optionally store the token for future requests
//         localStorage.setItem('csrfToken', headers['x-csrf-token']);
//       }

//       if (headers['authorization']) {
//         console.log('Authorization Header:', headers['authorization']);
//         // Optionally update the auth token in localStorage
//         localStorage.setItem('authToken', headers['authorization']);
//       }

//       return response;
//     },
//     (error) => {
//       return errorHandler(error); // Pass errors to the centralized handler
//     }
//   );
// };
