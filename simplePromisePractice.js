let addNumbers = (num1, num2) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let addedNumbers = num1 + num2
			if (addedNumbers === 5) {
				resolve()
			} else {
				reject(console.log("your numbers didnt equal 5"))
			}
		}, 1000)
	})
}

let importantFunction = () => {
	console.log(
		"it is important this function only runs if the two added numbers equal 5 after a time out"
	)
}

addNumbers(3, 2).then(importantFunction)
