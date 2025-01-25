import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["verified", "false", "unverified"],
    default: "unverified",
  },
  claimAccuracy: {
    type: Number,
    default: 0,
  },
  verificationDetails: String,
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    credibilityScore: {
      type: Number,
      default: 0,
    },
    verifiedClaims: {
      type: Number,
      default: 0,
    },
    totalClaims: {
      type: Number,
      default: 0,
    },
    claims: [ClaimSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
