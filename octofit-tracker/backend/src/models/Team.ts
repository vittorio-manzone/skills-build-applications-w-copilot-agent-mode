import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    teamId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mascot: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model('Team', teamSchema);