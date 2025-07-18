const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.route");
mongoose
  .connect(
    "mongodb+srv://rajlaxmitangudu:Laxmi-2002@xexit.l5l1lhd.mongodb.net/xexit1?retryWrites=true&w=majority&appName=xexit"
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.listen(8080, () => {
  console.log("Server started on port 8080");
});