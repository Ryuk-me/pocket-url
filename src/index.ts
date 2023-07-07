import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import Helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import MessageResponse from "./interfaces/MessageResponse"

dotenv.config()

const port = process.env.PORT || 8009
const app: Express = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(Helmet())
app.use(morgan("dev"))
app.use(cors())

app.get<never, MessageResponse>("/", (req: Request, res: Response) => {
	res.status(200).json({
		message: "Working 💡"
	})
})


app.listen(port, () => {
	console.log("⚡[server] Running Visit: http://localhost:" + port)
})


