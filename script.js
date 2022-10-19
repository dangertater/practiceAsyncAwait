//https://www.youtube.com/watch?v=PoRJizFvM7s
let object0 = { name: "first", age: 0, skills: "first of his name" }
let object1 = { name: "second", age: 1, skills: "two feet for walking" }
let object2 = { name: "third", age: 2, skills: "third hand available for use" }
let object3 = {
	name: "fourth",
	age: 3,
	skills: "four horseman are ready to plague",
}
let evenObjectArray = []
let oddObjectsArray = []
let objectArray = [object0, object1, object2, object3]
//idk why below line is not working
// let doc = document.getElementById("main")
let doc = ""
let increasingNumber = 0
// will take the array of objects and makes an objectArrayEven and ObjectArrayOdd based on objects name
//----will add each object's age to webpage after 1 second, four seconds total for four objects

//step one, sorts into odd and even arrays based on the objects age value
let oddEvenSorter = (objArray) => {
	for (let obj of objArray) {
		if (obj.age % 2 === 0) {
			evenObjectArray.push(obj)
		} else {
			oddObjectsArray.push(obj)
		}
		evenOddDelay()
	}
}
//will update webpage every one second to show the next object, should be sequential
//----i believe this should work as is but my doc is fuckzorzing it up on line 15ish
let evenOddDelay = () => {
	if (increasingNumber % 2 === 0) {
		setTimeout(() => {
			increasingNumber++
			for (let object of objectArray) {
				let doc = doc + evenObjectArray[object]
			}
		}, 1000)
	} else {
		setTimeout(() => {
			increasingNumber++
			for (let object of objectArray) {
				let doc = doc + evenObjectArray[object]
			}
		})
	}
}

let randomNumber = (maxNum) => {
	return Math.floor(Math.random() * maxNum)
}

console.log(randomNumber(3))

//will use await/async to change the color of the html document by randomly selecting object from object array
//----if object.name begins with the letter 'f', the document will change to blue, if a different color it will turn orange
let backgroundColorChanger = () => {}

oddEvenSorter(objectArray)

console.log("evenObjectArray =", JSON.stringify(evenObjectArray))
console.log("oddObjectsArray =", JSON.stringify(oddObjectsArray))
