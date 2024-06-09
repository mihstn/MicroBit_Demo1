input.onButtonPressed(Button.A, function () {
    letter = getLetter(3)
    basic.showString(letter)
})
function getLetter (index: number) {
    randomName = myVar4._pickRandom()
    thirdLetter = randomName.charAt(index)
    return thirdLetter
}
input.onButtonPressed(Button.B, function () {
    letter = getLetter(2)
    basic.showString(letter)
})
let thirdLetter = ""
let randomName = ""
let letter = ""
let myVar4: string[] = []
let myVar1 = 0
let myVar2 = "Michael"
let myVar3 = true
myVar4 = [
"michael",
"leonard",
"mindaugas",
"jelena"
]
basic.forever(function () {
	
})
