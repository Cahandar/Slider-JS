let nxt = document.getElementById("next");
let prv = document.getElementById("prev");
let Slider={
   sekiller : ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
};
let Say = Slider.sekiller.length;
let i = 0;
Deyis(Slider.sekiller[i]);
function Deyis(x){
    document.getElementById("slider").style.backgroundImage =`url("img/${x}")`;
}

nxt.onclick=function(){
    clearInterval(time);
    Next();
    time =setInterval(Next,4000);
    artim=0;
    zaman();
}


function Next(){
    if(i<Say-1){
        i++
        Deyis(Slider.sekiller[i]);
        
        artim=0;
        zaman();
    }else{
        
        i=0;
        Deyis(Slider.sekiller[i]);
    }
}

prv.onclick=function(){

    if(i==0){
        artim=0;
        zaman();
        i=Say-1;
        Deyis(Slider.sekiller[i]);
        
    } else{
        artim=0;
        zaman();
        i--;
        Deyis(Slider.sekiller[i]);
        
    }
}
let time =setInterval(Next ,4000);

let xett=document.getElementById("xett");
let artim=0;

setInterval(zaman,40);

function zaman(){
    if(artim <800){
        artim+=8;
        xett.style.width=artim + "px";
    }else{
        artim=0;
    }
    
}