import axios from "axios";
import { BallangResponse } from "../../types/ballang.type";
import { Brand } from "./brands.type";

const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

class BrandsModel {
  async findMany() {
    const response = await client.get<BallangResponse<Brand[]>>("/brands");
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const brands = data.result;

    return brands;
  }

  async findUnique(brandId: number) {
    const response = await client.get<BallangResponse<Brand[]>>(
      `/brands/${brandId}`
    );
    const data = response.data;
    if (!data.success) throw new Error(data.error.message);

    const brands = data.result;

    return brands;
  }

  create() {}

  update() {}

  delete() {}
}

const brandsModel = new BrandsModel();

export default brandsModel;
