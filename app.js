import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To The Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(
    `The Subscription Tracker API running on http://localhost:${PORT}`
  );
});

export default app