import axios from "axios";
import AuthAPI from "./auth/auth.api";
import UsersAPI from "./users/users.api";

const coreClient = axios.create({
  baseURL: "https://port-0-auth-server-qrd2als49b8m4.sel5.cloudtype.app",
});

class API {
  static auth = new AuthAPI(coreClient);
  static users = new UsersAPI(coreClient);

  static setAccessToken(accessToken: string) {
    coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  static removeAccessToken() {
    coreClient.defaults.headers.common.Authorization = "";
  }
}

export default API;
