import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "READ all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "READ subscriptions" });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscriptions" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscriptions" });
});

subscriptionRouter.get("/users/:id", authorize, getUserSubscription);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL users subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "READ upcoming renewals" });
});

export default subscriptionRouter;
