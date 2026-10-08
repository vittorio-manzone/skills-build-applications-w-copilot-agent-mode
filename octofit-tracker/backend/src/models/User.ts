import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: String, required: true },
    role: { type: String, required: true },
    weeklyMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model('User', userSchema);