import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({

    Item_name: {
        type: String,
        required: true
      },

    razorpay_order_id:{
        type:String,
        required:true,
    }, 
    razorpay_payment_id:{
        type:String,
        required:true,
    }, 
    razorpay_signature:{
        type:String,
        required:true,
    },
});

export const payment = mongoose.model("payment",paymentSchema);