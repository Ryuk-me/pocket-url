import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import Helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import { UrlRouter } from "./routers/api/v1/url.router"
import packageJson from "./utils/package.json.reader"
import { notFound, errorHandler } from "./libs/middlewares"
import connectDB from "./db/init"
dotenv.config()

console.log(
	"🚀",
	"@" + packageJson.author.username + "/" + packageJson.name,
	"v" + packageJson.version + ` [${process.env.NODE_ENV}]`
)
connectDB()

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

app.use("/health", (req: Request, res: Response) => {
	res.status(200).json({
		app: packageJson.name,
		request_ip: req.ip,
		uptime: process.uptime(),
		hrtime: process.hrtime(),
		mode: process.env.NODE_ENV || undefined,
		node_runtime: process.env.NODE_ENV == "development" ? process.version : undefined
	})
})

app.use("/api/v1/url", UrlRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
	console.log("⚡[server] Running Visit: http://localhost:" + port)
})
