import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

const USER_NAME = "asdf";
const PASSWORD = "1234";

export function login(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  // get password with username
  if (password === PASSWORD) {
    const accessToken = Jwt.sign(
      { "username": USER_NAME },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "60s" },
    );

    const refreshToken = Jwt.sign(
      { "username": USER_NAME },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "120s" },
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 2 * 1000,
      sameSite: "strict",
    });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
}

export function register(req: Request, res: Response) {
  const { username, password } = req.body;
  console.log(username, password);

  const accessToken = Jwt.sign(
    { "username": USER_NAME },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "60s" },
  );

  const refreshToken = Jwt.sign(
    { "username": USER_NAME },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "120s" },
  );

  res.cookie("jwt", refreshToken, { httpOnly: true, maxAge: 60 * 2 });
  res.json(accessToken);
}
