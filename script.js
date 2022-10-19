//https://www.youtube.com/watch?v=PoRJizFvM7s
let evenNumbers = [0, 2, 4, 6, 8]
let oddNumbers = [1, 3, 5, 7, 9]
let object0 = { name: "first", age: 0, skills: "first of his name" }
let object1 = { name: "second", age: 1, skills: "two feet for walking" }
let object2 = { name: "third", age: 2, skills: "third hand available for use" }
//idk why object3 gets prettiered?
let object3 = {
	name: "fourth",
	age: 3,
	skills: "four horseman are ready to plague",
}
let evenObjectArray = []
let oddObjectsArray = []
let objectArray = [object0, object1, object2, object3]

//will take the array of objects and makes an objectArrayEven and ObjectArrayOdd based on objects name
//----will add each object's age to webpage after 1 second, four seconds total for four objects
let oddEvenSorter = (objArray) => {
	for (let i = 0; i < objArray.length; i++) {
		let question = objArray[i]
		isEvenDoubleCheck(question)
		isOddDoubleCheck(question)
	}
	//TODO figure out  to make for each work in a similar manner
	objArray.forEach((question) => {
		if (i % 2 === 0) {
			isEvenDoubleCheck(question)
		} else {
			isOddDoubleCheck(question)
		}
	})
}

let isEvenDoubleCheck = (obj) => {
	for (let i = 0; i < objectArray.length; i++)
		if (obj.age === [i]) {
			evenObjectArray.push(obj)
		}
}

let isOddDoubleCheck = (obj) => {
	for (let i = 0; i < objectArray.length; i++)
		if (obj.age === [i]) {
			oddObjectsArray.push(obj)
		} else {
			console.log("no odd objects")
		}
}

oddEvenSorter(objectArray)
console.log("evenObjectArray", JSON.stringify(evenObjectArray))
console.log("oddObjectArray", JSON.stringify(oddObjectsArray))
