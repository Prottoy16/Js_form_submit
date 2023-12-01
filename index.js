var form=document.querySelector("form");
var name1=form.querySelector("#name");
var email=form.querySelector("#email");
var password=form.querySelector("#password");


form.addEventListener("submit",function(e){
e.preventDefault();
 var userInfo={
    name:name1.value,
    email:email.value,
    password:password.value,
 }
 console.log(userInfo);
 name1="";
 email="";
 password="";
});



name1.addEventListener("focusin",function(e){
name1.classList.add("animation");
});
name1.addEventListener("focusout",function(e){
    name1.classList.remove("animation");
});

email.addEventListener("focusin",function(e){
email.classList.add("animation");
});
email.addEventListener("focusout",function(e){
email.classList.remove("animation");
});

password.addEventListener("focusin",function(e){
password.classList.add("animation");
});
password.addEventListener("focusout",function(e){
password.classList.remove("animation");
});