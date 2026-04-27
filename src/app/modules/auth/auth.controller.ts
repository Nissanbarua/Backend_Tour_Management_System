/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.service";
import { catchAsync } from "../../utils/catchAsync";
import AppError from "../../errorHelpers/AppError";
import { SetAuthCookie } from "../../utils/setCookie";

const credentialLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialLogin(req.body);

    SetAuthCookie(res, loginInfo);

    sendResponse(res, {
      success: true,
      message: "Logged in succesfully",
      statusCode: httpStatus.CREATED,
      data: loginInfo,
    });
  },
);
const getNewAccessToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new AppError(
        httpStatus.BAD_GATEWAY,
        "No refresh token found in cookie",
      );
    }
    const tokenInfo = await AuthServices.getNewAccessToken(
      refreshToken as string,
    );

    SetAuthCookie(res, tokenInfo);

    sendResponse(res, {
      success: true,
      message: "Logged in succesfully",
      statusCode: httpStatus.CREATED,
      data: tokenInfo,
    });
  },
);

export const AuthControllers = {
  credentialLogin,
  getNewAccessToken,
};
