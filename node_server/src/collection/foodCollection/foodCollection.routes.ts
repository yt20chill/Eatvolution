import { Router } from "express";
import { foodCollectionController } from "../../utils/container";
import { AppUtils } from "../../utils/utils";

export const foodCollectionRoutes = Router();

foodCollectionRoutes.get(
  "/",
  AppUtils.exceptionWrapper(foodCollectionController.getWholeFoodCollection)
);
