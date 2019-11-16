import {GeneralApiProblem} from "./api-problem"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export interface AppGuide {
  app_enter_button: string
}

export type GetAppGuideResult = { kind: "ok"; app_guide: AppGuide } | GeneralApiProblem
