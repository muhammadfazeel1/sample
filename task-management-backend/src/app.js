const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch(console.error);

const Task = require("./models/task");

app.get("/tasks", (req, res) => {});

app.post("/task/new", (req, res) => {});

app.delete("/task/delete/:id", async (req, res) => {});

app.put("/task/update/:id", async (req, res) => {});

app.listen(process.env.PORT);
