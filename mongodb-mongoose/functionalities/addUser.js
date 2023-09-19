import User from "../models/User.js";
import "../connectDB.js";

const user1 = await User.create({
  username: "Zein ",
  email: "zeinshhadi@hotmail.com",
  password: "123456789",
  phoneNumber: "71503761",
  location: "Lebanon",
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

const firstUser = await User.findOne({});
console.log(firstUser);
