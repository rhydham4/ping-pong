var gameOver = false
var score = 0
var wall_1;
var wall_2;
var wall_3;
var wall_4;
var myPaddle;
var computerPaddle;
var ball;
var highScore = 0
var backGround

function preload() {
    myPaddleSpiderMan = loadImage('myPlayer.png')
    groundImage = loadImage('ground.jpg')
    venom = loadImage('venom.png')
    footBall = loadImage('football.png')
    hitSound = loadSound('hit.mp3')
}

function setup() {
    createCanvas(600, 600)

    backGround = createSprite(300, 300, 600, 600)
    backGround.addImage(groundImage)
    backGround.scale = 3.25
    myPaddle = createSprite(50, 300, 20, 200)
    myPaddle.addImage(myPaddleSpiderMan)
    myPaddle.scale = 0.125
        // myPaddle.addImage(groundImage)
        // myPaddle.color('red')
    computerPaddle = createSprite(580, 300, 20, 200)
    computerPaddle.addImage(venom)
    computerPaddle.scale = 0.125
    ball = createSprite(250, 300, 20, 20)
    ball.addImage(footBall)
    ball.scale = 0.125
    wall_1 = createSprite(300, 00, 600, 20)
    wall_2 = createSprite(300, 600, 600, 20)
    wall_3 = createSprite(600, 300, 20, 600)
    wall_4 = createSprite(0, 300, 20, 600)

    // fill(rbg(60, 70, 80))


}

function draw() {
    background("red")
    drawSprites()
    wall_1.visible = false
    wall_2.visible = false
    wall_3.visible = false
    wall_4.visible = false
    myPaddle.y = mouseY
    computerPaddle.y = ball.y
    if (ball.x == 250 && ball.y == 300 && gameOver == false) {
        ball.velocityY = +5

    }


    if (ball.collide(myPaddle)) {
        ball.velocityX = +5
        score = score + 1
        hitSound.play()

        // audioObject.play('hit.mp3')
        // play('hit.mp3')
        // playSound('hit.mp3', false)
    }
    if (ball.collide(computerPaddle)) {
        ball.velocityX = -5
        hitSound.play()
    }
    if (ball.collide(wall_1)) {
        ball.velocityX = +5
        ball.velocityY = +5
    }
    if (ball.collide(wall_2)) {
        ball.velocityX = -5
        ball.velocityY = -5
    }
    if (ball.collide(wall_3)) {
        ball.velocityX = +5
    }
    if (ball.collide(wall_4)) {
        ball.velocityX = 0
        ball.velocityY = 0
        ball.x = 300
        ball.y = 300
        score = 0
        gameOver = true
        alert("game over press enter to restart")
    }
    if (score > highScore) {
        highScore = score
    }
    // Text(score)text
    fill(rgb(0, 0, 0))
    text('yourScore = ', 10, 100)
    text(score, 100, 100)
    fill(rgb(0, 0, 0))
    text(highScore, 590, 100)
    text('highScore = ', 500, 100)
    if (gameOver == true && keyDown('enter')) {
        ball.x = 250;
        ball.y = 300;
        ball.velocityY = +5
        gameOver = false;
    }




}