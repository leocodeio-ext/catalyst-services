import { userModelNameEmailPhonePassword,userModelEmailPassword, userModeNamePassword } from "../models/user.register.models.js";
import connectDB from "../config/db.js";
import { JWT_SECRET } from "../secret.js";
const jwt = require("jsonwebtoken");

const signupUsingNameEmailPhonePassword = async (req, res) => {
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModelNameEmailPhonePassword;
  const { name, email, phone, password } = req.body.data;
  try {
    const user = new User({ name, email, phone, password });
    await user.save();
    res.status(200).send("signup sucess");
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
    res.status(200).send("sigup success using email and password");
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
  const {name,password} = req.body.data;
  try {
    const user = new User({name,password});
    await user.save();
    const token = jwt.sign(JWT_SECRET,user._id) 
    res.status(200).json({
      msg:"siginup successfull",
      token:token
    });
    console.log("sigup success using name and password");
  }catch(err) {
    console.error("error occured while siginingup using name and password",err);
    res.status(500).send("error ocurred while siginingup")
  }

};

export { signupUsingNameEmailPhonePassword,sigupusingEmailPassword,sigupusingNamePassword };
