import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To The Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(
    `The Subscription Tracker API running on http://localhost:${PORT}`
  );
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

export default app;
