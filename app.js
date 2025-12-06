import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
// import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = express();

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Arcjet Middleware
// app.use(arcjetMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome To The Subscription Tracker API");
});

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

// Error Handller Middleware
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(
    `The Subscription Tracker API running on http://localhost:${PORT}`
  );

  await connectToDatabase();
});

export default app;
