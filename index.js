const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const app = express();
const port = 3001;
const FormRoutes = require("./Routes/form");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log("file", file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Hey");
});

// Middlewares
// Enabling CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Form Middleware
app.use("/form", FormRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);
