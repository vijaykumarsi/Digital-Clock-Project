

function p(){
    let hr = document.getElementById('hours')
    let min = document.getElementById('minutes')
    let sec = document.getElementById('seconds')

    let dateTime = new Date()
    let hours = dateTime.getHours()
    let minutes = dateTime.getMinutes()
    let seconds = dateTime.getSeconds()
    let a = document.getElementById("a")
    let b = document.getElementById("right-2")
    
   



    if(hours >= 12){
        a.innerText= 'PM'
    }
    else{
        a.innerText= 'AM' 
    }


    if(hours > 12){
        hours = hours - 12;
    }
    


    if (hours < 10){
        hours="0"+hours;
    }
    if (minutes < 10){
        minutes="0"+minutes;
    }
    if (seconds < 10){
        seconds="0"+seconds;
    }


    
if(hours >= 6 && hours < 12){
    b.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
}
else if(hours >= 12 && hours < 15){
    b.innerHTML = "LET'S HAVE SOME LUNCH !!"
}
else if(hours >= 15 && hours < 19){
    b.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}
else{
    b.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
}  






let timeZone = `${hours}`
hr.innerHTML = timeZone;
console.log(timeZone)

let timeZone1 = `${minutes}`
min.innerHTML = timeZone1;
console.log(timeZone1)

let timeZone2 = `${seconds}`
sec.innerHTML = timeZone2;
console.log(timeZone2)
 
}



setInterval(() =>{
    p()
},1000);


let sun1 = document.getElementById("sun1")
let sun2 = document.getElementById("sun2")
let sun3 = document.getElementById("sun3")
let sun4 = document.getElementById("sun4")
let left_3= document.getElementById("left_3")
let right_3=document.getElementById("right_3")
function alarm(){
    let time = new Date();
    let hr = time.getHours()
   if(hr===parseInt(sun1.value)) {
    left_3.innerHTML = "GOOD MORNING!! WAKE UP !!";
    right_3.style.backgroundImage="url(./morning.png)"
   }
   else if(hr===parseInt(sun2.value)) {
    left_3.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP ";
    right_3.style.backgroundImage="url(./group.png)"
   }
   else if(hr===parseInt(sun3.value)) {
    left_3.innerHTML = "GOOD EVENING !! ";
    right_3.style.backgroundImage="url(./evening.png)"
   }
   else if (hr===parseInt(sun4.value)) {
    left_3.innerHTML = "GOOD NIGHT !!";
    right_3.style.backgroundImage="url(./night.png)"
   }
   let morningtext = sun1.options[sun1.selectedIndex].textContent;
   let morning = document.getElementById("A1")
   morning.textContent=morningtext;


   let morningtext1 = sun2.options[sun2.selectedIndex].textContent;
   let morning1 = document.getElementById("A2")
   morning1.textContent=morningtext1;


   let morningtext2 = sun3.options[sun3.selectedIndex].textContent;
   let morning2 = document.getElementById("A3")
   morning2.textContent=morningtext2;

   let morningtext3 = sun4.options[sun4.selectedIndex].textContent;
   let morning3 = document.getElementById("A4")
   morning3.textContent=morningtext3;

}












