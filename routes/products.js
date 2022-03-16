import express from "express";

import { getProducts, createProducts } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/", createProducts);

export default router;
