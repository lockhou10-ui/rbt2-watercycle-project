input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("EVAPORATION")
    basic.showNumber(input.temperature())
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            # . # . #
            `)
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("PRECIPITATION")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        basic.clearScreen()
        music.play(music.stringPlayable("C E D C E D C D ", 200), music.PlaybackMode.LoopingInBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("CONDENSATION")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("COLLECTION")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
basic.showString("WATERCYCLE")
