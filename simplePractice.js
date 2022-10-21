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

//goal of promise is for the promise to resolve if font is yellow, and reject if not
//----randomColorSelector is used for the background color, but is called frequently so
//----promise will also be called frequently. first loop through it resolves
//----.then (line 52) call fontColorHotpink(), next cycle through randomColorSelector it
//----is hotpink, and the computer is just like naaaaaah it's yellow now
let randomColorSelector = () => {
	return new Promise((resolve, reject) => {
		if ((body[0].style.color = "yellow")) {
			resolve()
		} else {
			reject("your font color is not yellow dawg")
		}
		randomNum = Math.floor(Math.random() * 3)
		if (randomNum === 0) {
			changeBackgroundToBlue()
		} else if (randomNum === 1) {
			changeBackgroundToRed()
		} else {
			changeBackgroundToGreen()
		}
	})
}

let fontColorHotpink = () => {
	body[0].style.color = "hotpink"
}

randomColorSelector().then(fontColorHotpink())
