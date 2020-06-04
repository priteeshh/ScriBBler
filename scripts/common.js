var signUpform = document.getElementById("modal-signUp");
var signInForm = document.getElementById("modal-signIn");

function signUpButtonTapped(){
    signUpform.style.display = "block";
}
function signInButtonTapped(){
    signInForm.style.display = "block";
}
function signUPCloseTapped(){
    signUpform.style.display = "none";
}
function signInCloseTapped(){
    signInForm.style.display = "none";
}
function signUphyperLinkTapped(){
    signInForm.style.display = "none";
    signUpform.style.display = "block";
}