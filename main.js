canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

rover_width = 100
rover_height = 90

background_image = "mars.jpg"
rover_image = "rover.png"
rover_x = 10
rover_y = 20

function add(){
    bg_tag = new Image()
    bg_tag.onload = uploadBackground
    bg_tag.src = background_image

    rover_tag = new Image()
    rover_tag.onload = uploadRover
    rover_tag.src = rover_image
}

function uploadBackground(){
    ctx.drawImage(bg_tag, 0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_tag, rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "38"){
        console.log("Up")
    }
    if (keyPressed == "40"){
        console.log("Down")
    }
    if (keyPressed == "37"){
        console.log("Left")
    }
    if (keyPressed == "39"){
        console.log("Right")
    }
}