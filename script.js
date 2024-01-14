function createCard(title,cName,views,age,timestamp,thumbnail){
    let viewStr
    if(views<1000){
        viewStr=views;
    }
    else if(views<1000000){
        viewStr=views/1000 + 'K'
    }
    else{
        viewStr=views/1000000 + 'M'
    }

    let html = ` <div class="container">
    <div class="thumbnail">
        <img src="${thumbnail}" alt="">
        <span>${timestamp}</span>
    </div>
    <div class="card">
        <p>${title}</p>
        <span>${cName}</span> .  
        <span>${viewStr}</span> . 
        <span>${age}</span>
    </div>
</div> `

document.querySelector(".page").innerHTML = document.querySelector(".page").innerHTML + html
}


createCard("How to make a card","codeWithHarry",1000000,"2 months ago","12:34","https://i.ytimg.com/vi/oMrKVEedpHg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgJ_xYnlg0VjA8uL2k0ztlVc2kaA")


let btn = document.querySelector(".addCard>button")
btn.addEventListener('click',function(){
    let title = prompt("Enter title for card","Undefined")
    let cName = prompt("Enter your channel name","Undefined")
    let views = prompt("Enter views",0)
    let time = prompt("Enter time with months","0 Months ago")
    let duration = prompt("Enter duration","00:00")
    let thumbnail = prompt("Enter link for your thumbnail","https://img//")
    createCard(title,cName,views,time,duration,thumbnail)
}
)

