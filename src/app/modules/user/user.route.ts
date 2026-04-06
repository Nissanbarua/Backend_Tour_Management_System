import { Router } from "express";
import { UserController } from "./user.controller";
import { validaterequest } from "../../middleware/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "./user.interface";

const router = Router();

router.post(
  "/register",
  validaterequest(createUserZodSchema),
  UserController.createUser,
);
router.get(
  "/all-user",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  UserController.getAllUsers,
);
router.patch(
  "/:id",
  validaterequest(updateUserZodSchema),
  checkAuth(...Object.values(Role)),
  UserController.updateUser,
);

export const UserRoutes = router;
