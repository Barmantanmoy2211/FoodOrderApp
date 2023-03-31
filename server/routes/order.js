import express from "express";
import { getAdminOrders, getMyOrders, getOrderDetails, placeOrder, processOrder } from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder",placeOrder);

router.get("/myorders",isAuthenticated,getMyOrders)

router.get("/order/:id",isAuthenticated,getOrderDetails)

router.get("/admin/orders",isAuthenticated,authorizeAdmin, getAdminOrders)

router.get("/admin/order/:id",isAuthenticated,authorizeAdmin, processOrder)

export default router;