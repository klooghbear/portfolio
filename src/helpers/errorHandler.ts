export const parseErrorMessage = (error: unknown) => {
	if (typeof error === "string") {
		return error.toUpperCase() // works, `e` narrowed to string
	} else if (error instanceof Error) {
		return error.message // works, `e` narrowed to Error
	}
}