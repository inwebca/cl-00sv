import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/User";

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
