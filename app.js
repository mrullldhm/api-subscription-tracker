import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
