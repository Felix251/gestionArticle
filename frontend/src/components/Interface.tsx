export interface BaseUser {
  login: string;
  password: string;
  tokenGenerate: string;
}
export interface User extends BaseUser {
  id: number;
}
