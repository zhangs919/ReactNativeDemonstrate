import { API_URL,API_IMAGE_HOST } from "react-native-dotenv"

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  imageHost: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  // url: API_URL || "https://jsonplaceholder.typicode.com",
  url: "http://www.mall.laravelvip.com",
  imageHost: API_IMAGE_HOST,
  timeout: 10000,
}
