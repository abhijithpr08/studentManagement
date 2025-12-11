import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name:{ type:String, required:true },
        email:{ type:String, required:true, unique:true },
        rollNumber:{ type:String, required:true },
        maths:Number,
        che:Number,
        phy:Number
    }
)
export default mongoose.model("students", studentSchema) 