import { Request, Response, Router } from "express";
import { verifyJwt } from "@middleware/auth.middleware";
const router: Router = Router();

function apiReturn(val: string) {
  return function (req: Request, res: Response) {
    res.json({ msg: `Response from api/v2 at endpoint: /${val}` });
  };
}

router.use(verifyJwt);
router.route("/")
  .get(apiReturn("get"))
  .put(apiReturn("put"))
  .patch(apiReturn("patch"))
  .delete(apiReturn("del"));

export default router;
