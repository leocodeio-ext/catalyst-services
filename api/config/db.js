import mongoose from "mongoose";

const connectDB = async (MONGO_URL) => {
  try{
    await mongoose.connect(MONGO_URL);
    console.log("db connection sucess");
  }catch(err){
    console.log("err occured while connecting",err);
  }
}

export default connectDB;