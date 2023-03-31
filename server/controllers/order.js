import { asyncError } from "../middlewares/errorMiddleware";
import { Order } from "../models/Order";

export const placeOrder = asyncError(
    async (req,res,next)=>{
        const {
            shippingInfo,
            prderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmont,
        } = req.body;
    
        const user = req.user._id;
    
        const orderOptions = {
            shippingInfo,
            prderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmont,
            user,
        };
    
        await Order.create(orderOptions);
    
        res.status(201).json({
            succes:true,
            message:"Order Placed Succesfully via Cash on Delivery",
        })
    
    }
)