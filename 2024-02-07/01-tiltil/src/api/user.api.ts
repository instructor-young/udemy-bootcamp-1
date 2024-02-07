import { authClient } from ".";

async function getProfile() {
  const response = await authClient.get("/user/profile");
  const data = response.data;
  console.log(data);
}

const user = {
  getProfile,
};

export default user;
