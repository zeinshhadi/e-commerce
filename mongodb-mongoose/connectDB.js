import mongoose from "mongoose";
const url =
  "mongodb+srv://zeinshhadi:123123321@e-commerce.8fq6zle.mongodb.net/";
// mongoose.connect(url);

const connectdb = async (dbURL) => {
  try {
    await mongoose.connect(dbURL).then(
      () => console.log("connected Successfully...."),
      (err) => console.log("connection error", err)
    );
  } catch (error) {
    console.log(error);
  }
};

connectdb(url);
