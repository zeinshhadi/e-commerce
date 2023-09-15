import "../connectDB.js";
import User from "..models/User";

run();
async function run() {
  const user = await User.create({
    name: "Zein",
    email: "zeinshhadi@hotmail.com",
    password: "12345",
    phoneNumber: "71503760",
    location: "Lebanons",
  });

  console.log(user);
}
