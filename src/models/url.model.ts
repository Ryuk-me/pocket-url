import { z } from "zod"

const PocketUrl = z.object({
	original_url: z
		.string({
			required_error: "original_url field is required",
			invalid_type_error: "original_url must be a string"
		})
		.trim()
		.min(1)
})

type PocketUrl = z.infer<typeof PocketUrl>

export default PocketUrl
