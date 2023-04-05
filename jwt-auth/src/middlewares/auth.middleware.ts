import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

interface IUserReq extends Request {
  user?: string;
}

interface IJwtPayload extends JwtPayload {
  username: string;
}

export function verifyJwt(req: IUserReq, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.sendStatus(401);
  }

  console.log(authHeader);
  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET!,
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.user = (decoded as IJwtPayload).username;
      console.log(decoded);
      next();
    },
  );
}
