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

// addNumbers(3, 2).then(importantFunction)

//monday morning practice lets gooooooo!

// // let charmander = { name: "charmander", abilities: "scratch", type: "fire" }
// // let squirtle = { name: "squirtle", abilites: "watergun", type: "water" }
// // let bulbasaur = { name: "bulbasaur", abilites: "leafMurder", type: "leafyBoi" }
// let charmander = "charmander"
// let bulbasaur = "bulbasaur"
// let squirtle = "squirtle"
// let mewtwo = "mewtwo"
// let completePokeArray = [charmander]
// let yourPokemon = []

// let throwPokeball = (pokemon) => {
// 	return new Promise((resolve, reject) => {
// 		let pokeballRNG = Math.random()
// 		if (pokeballRNG < 0.5) {
// 			console.log(`${pokemon} escaped le pokeball!`)
// 		} else {
// 			yourPokemon.push(pokemon),
// 				console.log(`you caught ${pokemon}! you have ${yourPokemon} so far!`)
// 		}
// 		if (yourPokemon.includes("squirtle")) {
// 			resolve()
// 		} else if (yourPokemon.includes("mewtwo")) {
// 			reject()
// 		}
// 	})
// }
// let pokeMaster = () => {
// 	setTimeout(() => {
// 		console.log(
// 			"you have entrapped all of le creatures, go make them battle eachother for fame you savage."
// 		)
// 	}, 2000)
// }

// let heck = () => {
// 	console.log("heck")
// }
// // throwPokeball(charmander).then(pokeMaster)
// console.log("your pokemon master list", yourPokemon)
// throwPokeball(mewtwo).then(pokeMaster).catch(heck)

//q4e why doesn't the below work?
// let throwPokeball = (pokemon) => {
// 	return new Promise((resolve, reject) => {
// 		let pokeballRNG = Math.random()
// 		if (pokeballRNG < 0.5) {
// 			console.log(`${pokemon} escaped le pokeball!`)
// 		} else {
// 			yourPokemon.push(pokemon),
// 				console.log(`you caught ${pokemon}! you have ${yourPokemon} so far!`)
// 		}
// 		if (yourPokemon == completePokeArray) {
// 			resolve()
// 		} else if (yourPokemon.includes("mewtwo")) {
// 			reject()
// 		}
// 	})
// }
let sampleObj0 = { name: "zero", age: 0 }
let sampleObj1 = { name: "one", age: 1 }
let sampleObj2 = { name: "two", age: 2 }
let objArray = [sampleObj0, sampleObj1, sampleObj2]
console.log("without json", objArray)
console.log("w json", JSON.stringify(objArray))
