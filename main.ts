let _17 = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    _17 = 0
    for (let index = 0; index < 4; index++) {
        led.plot(_17 % 5, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    }
    if (input.buttonIsPressed(Button.B)) {
    	
    }
})
