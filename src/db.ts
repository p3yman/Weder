import mongoose from "mongoose";

try {
  mongoose.connect(process.env.DATABASE || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB database");
} catch (error) {
  console.log(error);
}
