import axios from "axios"

const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=10"

export const getCatImages = async () => {
  const response = await axios.get(API_URL)

  return response.data
}