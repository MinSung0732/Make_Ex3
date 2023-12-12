
document.addEventListener("DOMContentLoaded", function() {
    var YearSelect = document.getElementById("year");

    for (let i = 1800; i <= 2023; i++) {
        let option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        YearSelect.add(option);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var MorthSelect = document.getElementById("morth");

    for (let i = 1; i <= 12; i++) {
        let option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        MorthSelect.add(option);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var DaySelect = document.getElementById("day");

    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        DaySelect.add(option);
    }
});

function SIGN(){
    var myID = document.getElementById("ID").value;
    var myPW = document.getElementById("PW").value;
    var rePW = document.getElementById("PW_re").value;
    var name = document.getElementById("Name").value;
    var mail = document.getElementById("Email").value;
    var sexs = document.getElementsByName("sex");
    var phones = document.getElementsByName("Phone");
    var selectyear = document.getElementById("year").value;
    var selectmorth = document.getElementById("morth").value;
    var selectday = document.getElementById("day").value;
    var totalphonelength = 0;

    for(let i=0; i< phones.length; i++){
        totalphonelength += phones[i].value.length;
    }

    for(let i=0; i<sexs.length; i++){
        if(sexs[i].checked == true){
            sex = sexs[i].value;
            console.log("선택된 성별"+sex)
            break;
        }
    }


    if (myID.length >= 4 && myID.length <= 12) {
        if (myPW.length >= 8 && myPW.length <= 20) {
            if (rePW == myPW) {
                if (name.length > 0) {
                    if (mail.length > 0) {
                        if (totalphonelength == 11) {
                            var phoneNumbers = Array.from(phones).map(phone => phone.value).join("-");

                            alert("ㅊㅋㅊㅋ 가입완료\nID: " + myID
                                + "\nPW: " + myPW
                                + "\n이름: " + name
                                + "\n이메일: " + mail
                                + "\n전화번호: "+ phoneNumbers
                                + "\n생년월일: " + selectyear + "년 " + selectmorth + "월 " + selectday + "일"
                                + "\n성별: " + sex);
                                window.location.href = 'index.html';
                        } else { alert("전화번호 재입력"); }
                    } else { alert("Email 재입력"); }
                } else { alert("이름 재입력"); }
            } else { alert("PW재확인 재입력"); }
        } else { alert("PW 재입력"); }
    } else { alert("ID 재입력"); }
}

