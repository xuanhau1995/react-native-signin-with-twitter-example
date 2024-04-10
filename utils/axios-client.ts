import axios from 'axios'
import queryString from 'query-string'

// Base URL for your API, you can replace it with your actual API URL
const API_URL = 'https://api.osake.asia/'

// Function to get access token, you need to replace it with your actual logic
const getAccessToken = () => {
  // return the access token, or fetch it from AsyncStorage, or however you manage it in your app
  return ''
}

// Creating a new axios client with the baseURL, headers, and paramsSerializer.
export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

// Intercepting the request and adding the Authorization header with the access token.
axiosClient.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken()
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

// Intercepting the response and returning the data.
axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Creating a new axios client for FormData requests.
export const axiosClientFormData = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

// Intercepting the response and returning the data.
axiosClientFormData.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
