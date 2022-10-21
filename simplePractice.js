let body = document.getElementsByTagName("body")
let stylesFromCSS = getComputedStyle(body[0])
let randomNum = Math.floor(Math.random() * 3)
let buttonStop = document.getElementById("buttonStop")
let backgroundChanging = true

//pause/play button for the background color
buttonStop.addEventListener("click", (e) => {
	if (backgroundChanging === true) {
		backgroundChanging = false
	} else {
		backgroundChanging = true
		randomColorSelector()
	}
})
let changeBackgroundToRed = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "red"
		if (backgroundChanging === false) {
		} else {
			randomColorSelector()
		}
	}, 750)
}

let changeBackgroundToBlue = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "blue"
		if (backgroundChanging === false) {
		} else {
			randomColorSelector()
		}
	}, 750)
}

let changeBackgroundToGreen = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "green"
		if (backgroundChanging === false) {
		} else {
			randomColorSelector()
		}
	}, 750)
}

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

let fontColorYellow = (e) => {
	body[0].style.color = "yellow"
	console.log(e)
}

let fontColorHotpink = () => {
	body[0].style.color = "hotpink"
}

randomColorSelector()

//below is the goal for promise reject after I failed miserably and deleted all my code
//----goal of promise is for the promise to resolve if font is yellow, and reject if not
//--------randomColorSelector is used for the background color, but is called frequently so
//--------promise will also be called frequently. first loop through it resolves
//--------.then (line 52) call fontColorHotpink(), next cycle through randomColorSelector it
//--------is hotpink, and the computer is just like naaaaaah it's yellow now
