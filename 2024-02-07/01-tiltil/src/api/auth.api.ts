import axios from "axios";

const authClient = axios.create({
  baseURL: "https://port-0-auth-server-qrd2als49b8m4.sel5.cloudtype.app",
});

async function signUp(data: { id: string; pw: string; name: string }) {
  const response = await authClient.post("/auth/sign-up", data);
  console.log(response);
}

async function logIn(data: { id: string; pw: string }) {
  const response = await authClient.post("/auth/log-in", data);
  console.log(response);
}

const auth = {
  signUp,
  logIn,
};

export default auth;
