input.onButtonPressed(Button.A, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Lives)
})
input.onButtonPressed(Button.B, function () {
    Lives += -1
    basic.showNumber(Lives)
})
let hand = 0
let Lives = 0
Lives = 3
basic.forever(function () {
    if (Lives <= 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
