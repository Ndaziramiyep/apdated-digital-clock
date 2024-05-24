let hours= document.getElementById("Hours");
let mins= document.getElementById("Mins");
let sec= document.getElementById("Sec");

setInterval(()=>{
    let currentTime= new Date;
    hours.innerText=(currentTime.getHours()<10? "0":"")+currentTime.getHours();
    mins.innerText=(currentTime.getMinutes()<10? "0":"")+currentTime.getMinutes();
    sec.innerText=(currentTime.getSeconds()<10? "0":"")+currentTime.getSeconds();

},1000);



