import { Router } from "express";
import { getUsers,  getUser} from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize ,getUsers);

userRouter.get("/:id", authorize,getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE users details" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE users details" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE users details" });
});

export default userRouter;
