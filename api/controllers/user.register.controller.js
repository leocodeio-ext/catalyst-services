import { userModelNameEmailPhonePassword } from "../models/user.register.models.js";
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

export { signupUsingNameEmailPhonePassword };
