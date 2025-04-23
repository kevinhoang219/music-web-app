import mongoose, { Schema, Document, models } from "mongoose";


export interface IUser extends Document {
  email: string;
  name: string;
  spotifyId?: string;
  password?: string;
}


const UserSpotifySchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  spotifyId: { type: String },
  password: { type: String },
});


// Prevent model overwrite in dev
const UserSpotify = models.UserSpotify || mongoose.model<IUser>("UserSpotify", UserSpotifySchema);


export default UserSpotify;





