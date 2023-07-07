import express, { Response, Request, Router } from "express"
import MessageResponse from "../interfaces/MessageResponse"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response<MessageResponse>): Response => {
	return res.status(200).json({
		message: "Working 💡"
	})
})
