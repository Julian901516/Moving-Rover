canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

mars_images_array = ["Mars 1.jpeg","Mars 2.jpg","Mars 3.jpg","Mars 4.jpg","Mars 5.jpg"]
random_number = Math.floor (Math.random()*5)
console.log(random_number) 

rover_width = 100
rover_height = 90

background_image = mars_images_array[random_number]
console.log("background_image = " + background_image)
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
        Up()
        console.log("Up")
    }
    if (keyPressed == "40"){
        Down()
        console.log("Down")
    }
    if (keyPressed == "37"){
        Left()
        console.log("Left")
    }
    if (keyPressed == "39"){
        Right()
        console.log("Right")
    }
}
function Up(){
    if (rover_y>=0){
        rover_y-=10
        console.log("when up arrow is pressed, x = " + rover_x + " y = " + rover_y)
        uploadBackground ()
        uploadRover ()
    }
}
function Down(){
    if (rover_y<=500){
        rover_y+=10
        console.log("when down arrow is pressed, x = " + rover_x + " y = " + rover_y)
        uploadBackground ()
        uploadRover ()
    }
}
function Left(){
    if (rover_x>=0){
        rover_x-=10
        console.log("when left arrow is pressed, x = " + rover_x + " y = " + rover_y)
        uploadBackground ()
        uploadRover ()
    }
}
function Right(){
    if (rover_x<=700){
        rover_x+=10
        console.log("when right arrow is pressed, x = " + rover_x + " y = " + rover_y)
        uploadBackground ()
        uploadRover ()
    }
}