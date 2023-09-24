import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

interface ErrorResponse {
  status?: number;
  message?: string;
  data?: any;
}

const apiConfig: ApiConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  timeout: 10000, // Adjust the timeout as needed
};

const axiosInstance: AxiosInstance = axios.create(apiConfig);

// Error handling interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const errorResponse: ErrorResponse = {};

    if (error.response) {
      // The request was made and the server responded with a status code
      errorResponse.status = error.response.status;
      errorResponse.message = 'Response Error';
      errorResponse.data = error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      errorResponse.message = 'Request Error';
    } else {
      // Something happened in setting up the request
      errorResponse.message = 'General Error';
      errorResponse.data = error.message;
    }

    console.error(errorResponse);
    return Promise.reject(errorResponse);
  }
);

// API methods
const api = {
  // GET request
  get: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url),

  // POST request
  post: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.post<T>(url, data),

  // PUT request
  put: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.put<T>(url, data),

  // DELETE request
  delete: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.delete<T>(url),
};

export default api;