import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  bio: {
    required: true,

    type: String,
  },
});

const User = mongoose.models.users ?? mongoose.model("users", UserSchema);

export default User;
