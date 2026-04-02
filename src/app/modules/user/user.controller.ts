/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Create user successfully",
      user,
    });
  },
);
const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserServices.getAllUsers();

    res.status(httpStatus.OK).json({
      success: true,
      message: "All user get successfully",
      users,
    });
  },
);

export const UserController = {
  createUser,
  getAllUsers,
};
