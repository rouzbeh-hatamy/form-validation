errorPm="";
validPm = "good"
function submitbtn(){
let userName = document.getElementById("userName").value;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phoneNumber").value;
(userName)?userCheck(userName): "";
(email)?emailCheck(email):"";
(phoneNumber)?phoneNumberCheck(phoneNumber):"";
let inter = setInterval(submitbtn, 1000)
}

function userCheck(userName){
    let show = document.getElementById("userNamePm")
    if(/^[A-z]*[\._]{0,1}[A-z]*$/.test(userName) && userName.length>=5){
        show.innerText = validPm +" username: "+ userName
        show.style.color = "green"
    }else{
        errorPm ="invalid username: username must be at least 5 characters and only letters, numbers _ and . are allowed"
        show.innerText = errorPm
        show.style.color = "#aa1313"
    }

}
function emailCheck(email){
    let show = document.getElementById("emailPm")
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        show.innerText = validPm +" email: "+ email
        show.style.color = "green"
    }else{
        errorPm = "invalid email"
        show.innerText =errorPm
        show.style.color = "#aa1313"
    }
}

function phoneNumberCheck(phoneNumber){
    let show = document.getElementById("phoneNumberPM")
    debugger;
    if(/^[9][8][0-9]{10}$/.test(phoneNumber) || /^[0][9][0-9]{9}$/.test(phoneNumber)){
        show.innerText = validPm +" phone Number: "+ phoneNumber
        show.style.color = "green"
    }
    else{
        errorPm = "invalid phone Number"
        show.innerText =errorPm
        show.style.color = "#aa1313"
    }


}

