import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    leaderboardId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    teamId: { type: String, required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model('Leaderboard', leaderboardSchema);