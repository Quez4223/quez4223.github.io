// Got the idea to use this set up of code from https://www.youtube.com/watch?v=0n3ez0vTAMs

const panelColors = ['green', 'red', 'indigo', 'yellow']

const gamePattern = []

const userClick = []

const started = false

let level = 0


$(() => {
    $('.panel').on('click', (event) => {
        const $panelColor = panelColors
        if ($(event.currentTarget).hasClass('panel top-left')) {
            console.log(panelColors[0])
            userClick.push(panelColors[0])
            console.log(userClick)
            userPatternCheck()
            // animatePress()
        } else {
            if ($(event.currentTarget).hasClass('panel top-right')) {
                console.log(panelColors[1])
                userClick.push(panelColors[1])
                console.log(userClick)
                userPatternCheck()
                // animatePress()

            } else {
                if ($(event.currentTarget).hasClass('panel bottom-left')) {
                    console.log(panelColors[2])
                    userClick.push(panelColors[2])
                    console.log(userClick)
                    userPatternCheck()
                    // animatePress()

                } else {
                    if ($(event.currentTarget).hasClass('panel bottom-right')) {
                        console.log(panelColors[3])
                        userClick.push(panelColors[3])
                        console.log(userClick)
                        userPatternCheck()
                        // animatePress()

                    }
                }
            }

        }

       


    })
    const simonStart = () => {
        const $gamePattern = Math.floor(Math.random() * 4)
        gamePattern.push(panelColors[$gamePattern])
        console.log($gamePattern)
        console.log(gamePattern)

    }
    $('button').on('click', simonStart)

    const userPatternCheck = () => {
        for (let i = 0; i < userClick.length ; i++) {
            if (userClick[i] === gamePattern[i]) {
                setTimeout(() => {
                   nextSequence() 
                }, 1000);
        
            } else {
                $('body').addClass('game-over')
                $('level').text('game over, click start to try again')

                setTimeout(() => {
                    $('body').removeClass('game-over')
                }, 200);
            }


        }

    }

    let nextSequence = () => {
        level ++
        $('#level').text('level' + level)
        let randomColorPicked = panelColors[gamePattern]
        gamePattern.push(randomColorPicked)
    }




})





