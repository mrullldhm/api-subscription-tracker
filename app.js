import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome To The Subscription Tracker API");
});

app.listen(port, () => {
  console.log(
    `The Subscription Tracker API running on http://localhost:${port}`
  );
});

export default app