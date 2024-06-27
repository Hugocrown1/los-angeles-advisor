import mongoose from "mongoose";

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Attraction ||
  mongoose.model("Attraction", attractionSchema);
