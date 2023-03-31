import ErrorHandler from "../utils/ErrorHendler.js";


export const isAuthenticated = (req,res,next)=>{

    const token = req.cookies["connect.sid"];
    
    

    if(!token){
        return next(new Error("Not Logged In",401));
    }
    next();
}