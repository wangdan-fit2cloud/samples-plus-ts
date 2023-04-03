/* 前后端不分离的登录方式 */
import { get, post, put } from "@/utils/request";

/**
 * 登录表单类型声明
 */
export interface LoginFormData {
  username: string;
  password: string;
}

/**
 * 登录用户类型声明
 */
export interface UserInfo {
  id?: string;
  name?: string;
  email?: string;
  roles?: Array<string>;
  language?: string;
  createTime?: number;
}

export function login(data: LoginFormData) {
  return post("/api/user/login", data);
}

export function logout() {
  return post("/api/user/logout");
}

export function isLogin() {
  return get("/api/user/is-login");
}

export function getCurrentUser() {
  return get("/api/user/current");
}

export function updateInfo(data: UserInfo) {
  return put("/api/user/info/update", data);
}
