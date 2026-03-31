/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { User } from "./user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });

    res.status(httpStatus.CREATED).json({
      message: "User created succesfully",
      user,
    });
  } catch (error: any) {
    res.status(httpStatus.BAD_GATEWAY).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const UserController = {
  createUser,
};
