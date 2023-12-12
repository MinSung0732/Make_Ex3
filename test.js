var btn;
var img;

var isPopupOpened = false;	


window.onload = function(){
    btn = document.getElementById("btn");
    img = document.getElementById("image");
    document.getElementById("popup");

    // btn.addEventListener("click",popup);

}

function potion(){
    if(isPopupOpened == false){
        img.style.display = "inline";
        isPopupOpened = true;
    }else{
        img.style.display = "none";
        isPopupOpened = false;
    }
}



