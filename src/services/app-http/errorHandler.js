import { toast } from "react-toastify"; // Optional: for showing error messages to the user

/**
 * Handles errors globally for Axios or other network requests.
 * @param {Object} error - The error object from Axios or other sources.
 * @returns {Promise} - A rejected promise to propagate the error.
 */
const errorHandler = (error) => {
    // Check if it's a network error (no response from server)
    if (!error.response) {
        console.error("Network Error:", error.message);
        toast.error("Network error. Please check your internet connection.");
        return Promise.reject(error);
    }

    // Extract response details
    const { status, data } = error.response;

    // Handle specific status codes
    switch (status) {
        case 400: // Bad Request
            console.error("Bad Request:", data.message || "Invalid request.");
            toast.error(data.message || "Invalid request.");
            break;

        case 401: // Unauthorized
            console.error("Unauthorized:", "You need to log in again.");
            toast.error("Your session has expired. Please log in again.");
            // Optional: Redirect to login or clear storage
            break;

        case 403: // Forbidden
            console.error("Forbidden:", data.message || "Access denied.");
            toast.error(data.message || "You do not have permission to perform this action.");
            break;

        case 404: // Not Found
            console.error("Not Found:", data.message || "The requested resource was not found.");
            toast.error(data.message || "Resource not found.");
            break;

        case 422: // Unprocessable
            console.error("Unprocessable:", data.message || "Access denied.");
            toast.error(data.message || "You do not have permission to perform this action.");
            break;

        case 500: // Internal Server Error
            console.error("Server Error:", data.message || "Something went wrong on the server.");
            toast.error("An error occurred on the server. Please try again later.");
            break;

        default:
            console.error(`Error ${status}:`, data.message || "An unknown error occurred.");
            toast.error(data.message || "An unknown error occurred.");
            break;
    }

    // Propagate the error so it can be handled further if needed
    return Promise.reject(error);
};

export default errorHandler;
