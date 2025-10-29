import mongoose from "mongoose";
const sampleSchema = new mongoose.Schema(
  { name: { type: String, required: true }, message: { type: String } },
  { timestamps: true }
);
const Sample = mongoose.model("Sample", sampleSchema);
export default Sample;
