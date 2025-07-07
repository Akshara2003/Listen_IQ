const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    contactPerson: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    tier: {
      type: String,
      enum: ["Bronze", "Silver", "Gold"],
      default: "Bronze",
    },

    region: {
      type: String,
      default: "",
    },

    dateJoined: {
      type: Date,
      default: Date.now,
    },

    lastActivity: {
      type: Date,
      default: null,
    },

    totalLeads: {
      type: Number,
      default: 0,
    },

    dealsClosed: {
      type: Number,
      default: 0,
    },

    pipelineValue: {
      type: Number,
      default: 0,
    },

    winRate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
