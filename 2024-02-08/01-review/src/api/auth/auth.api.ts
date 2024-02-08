import { AxiosInstance } from "axios";
import { LogInDto } from "./auth.dto";
import { LogInData } from "./auth.response";

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  async logIn(dto: LogInDto) {
    const url = "/auth/log-in";
    const response = await this.coreClient.post<LogInData>(url, dto);
    const data = response.data;

    return data;
  }
}

export default AuthAPI;
