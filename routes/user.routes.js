import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "READ all users" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "READ users details" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new users " });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE users details" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE users details" });
});

export default userRouter;
