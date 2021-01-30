var imgs = document.querySelectorAll("img");

for(var i = 0; i < 3; i++){
    imgs[i].src = "./images/image_" + (i+1) + ".jpg";
}