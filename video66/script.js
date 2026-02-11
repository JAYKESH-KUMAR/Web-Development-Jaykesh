function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    //finish this function
    let viewStr
    if(views<1000){
        viewStr=views;
    }
    else if(views>1000000){
         viewStr=views/1000000 + "M";
    }
    else{
        viewStr=views/1000 + "k";
    }
    let html = `<div class="card">
    <div class="image">
    <img src="${thumbnail}"
    alt="">
    
                //<img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXy4qpAw4IARUAAIhCGAFwAcABBg== &
   // rs =AOn4CLACwWOixJVrKLFindK92KYMgTcQbw" alt="">
    <div class="capsule">${duration}</div>

            </div>
            <div class="text">
            <h1>${title}</h1> any
            <p>${cName}.${viewsStr} views .${monthsOld} months ago</p>// months ago</p>
               // <h1>Introduction to Backend | Sigma Web Dev video #2</h1>
                //<p>CodeWithHarry.772k views.2 Month ago</p>
            </div>
            </div>`

            document.querySelector(".container").innerHtml=document.querySelector(".container").innerHTML+html
}


createCard("Introduction to Backend | Sigma web Dev video video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXy4qpAw4IARUAAIhCGAFwAcABBg== &
    rs = AOn4CLACwWOixJVrKLFindK92KYMgTcQbw" )
