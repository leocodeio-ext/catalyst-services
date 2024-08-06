import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import userRegisterRoutes from "./routes/user.signup.routes.js";

app.use(cors());
app.use(express.json());
app.use("/registerUser", userRegisterRoutes);

app.listen(port, () => {
  console.log("ruuning at", port);
});
