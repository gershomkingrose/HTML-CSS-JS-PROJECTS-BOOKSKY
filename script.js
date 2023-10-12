//selecting popup box, popup ovelay, button

var popupovelay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var popupbutton = document.getElementById("popup")

popupbutton.addEventListener("click",function(){
    popupovelay.style.display="block"
    popupbox.style.display="block"

}
)

//select cancel button

var cancelbutton=document.getElementById("cancelbook")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupovelay.style.display="none"
    popupbox.style.display="none"
})



//select Container
//addbook
// booktitle,bookauthor,bookdescription

var container= document.querySelector(".container")
var addb= document.getElementById("addbook")
var btitle= document.getElementById("booktitle")
var bauthor= document.getElementById("bookauthor")
var bdescription= document.getElementById("bookdescription")

addb.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${btitle.value}</h2>
    <h5>${bauthor.value}</h5>
    <p>${bdescription.value}</p>
    <button  onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupovelay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}