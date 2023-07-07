import express, { Request, Response, Router } from "express"
import PocketUrl from "../../../models/url.model"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response<PocketUrl[]>): Response => {
	return res.json([
		{
			original_url: "original Url <test>"
		}
	])
})

export { router as UrlRouter }
