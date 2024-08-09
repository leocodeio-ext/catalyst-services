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
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }

})

const userSchemaNamePassword = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }

})

const userModelNameEmailPhonePassword = mongoose.model(
  "user",
  userSchemaNameEmailPhonePassword
);

const userModelEmailPassword = mongoose.model(
  "userEP",
  userSchemaEmailPassword
)

const userModeNamePassword = mongoose.model(
  'userNP',
  userSchemaNamePassword
)

export  {
  userModelEmailPassword,
  userModeNamePassword,
  userModelNameEmailPhonePassword
}