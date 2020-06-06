document.getElementsByClassName("contectTextArea")[0].style.display = "none"
document.getElementsByClassName("contectTextArea")[1].style.display = "none"
document.getElementById("name").innerHTML = localStorage.getItem("name")
document.getElementById("contectTextArea").value = localStorage.getItem("title")
document.getElementById("contectLabel").innerHTML = localStorage.getItem("title")
document.getElementById("allComments").style.display = "none"

function editSaveButton(){
    var btn = document.getElementById("editSave")
    if( btn.value == "edit"){
        btn.value = "save"
        btn.innerHTML = "Save"+'<i id="editIcon" class="fas fa-save"></i>'
        document.getElementsByClassName("contectTextArea")[0].style.display = ""
        document.getElementsByClassName("contectLabel")[0].style.display = "none"
        document.getElementsByClassName("contectTextArea")[1].style.display = ""
        document.getElementsByClassName("contectLabel")[1].style.display = "none"
        

    }else{
        btn.value = "edit"
        btn.innerHTML = "Edit"+'<i id="editIcon" class="fas fa-edit"></i>'
        document.getElementsByClassName("contectTextArea")[0].style.display = "none"
        document.getElementsByClassName("contectLabel")[0].style.display = ""
        var text = document.getElementsByClassName("contectTextArea")[0].value        
        document.getElementsByClassName("contectLabel")[0].innerHTML = text
        document.getElementsByClassName("contectTextArea")[1].style.display = "none"
        document.getElementsByClassName("contectLabel")[1].style.display = ""
        var text = document.getElementsByClassName("contectTextArea")[1].value        
        document.getElementsByClassName("contectLabel")[1].innerHTML = text


    }
}
var likes = 0;
function likeButtinTapped(){
    document.getElementById("likeButton").innerHTML = "Liked! "+ '<i class="fas fa-thumbs-up"></i>'
    likes++;
    if (likes > 0){
        document.getElementById("like-para").innerHTML = likes+' person likes this!'
    }
}
function addCommentTapped(){
    document.getElementById("allComments").style.display = ""
    var comment = document.getElementById("commentsArea").value;
    var existingComments = document.getElementById("allComments").innerHTML
    document.getElementById("allComments").innerHTML = '<p id="comment">'+comment+'</p>'+existingComments;
    document.getElementById("commentsArea").value = ""
}