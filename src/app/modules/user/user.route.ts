import { Router } from "express";
import { UserController } from "./user.controller";
import { validaterequest } from "../../middleware/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validaterequest(createUserZodSchema),
  UserController.createUser,
);
router.get(
  "/all-user",
  validaterequest(updateUserZodSchema),
  UserController.getAllUsers,
);

export const UserRoutes = router;
