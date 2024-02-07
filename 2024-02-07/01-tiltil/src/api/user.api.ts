import { Profile } from "@/types/Profile.type";
import { authClient } from ".";

async function getProfile() {
  const response = await authClient.get<Profile>("/user/profile");
  const data = response.data;

  return data;
}

async function updateProfile() {
  const response = await authClient.put<Profile>("/user/profile");
  const data = response.data;

  return data;
}

const user = {
  getProfile,
  updateProfile,
};

export default user;
