import axios from "axios";
import auth from "./auth.api";
import tils from "./til.api";
import user from "./user.api";

export const authClient = axios.create({
  baseURL: "https://port-0-auth-server-qrd2als49b8m4.sel5.cloudtype.app",
});

const API = { auth, tils, user };

export default API;
