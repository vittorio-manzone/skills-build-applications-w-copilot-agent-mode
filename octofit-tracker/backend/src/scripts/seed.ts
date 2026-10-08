import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      { teamId: 'team-1', name: 'OctoFit Originals', mascot: 'Octocat', memberCount: 8, weeklyGoalMinutes: 1200 },
      { teamId: 'team-2', name: 'Runtime Racers', mascot: 'Runner', memberCount: 6, weeklyGoalMinutes: 900 },
      { teamId: 'team-3', name: 'Branch Pressers', mascot: 'Barbell', memberCount: 5, weeklyGoalMinutes: 750 },
    ]);

    await User.insertMany([
      { userId: 'user-1', name: 'Mona Octocat', email: 'mona@example.com', teamId: 'team-1', role: 'captain', weeklyMinutes: 186 },
      { userId: 'user-2', name: 'Hubot Prime', email: 'hubot@example.com', teamId: 'team-2', role: 'member', weeklyMinutes: 154 },
      { userId: 'user-3', name: 'Avery Commit', email: 'avery@example.com', teamId: 'team-3', role: 'member', weeklyMinutes: 132 },
    ]);

    await Activity.insertMany([
      { activityId: 'activity-1', userId: 'user-1', type: 'Run', durationMinutes: 32, caloriesBurned: 310, activityDate: new Date('2026-10-06T07:30:00Z') },
      { activityId: 'activity-2', userId: 'user-2', type: 'Strength', durationMinutes: 45, caloriesBurned: 260, activityDate: new Date('2026-10-06T18:15:00Z') },
      { activityId: 'activity-3', userId: 'user-3', type: 'Cycling', durationMinutes: 54, caloriesBurned: 430, activityDate: new Date('2026-10-07T06:45:00Z') },
    ]);

    await Leaderboard.insertMany([
      { leaderboardId: 'leaderboard-1', userId: 'user-1', teamId: 'team-1', rank: 1, points: 1240 },
      { leaderboardId: 'leaderboard-2', userId: 'user-2', teamId: 'team-2', rank: 2, points: 1115 },
      { leaderboardId: 'leaderboard-3', userId: 'user-3', teamId: 'team-3', rank: 3, points: 980 },
    ]);

    await Workout.insertMany([
      { workoutId: 'workout-1', name: '5K Builder', focus: 'Cardio', difficulty: 'Beginner', durationMinutes: 30, recommendedFor: ['user-1', 'user-3'] },
      { workoutId: 'workout-2', name: 'Core Circuit', focus: 'Strength', difficulty: 'Intermediate', durationMinutes: 25, recommendedFor: ['user-2'] },
      { workoutId: 'workout-3', name: 'Recovery Flow', focus: 'Mobility', difficulty: 'Beginner', durationMinutes: 20, recommendedFor: ['user-1', 'user-2', 'user-3'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
