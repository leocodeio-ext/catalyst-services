import { userModelNameEmailPhonePassword,userModelEmailPassword, userModeNamePassword } from "../models/user.register.models.js";
import connectDB from "../config/db.js";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";

const signupUsingNameEmailPhonePassword = async (req, res) => {
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModelNameEmailPhonePassword;
  const { name, email, phone, password } = req.body.data;
  try {
    const user = new User({ name, email, phone, password });
    await user.save();
    console.log("user succesfully saved")
    const tokenFornameEmailPhonePassword = jwt.sign({userid:user._id},JWT_SECRET)
    res.status(200).json({
      msg:"siginup successfull",
      token:tokenFornameEmailPhonePassword
    });
    console.log("signup sucess")
  } catch (err) {
    console.error("error while signing up", err);
    res.status(500).send("error while signing up");
  }
};

const sigupusingEmailPassword = async(req,res)=>{
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModelEmailPassword;
  const {email,password} = req.body.data;
  try {
    const user = new User({email,password});
    await user.save();
    console.log("user succesfully saved")
    const tokenFORemailPassword = jwt.sign({userid:user._id},JWT_SECRET)
    res.status(200).json({
      msg:"siginup successfull",
      token:tokenFORemailPassword
    });
    console.log("sigup success using email and password");
  }catch(err) {
    console.error("error occured while siginingup using email and password",err);
    res.status(500).send("error ocurred while siginingup")
  }

};

const sigupusingNamePassword = async(req,res)=>{
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModeNamePassword;
  const {username,password} = req.body.data;
  try {
    const user = new User({username,password});
    await user.save();
    console.log("user succesfully saved")
    const tokenFORnamePassword = jwt.sign({userid:user._id},JWT_SECRET)
    res.status(200).json({
      msg:"siginup successfull",
      token:tokenFORnamePassword
    });
    console.log("signup success using name and password");
  }catch(err) {
    console.error("error occured while siginingup using name and password",err);
    res.status(500).send("error ocurred while siginingup")
  }

};

export { signupUsingNameEmailPhonePassword,sigupusingEmailPassword,sigupusingNamePassword };
