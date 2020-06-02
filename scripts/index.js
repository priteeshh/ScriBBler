var signUpform = document.getElementById("modal-signUp");
var signInForm = document.getElementById("modal-signIn");
var createPostForm = document.getElementById("modal-createPost");

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
function createPostButtonTapped(){
    createPostForm.style.display = "block";

}
function createPostCloseTapped(){
    createPostForm.style.display = "none";

}