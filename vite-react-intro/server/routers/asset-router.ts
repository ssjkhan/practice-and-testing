import express, { Express, Request, Response, Router } from "express";

const router: Router = Router();

const imageRegex: RegExp = /\/.+\.(svg|png|jpg|png|jpeg)$/;
const videoRegex: RegExp = /\/.+\.(mp4|ogv)$/;

router.get(imageRegex, (req: Request, res: Response) => {
  const filePath = req.path;
  res.redirect(303, `http://localhsot:300/src${filePath}`);
});

router.get(videoRegex, (req: Request, res: Response) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:300/src${filePath}`);
});

export default router;
