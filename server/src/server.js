const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/User");
const authRoute = require("./routes/Auth");
const conversationRoute = require("./routes/Conversations");
const messageRoute = require("./routes/Messages");

dotenv.config();


const mongoURL = 'mongodb+srv://jedgray0:GVEk5n9zM4MvC02z@cluster0.17m9tt5.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(
  mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("error connecting:", error);
})
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(3001, () => {
  console.log("Backend server is running!");
});
