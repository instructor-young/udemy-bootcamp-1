import { Router } from "express";
import brandsService from "./brands.service";

const brandsController = Router();

brandsController.get("/", brandsService.getBrands);
brandsController.get("/:brandId", brandsService.getBrand);

export default brandsController;
