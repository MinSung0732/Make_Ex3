var t="";
var s="";

window.onload = function(){
    t = document.getElementById("id");
    s = document.getElementById("pw");
}

function login2(){
    if(t.value == "java" && s.value == "qwer1234"){
        alert("로그인 성공");
    } else{
        alert("로그인 실패");
    }
}

function sign_up(){
    window.location.href = 'q78_2.html';
}