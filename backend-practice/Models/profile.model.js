import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  candidate_name: {
    type: String,
    required: [true, "Please provide candidate name"],
  },
  age: {
    type: Number,
    required: [true, "Please provide candidate age"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: [true, "Email has already been used"],
  },
  contactNumber: {
    type: Number,
  },
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  interview_status: {
    type: String,
    enum: ["Pending", "completed", "rejected"],
  },
  position: {
    type: String,
  },
},{timestamps:true});

const Profile = mongoose.model('Profile',profileSchema);
export default Profile