let body = document.getElementsByTagName("body")
let stylesFromCSS = getComputedStyle(body[0])
let randomNum = Math.floor(Math.random() * 3)

let changeBackgroundToRed = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "red"
		randomColorSelector()
	}, 250)
}

let changeBackgroundToBlue = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "blue"
		randomColorSelector()
	}, 250)
}

let changeBackgroundToGreen = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "green"
		randomColorSelector()
	}, 250)
}

//add feature where if randomNum = randomNum after refunctioning, it recursivly does randomnum again
let randomColorSelector = () => {
	randomNum = Math.floor(Math.random() * 3)
	if (randomNum === 0) {
		changeBackgroundToBlue()
	} else if (randomNum === 1) {
		changeBackgroundToRed()
	} else {
		changeBackgroundToGreen()
	}
}

randomColorSelector()
