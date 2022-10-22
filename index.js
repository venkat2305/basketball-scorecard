let homeCount = 0
let guestCount = 0 

function homeadd1(){
    homeCount+=1
    document.getElementById("home-score").textContent=homeCount
}

function homeadd2(){
    homeCount+=2
    document.getElementById("home-score").textContent=homeCount
}

function homeadd3(){
    homeCount+=3
    document.getElementById("home-score").textContent=homeCount
}

function guestadd1(){
    guestCount+=1
    document.getElementById("guest-score").textContent=guestCount

}

function guestadd2(){
    guestCount+=2
    document.getElementById("guest-score").textContent=guestCount
}

function guestadd3(){
    guestCount+=3
    document.getElementById("guest-score").textContent=guestCount
}



