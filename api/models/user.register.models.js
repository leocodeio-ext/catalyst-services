import mongoose from "mongoose";

const userSchemaNameEmailPhonePassword = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSchemaEmailPassword = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }

})

const userModelNameEmailPhonePassword = mongoose.model(
  "user",
  userSchemaNameEmailPhonePassword
);

export { userModelNameEmailPhonePassword };
