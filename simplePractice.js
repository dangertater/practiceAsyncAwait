let body = document.getElementsByTagName("body")
let stylesFromCSS = getComputedStyle(body[0])
let randomNum = Math.floor(Math.random() * 3)
let buttonStop = document.getElementById("buttonStop")
let backgroundChanging = true

//pause/play button for the background color
buttonStop.addEventListener("click", (info) => {
	console.log(info)
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

let addYouResolvedText = () => {
	body = body + "<h1>You resolved</h1>"
}

let addYouRejectedText = () => {
	body = body + "<h1>You rejected</h1>"
}

let changeBackgroundToGreen = () => {
	setTimeout(() => {
		body[0].style.backgroundColor = "green"
		if (backgroundChanging === false) {
		} else {
			randomColorSelector()
		}
		pauseButtonBackgroundChange()
		// .then(addYouWinText)
		// .catch(
		// 	"forced error occured change err value in testFuncImportantForPBBC"
		// )
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

let fontColorYellow = () => {
	body[0].style.color = "yellow"
	console.log(e)
}

let fontColorHotpink = () => {
	body[0].style.color = "hotpink"
}

randomColorSelector()
//
// write a function that takes ms number, returns a promise, and resolve the promise after ms time.
let testFuncImportantForPBBC = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let err = true
			if (err === false) {
				resolve()
			} else {
				reject("rejected in testFuncImportantForPBBC")
			}
		}, ms)
	})
}

//promise practice, function changes buttonStop's color if background changes to green
//----in this scenario, when pauseButtonBackgroundChange is called, we would use 'testFuncImportantForPBBC' and a promise if the
//----pauseButtonBackgroundChange's code was only to be ran if it met the 'resolve' properties of testFuncImportantForPBBC
//--------aka if pauseButtonBackgroundChange is contingent on x, and x takes time to figure out,
//--------have testFuncImportantForPBBC test for x, resolve if its good, and then tell pauseButtonBackgroundChange to continue with it's code
let pauseButtonBackgroundChange = () => {
	testFuncImportantForPBBC(500).catch(() => {
		console.log("heck")
	})
	if (buttonStop.style.backgroundColor === "blueviolet") {
		buttonStop.style.backgroundColor = "hotpink"
	} else {
		buttonStop.style.backgroundColor = "blueviolet"
	}
}

//below is the goal for promise reject after I failed miserably and deleted all my code
//----goal of promise is for the promise to resolve if font is yellow, and reject if not
//--------randomColorSelector is used for the background color, but is called frequently so
//--------promise will also be called frequently. first loop through it resolves
//--------.then (line 52) call fontColorHotpink(), next cycle through randomColorSelector it
//--------is hotpink, and the computer is just like naaaaaah it's yellow now

//att

// let executorTest = () => {
// 	let testNum = 1
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (testNum === 1) {
// 				resolve(true)
// 			} else {
// 				resolve(false)
// 			}
// 		}, 5000)
// 	})
// }

// CHEATER MODE, DON'T LOOK UNLESS YOU STUCK
// let waitForXms = (ms) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, ms)
// 	})
// }
