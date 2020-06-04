var deleteForm = document.getElementById("modal-delete");
var toBeDeleatedCard;
function onDeleteTapped(selectedCard){
    toBeDeleatedCard = document.getElementById(selectedCard);
    console.log(selectedCard)
    document.getElementById(selectedCard)
    deleteForm.style.display = "block";
}
function noBtnTapped(){
    deleteForm.style.display = "none";

}
function yesBtnTapped(){
    toBeDeleatedCard.style.display = "none";
    deleteForm.style.display = "none";
}