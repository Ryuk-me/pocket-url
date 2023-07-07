import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import Helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import MessageResponse from "./interfaces/MessageResponse"
import { UrlRouter } from "./routers/api/v1/url.router"
import packageJson from "./utils/package.json.reader"
dotenv.config()

console.log(
	"🚀",
	"@" + packageJson.author.username + "/" + packageJson.name,
	"v" + packageJson.version + ` [${process.env.NODE_ENV}]`
)

const port = process.env.PORT || 8009
const app: Express = express()
app.use(
	express.urlencoded({
		extended: true
	})
)
app.use(express.json())
app.use(Helmet())
app.use(morgan("dev"))
app.use(
	cors({
		credentials: true
	})
)

app.get("/", (req: Request, res: Response<MessageResponse>) => {
	res.status(200).json({
		message: "Working 💡"
	})
})

app.use("/api/v1/url", UrlRouter)

app.listen(port, () => {
	console.log("⚡[server] Running Visit: http://localhost:" + port)
})
