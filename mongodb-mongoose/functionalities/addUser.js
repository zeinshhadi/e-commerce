import User from "../models/User.js";
import "../connectDB.js";

const user1 = await User.create({
  username: "Zein shhadi",
  email: "zeinshhadi@gmail.com",
  password: "123456789",
  phoneNumber: "71503760",
  location: "Lebanons",
});

console.log(user1);
await user1
  .save()
  .then(() => {
    console.log("user1 saved 2");
  })
  .catch((error) => {
    console.error("error", error);
  });
// Find a single blog post
const firstUser = await User.findOne({});
c;
console.log(firstUser);
