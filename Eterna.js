let index=0;
let i=0;
let slider=document.getElementsByClassName("slider");
let line =document.getElementsByClassName("line");

auto();

function show(n){
    for(i=0; i<slider.length; i++){   //slider.length=3
        slider[i].style.display="none";
    }
    for(i=0; i<line.length;i++){   //line.length=3
        line[i].className=line[i].className.replace("active");
    }
    slider[n-1].style.display=("block");
    line[n-1].className+=" active"; //add space
}

function auto(){
    index++;
    if(index>slider.length){    //to move from last slide to first
          index=1;
    }
    show(index); //calling show
    setTimeout(auto, 7000) //next slide appear after 5s
}
function plusSlide(n){
    index+=n;  //n=1 or n=-1
    if(index > slider.length){
        index=1;
    }
    if(index<1){
        index=slider.length;
    }
    show(index);
}

function currentSlide(n){
    index=n;
    show(index);
}


