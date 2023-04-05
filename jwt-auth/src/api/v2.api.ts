import { NextFunction, Request, Response, Router } from "express";
import { verifyJwt } from "@middleware/auth.middleware";
const router: Router = Router();

function apiReturn(val: string) {
  return function (req: Request, res: Response) {
    console.log(req.headers);
    res.json({ msg: `Response from api/v2 at endpoint: ${val}` });
  };
}
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("cookies");
  console.log(req.cookies);
  next();
});
router.use(verifyJwt);
router.route("/")
  .get(apiReturn("get"))
  .post(apiReturn("post"))
  .patch(apiReturn("patch"))
  .delete(apiReturn("del"));

export default router;
