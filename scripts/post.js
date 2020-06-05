document.getElementsByClassName("contectTextArea")[0].style.display = "none"
document.getElementsByClassName("contectTextArea")[1].style.display = "none"
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