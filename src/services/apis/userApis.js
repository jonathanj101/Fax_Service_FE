import { httpClient } from "../app-http";

// async function fetchTestUser() {
//     try {
//         const response = await httpClient.get("/user/login", {
//             requiresAuth: false
//         });
//         console.log("resoinse", response);
//     } catch (error) {
//         console.error("Error fetching", error);
//     }
// }

// fetchTestUser();
export const login = (credentials) =>
    httpClient.put("user/login", credentials, { requiresAuth: false, requiresCSRF: false });

export const logout = () => httpClient.put("user/logout");
export const register = (formData) => httpClient.post("user/register", formData);
export const getLoggedInUserData = () =>
    httpClient.get("user/get-logged-in-user-info", {}, { requiresAuth: true });
export const forgotPassword = (data) => httpClient.post("user/forgot-password", data);
export const resetPassword = (data) => httpClient.post("user/reset-password", data);
export const updateUserInfo = (data) =>
    httpClient.post("user/update-user", data, { requiresAuth: true });
export const getUserByEmail = (data) =>
    httpClient.get("user/get-user-by-email", data, { requiresAuth: true, requiresCSRF: true });
