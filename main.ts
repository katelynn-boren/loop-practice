input.onGesture(Gesture.Shake, function () {
    Random_Number = randint(0, 5)
    if (Random_Number == 0) {
        basic.showString("Answer Unclear")
    } else if (Random_Number == 1) {
        basic.showString("no")
    } else {
        basic.showString("yes")
    }
})
let Random_Number = 0
basic.showString("8ball")
basic.showString("shake")
basic.forever(function () {
	
})
