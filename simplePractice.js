let body = document.getElementsByTagName("body")
let stylesFromCSS = getComputedStyle(body[0])
let randomNum = Math.floor(Math.random() * 3)
let previousRandomNum = randomNum

let changeBackgroundToRed = () => {
	if (previousRandomNum === randomNum) {
		randomColorSelector()
	}
	setTimeout(() => {
		body[0].style.backgroundColor = "red"
		randomColorSelector()
	}, 1000)
}

let changeBackgroundToBlue = () => {
	if (previousRandomNum === randomNum) {
		randomColorSelector()
	}
	setTimeout(() => {
		body[0].style.backgroundColor = "blue"
		randomColorSelector()
	}, 1000)
}

let changeBackgroundToGreen = () => {
	if (previousRandomNum === randomNum) {
		randomColorSelector()
	}
	setTimeout(() => {
		body[0].style.backgroundColor = "green"
		randomColorSelector()
	}, 1000)
}

//add feature where if randomNum = randomNum after refunctioning, it recursivly does randomnum again
let randomColorSelector = () => {
	randomNum = Math.floor(Math.random() * 3)
	if (randomNum === 0) {
		changeBackgroundToBlue()
		previousRandomNum = randomNum
	} else if (randomNum === 1) {
		changeBackgroundToRed()
		previousRandomNum = randomNum
	} else {
		changeBackgroundToGreen()
		previousRandomNum = randomNum
	}
}

randomColorSelector()
