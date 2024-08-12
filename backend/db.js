import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("db on")
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default db;
