// models/User.ts
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  password: { type: String, required: true },
  playlist: [
    {
    trackName: String,
    artistName: String,
    artworkUrl: String,
    previewUrl: String,
    trackId: String,
  },

],
});

export const User =
  mongoose.models.User || mongoose.model('User', userSchema);


