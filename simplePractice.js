let x = document.getElementById("body")

let changeBackgroundColor = () => {
	setTimeout(() => {
		x.style.backgroundColor = "red"
	}, 3000)
}

changeBackgroundColor()
