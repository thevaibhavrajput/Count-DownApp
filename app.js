const endDate= "14 February 2024 10:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs= document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now= new Date();
    const diff= (end-now)/1000;
    //diff divide by 1000 -->seconds
    
    if (diff < 0) return;

    //convert to days remaining-->
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}



// 1 day= 24hours
// 1 hr = 60 min 
// 60 min = 3600 seconds 

setInterval(()=>{
    clock();
},1000);