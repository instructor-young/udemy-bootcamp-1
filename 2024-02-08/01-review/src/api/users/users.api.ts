import { AxiosInstance } from "axios";
import { UpdateProfileDto } from "./users.dto";
import { GetProfileData, UpdateProfileData } from "./users.response";

class UsersAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  async getProfile() {
    const url = "/users/profile";
    const response = await this.coreClient.get<GetProfileData>(url);
    const data = response.data;

    return data;
  }

  async updateProfile(dto: UpdateProfileDto) {
    const url = "/users/profile";
    const response = await this.coreClient.put<UpdateProfileData>(url, dto);
    const data = response.data;

    return data;
  }
}

export default UsersAPI;
