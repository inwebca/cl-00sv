import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string; // stockez le mot de passe haché
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
