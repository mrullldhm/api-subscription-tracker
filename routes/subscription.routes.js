import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "READ all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "READ subscriptions" });
});

subscriptionRouter.post("/:id", (req, res) => {
  res.send({ title: "CREATE subscriptions" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscriptions" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscriptions" });
});

subscriptionRouter.get("/users/:id", (req, res) => {
  res.send({ title: "READ all users subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL users subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "READ upcoming renewals" });
});

export default subscriptionRouter;
