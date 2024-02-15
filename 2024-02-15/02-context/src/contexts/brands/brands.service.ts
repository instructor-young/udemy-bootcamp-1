import { Request, Response } from "express";
import brandsModel from "./brands.model";

class BrandsService {
  async getBrands(req: Request, res: Response) {
    const brands = await brandsModel.findMany();

    res.json(`너는 ${req.user!.id}구나`);
  }

  async getBrand(req: Request, res: Response) {
    const brandId = Number(req.params.brandId);
    const brand = await brandsModel.findUnique(brandId);

    res.json(brand);
  }
}

const brandsService = new BrandsService();

export default brandsService;
