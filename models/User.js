import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
  photo: String
});

export default mongoose.model('User', userSchema);
