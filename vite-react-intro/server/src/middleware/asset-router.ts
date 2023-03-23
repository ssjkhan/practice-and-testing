import express, { Request, Response, Router } from "express";

const router: Router = Router();

const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats
const videoRegex = /\/.+\.(mp4|ogv)$/i;

router.get(imageRegex, (req: Request, res: Response) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

router.get(videoRegex, (req: Request, res: Response) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

export default router;
