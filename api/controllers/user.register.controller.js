import { userModelNameEmailPhonePassword,userModelEmailPassword } from "../models/user.register.models.js";
import connectDB from "../config/db.js";

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

export { signupUsingNameEmailPhonePassword,sigupusingEmailPassword };
