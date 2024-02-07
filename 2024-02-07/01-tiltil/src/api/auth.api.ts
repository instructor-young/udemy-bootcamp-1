import { authClient } from ".";

async function signUp(dto: { id: string; pw: string; name: string }) {
  const response = await authClient.post("/auth/sign-up", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  if (!accessToken) throw new Error("회원가입에 실패하였습니다~!");

  authClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

async function logIn(dto: { id: string; pw: string }) {
  const response = await authClient.post("/auth/log-in", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  if (!accessToken) throw new Error("로그인에 실패하였습니다~!");

  authClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

const auth = {
  signUp,
  logIn,
};

export default auth;
