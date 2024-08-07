var save=document.getElementById("save") // save-button
save.addEventListener("click",save=(event)=>{
    event.preventDefault()
    var fname=document.getElementById("name")
var age=document.getElementById("age")
var gender=document.getElementsByName("gen") // name is gen
var gen=document.getElementById("gen") // id is gen
for (let count = 0; count < gender.length; count++) {
    if (gender[count].checked==true) {
        gen=gender[count].value
    }
}
var email=document.getElementById("email")
var contact=document.getElementById("contact")
var tbody=document.getElementById("tbody")
var tr=document.createElement("tr")
tr.innerHTML= `<td>${fname.value}</td>
<td>${age.value}</td>
<td>${gen}</td>
<td>${email.value}</td>
<td>${contact.value}</td>
<td class="td"><button onclick="del(event)" id="delete" class="innerbtn">delete</button></td>
<td class="td"><button onclick="submit(event)" id="submit" class="innerbtn">submit</button></td>`
tbody.append(tr)
})
del=(event)=>{
    event.preventDefault()
    event.target.parentElement.parentElement.remove()
}
submit=(event)=>{
    event.preventDefault()
    alert("your information is submitted")
}
var box=document.querySelector(".box")
info=(event)=>{
    event.preventDefault()
    box.style.display="block"
}
cl=(event)=>{
    event.preventDefault()
     box.style.display="none"
}