var t="";
var s="";
var currentTimeElement;

window.onload = function(){
    t = document.getElementById("id");
    s = document.getElementById("pw");

    currentTimeElement = document.getElementById("time");

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
}

function login2(){
    if(t.value == "java" && s.value == "qwer1234"){
        alert("로그인 성공");
    } else{
        alert("로그인 실패");
    }
}

function sign_up(){
    window.location.href = 'index2.html'
}

function updateCurrentTime() {
    currentTimeElement.innerHTML = "현재 날짜와 시간 " + getCurrentTime();
}

function getCurrentTime(){
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();

    var formattedDateTime = year + "-"
    + addZero(month) + "-"
    + addZero(day) + "-"
    + addZero(hours) + ":"
    + addZero(minutes) + ":"
    + addZero(seconds);
    //  + "."
    // + milliseconds;

    return formattedDateTime;
}

function addZero(number) {
    return number < 10 ? "0" + number : number;
}

function xxx(){
    // popup.style.display = "none";
    popup.style.background = "pink";
    popup.style.width = "100px";
    popup.style.height = "100px";
    popup.style.top = "10px";
    popup.style.left = "1560px";
    popup.style.transitionProperty = "background, width, height, top, left";
    popup.style.transitionDuration = "1s";
    
    currentTimeElement.style.fontSize = "small";
}



