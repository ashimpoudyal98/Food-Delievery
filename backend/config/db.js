import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ashim1998poudyal:ashimbarca98@cluster0.nyoeyu4.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
