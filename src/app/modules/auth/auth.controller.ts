/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.service";
import { catchAsync } from "../../utils/catchAsync";

const credentialLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialLogin(req.body);

    sendResponse(res, {
      success: true,
      message: "Logged in succesfully",
      statusCode: httpStatus.CREATED,
      data: loginInfo,
    });
  },
);

export const AuthControllers = {
  credentialLogin,
};
