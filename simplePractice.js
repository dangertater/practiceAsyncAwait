let body = document.getElementsByTagName("body")
let stylesFromCSS = getComputedStyle(body[0])
let randomNum = Math.floor(Math.random() * 3)

let changeBackgroundToRed = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "red"
		randomColorSelector()
	}, 2000)
}

let changeBackgroundToBlue = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "blue"
		randomColorSelector()
	}, 2000)
}

let changeBackgroundToGreen = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "green"
		randomColorSelector()
	}, 2000)
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

let fontColorChange = () => {
	setTimeout(() => {
		if ((body[0].style.color = "yellow")) {
			body[0].style.color = "hotpink"
		} else if ((body[0].style.color = "hotpink")) {
			body[0].style.color = "yellow"
		}
	}, 500)
}
//below is going to be a promise test
let fontColorCheck = new Promise((resolve, reject) => {
	if ((body[0].style.color = "hotpink")) {
		reject("error")
	} else {
		resolve()
	}
})

randomColorSelector()
fontColorChange()
