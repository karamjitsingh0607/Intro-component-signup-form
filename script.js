let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let emailAddress = document.querySelector(".email-address");
let password = document.querySelector(".password");


firstName.addEventListener("keyup",()=>{
    if(firstName.value!=""){
        errorIcon[0].style.visibility = "hidden";
        errorMsg[0].style.visibility = "hidden";
        firstName.classList.remove("active");
        document.querySelectorAll('.inner-input-box')[0].style.borderColor="hsl(249, 10%, 26%)";
    }
})
lastName.addEventListener("keyup",()=>{
    if(lastName.value!=""){
        errorIcon[1].style.visibility = "hidden";
        errorMsg[1].style.visibility = "hidden";
        lastName.classList.remove("active");
        document.querySelectorAll('.inner-input-box')[1].style.borderColor="hsl(249, 10%, 26%)";
    }
})
emailAddress.addEventListener("keyup",()=>{
    if(emailAddress.value!=""){
        errorIcon[2].style.visibility = "hidden";
        errorMsg[2].style.visibility = "hidden";
        emailAddress.classList.remove("active");
        document.querySelectorAll('.inner-input-box')[2].style.borderColor="hsl(249, 10%, 26%)";

    }
})
password.addEventListener("keyup",()=>{
    if(password.value!=""){
        errorIcon[3].style.visibility = "hidden";
        errorMsg[3].style.visibility = "hidden";
        password.classList.remove("active")
        document.querySelectorAll('.inner-input-box')[3].style.borderColor="hsl(249, 10%, 26%)";
    }
})

let userInput = document.getElementsByClassName("user-input");
let inputBtn = document.querySelector(".input-btn");

let errorIcon = document.getElementsByClassName("error-icon");
let errorMsg = document.getElementsByClassName("error-msg");

emailAddress.addEventListener("keyup", () => {
  if (
    emailAddress.value != "" &&
    !emailAddress.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    errorMsg[2].innerText="Looks like this is not an email"
    document.querySelector('.inner-input-box').style.borderColor="red";
    errorIcon[2].style.visibility = "visible";
    errorMsg[2].style.visibility = "visible";
  } else {
    errorMsg[2].innerText="Email Address cannot be empty"
    document.querySelector('.inner-input-box').style.borderColor="hsl(249, 10%, 26%)";
    errorIcon[2].style.visibility = "hidden";
    errorMsg[2].style.visibility = "hidden";
  }
});

userInput=Array.from(userInput);
let i=0;
userInput.forEach(element => {
    inputBtn.addEventListener("click",()=>{
        if(element.value==""){
            errorIcon[i].style.visibility="visible";
            document.querySelectorAll('.inner-input-box')[i].style.borderColor="red";
            errorMsg[i].style.visibility="visible";
            element.classList.add("active")
        }else{
            errorIcon[i].style.visibility="hidden";
            errorMsg[i].style.visibility="hidden";
            document.querySelectorAll('.inner-input-box')[i].style.borderColor="hsl(249, 10%, 26%)";
            element.classList.remove("active")
            element.value="";
        }
        i++;
        if(i==4){
            i=0;
        }
    })
});
