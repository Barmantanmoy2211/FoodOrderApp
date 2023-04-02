import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/ErrorHendler.js";

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
    
        const user = "req.user._id";
    
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

export const getMyOrders = asyncError(async(req,res,next)=>{
    const orders = await Order.find({
        user: req.user._id,
    }).populate("user","name")

    res.status(200).json({
        succes:true,
        orders,
    })
})

export const getOrderDetails = asyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.Id).populate("user","name")

    if(!order) return next( new ErrorHandler("Invalid Order Id",404))

    res.status(200).json({
        succes:true,
        orders,
    })
})

export const getAdminOrders = asyncError(async(req,res,next)=>{
    const orders = await Order.find({}).populate("user","name")

    res.status(200).json({
        succes:true,
        orders,
    })
})
export const processOrder = asyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.Id)

    if(!order) return next( new ErrorHandler("Invalid Order Id",404))

    if(order.orderStatus==="Preparing") order.orderStatus = "Shipped";
    else if(order.orderStatus==="Shipped"){
        order.orderStatus = "Delivered";
        order.deliveredAt = new Date(Data.now());
    } 
    else if (order.orderStatus === "Delivered") return next(new ErrorHandler("Food Already Delivered",400))

    await order.save();

    res.status(200).json({
        succes:true,
        message: "Status update succesfully"
    })
})