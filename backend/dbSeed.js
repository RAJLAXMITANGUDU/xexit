const mongoose = require("mongoose");
const User = require("./models/user.model");
const user = {
  username: "admin",
  password: "admin",
  role: "hr",
};
const seedDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajlaxmitangudu:Laxmi-2002@xexit.l5l1lhd.mongodb.net/xexit?retryWrites=true&w=majority&appName=xexit"
    );
    await User.create(user);
    console.log("Admin inserted ");
  } catch (error) {
    console.log(error);
  }
};

seedDb();