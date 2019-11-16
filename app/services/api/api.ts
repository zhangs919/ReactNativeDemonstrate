import {ApisauceInstance, create, ApiResponse} from "apisauce"
import {getGeneralApiProblem} from "./api-problem"
import {ApiConfig, DEFAULT_API_CONFIG} from "./api-config"
import * as Types from "./api.types"
import {Platform} from "react-native";

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // 获取当前访问应用设备
    // @ts-ignore
    let platform = Platform.OS === 'IOS' ? 'ios' : 'android';

    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        'User-Access-Agent': 'lrwapp/' + platform,
      },
    })
  }

  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertUser = raw => {
      return {
        id: raw.id,
        name: raw.name,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: Types.User[] = rawUsers.map(convertUser)
      return {kind: "ok", users: resultUsers}
    } catch {
      return {kind: "bad-data"}
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
      }
      return {kind: "ok", user: resultUser}
    } catch {
      return {kind: "bad-data"}
    }
  }

  async getAppGuide(): Promise<Types.GetAppGuideResult> {
    const response: ApiResponse<any> = await this.apisauce.get(`/site/app-guide`)

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    const imageHost = this.config.imageHost;

    // const convertAppGuide = raw => {
    //   return {
    //     app_enter_button: imageHost + raw.app_enter_button
    //   }
    // }

    // console.log(response)
    try {
      const resultAppGuide: Types.AppGuide = {
        app_enter_button: imageHost + response.data.app_enter_button,
      }
      return {kind: "ok", app_guide: resultAppGuide}
    } catch {
      return {kind: "bad-data"}
    }

    // try {
    //   const rawAppGuide = response.data
    //   const resultAppGuide: Types.AppGuide = rawAppGuide.map(convertAppGuide)
    //
    //   return {kind: "ok", app_guide: resultAppGuide}
    // } catch {
    //   return {kind: "bad-data"}
    // }
  }
}
