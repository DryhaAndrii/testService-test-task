require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
console.log("ENV:", process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
