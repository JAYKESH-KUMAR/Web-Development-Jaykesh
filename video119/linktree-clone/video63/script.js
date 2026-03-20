let button= document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click!"
    //alert("I was clicked.Yayy! !")
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click Please")
})

button.addEventListener("keydown", (e)=>{
    console.log(e,e.key,e.keycode)
})