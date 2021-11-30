
function getCurrentIsoDate() {
	const longDate = new Date().toISOString()
	return longDate.substring(0, 10)
}

export { getCurrentIsoDate }
