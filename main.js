var canvas= new fabric.Canvas("myCanvas");
var player_x=300;
var player_y=400;
block_img_width=80;
block_img_height=80;
var player_object="";
var block_img_object="";

function player_update()
{
fabric.Image.fromURL("player.png" , function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});
}

function new_Image(get_Img)
{
fabric.Image.fromURL(get_Img , function(Img){
block_img_object=Img;
block_img_object.scaleToWidth(block_img_width);
block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);
});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80')
    {
        console.log("P and shift pressed together");
        block_img_width=block_img_width + 10;
        block_img_height=block_img_height + 10;
        document.getElementById("Current_Width").innerHTML=block_img_width;
        document.getElementById("Current_Height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && keyPressed=='77')
    {
        console.log("M and shift pressed together");
        block_img_width=block_img_width - 10;
        block_img_height=block_img_height - 10;
        document.getElementById("Current_Width").innerHTML=block_img_width;
        document.getElementById("Current_Height").innerHTML=block_img_height;
    }

    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }

    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }

    //Avengers Body Parts(Iron, Thor, Cap and Bruce)//

    if(keyPressed=='65')
    {
        new_Image("ironman_left_hand.png");
        console.log("A");
    }

    if(keyPressed=='66')
    {
        new_Image("ironman_right_hand.png");
        console.log("B");
    }

    if(keyPressed=='67')
    {
        new_Image("ironman_body.png");
        console.log("C");
    }

    if(keyPressed=='68')
    {
        new_Image("ironman_face.png");
        console.log("D");
    }

    if(keyPressed=='69')
    {
        new_Image("spiderman_left_hand.png");
        console.log("E");
    }

    if(keyPressed=='70')
    {
        new_Image("spiderman_right_hand.png");
        console.log("F");
    }

    if(keyPressed=='71')
    {
        new_Image("spiderman_face.png");
        console.log("G");
    }

    if(keyPressed=='72')
    {
        new_Image("spiderman_body.png");
        console.log("H");
    }

    if(keyPressed=='73')
    {
        new_Image("spiderman_legs.png");
        console.log("I");
    }

    if(keyPressed=='74')
    {
        new_Image("thor_face.png");
        console.log("J");
    }

    if(keyPressed=='75')
    {
        new_Image("thor_left_hand.png");
        console.log("K");
    }

    if(keyPressed=='76')
    {
        new_Image("thor_right_hand.png");
        console.log("L");
    }

    if(keyPressed=='77')
    {
        new_Image("captain_america_left_hand.png");
        console.log("M");
    }

    if(keyPressed=='78')
    {
        new_Image("hulk_left_hand.png");
        console.log("N");
    }

if(keyPressed=='79')
    {
        new_Image("hulk_right_hand.png");
        console.log("O");
    }

    if(keyPressed=='80')
    {
        new_Image("hulk_face.png");
        console.log("P");
    }

    if(keyPressed=='81')
    {
        new_Image("hulk_body.png");
        console.log("Q");
    }

    if(keyPressed=='79')
    {
        new_Image("hulk_legs.png");
        console.log("R");
    }

}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y - block_img_height;
        console.log("block image height= " + block_img_height);
        console.log("when up arrow key is pressed, X =" + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y<=500)
    {
        player_y=player_y + block_img_height;
        console.log("block image height= " + block_img_height);
        console.log("when down arrow key is pressed, X =" + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x - block_img_width;
        console.log("block image width= " + block_img_width);
        console.log("when left arrow key is pressed, X =" + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=900)
    {
        player_x=player_x + block_img_width;
        console.log("block image width= " + block_img_width);
        console.log("when right arrow key is pressed, X =" + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
