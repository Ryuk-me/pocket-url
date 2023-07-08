import mongoose from "mongoose"

const connectDB = async () => {
	try {
		let MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test"
		if (process.env.NODE_ENV == "development") {
			MONGO_URI = "mongodb://127.0.0.1:27017/pocket-url"
		}
		const conn = await mongoose.connect(MONGO_URI)
		console.log(`🍀 MongoDB connected: ${conn.connection.host} - [${conn.connection.name}]`)
	} catch (error) {
		console.error(`Error: ${error}`)
		process.exit(1)
	}
}

export default connectDB
