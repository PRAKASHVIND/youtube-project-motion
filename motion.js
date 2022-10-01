var tl=gsap.timeline({
    repeat:"-1"
});



tl.to(".imgcontainor",{
width:"100%",
duration:1.5,
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to(".annimate",{
    duration:1.5,
left:"20%",
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to(".annimate",{
    duration:1.5,
left:"-100%",
delay:3,
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to("#layer1",{
    duration:1.5,
width:"25%",
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to("#layer1",{
    duration:1.5,
width:"50%",
delay:3,
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to("#layer1",{
    duration:1.5,
width:"75%",
delay:6,
stagger:3,
ease:"Expo.esaeInOut"
},"a")
.to("#layer1",{
    duration:1.5,
    delay:9,
width:"100%",
stagger:3,
ease:"Expo.esaeInOut"
},"a")
 
var flag=0
var menucard =document.querySelector("#menu-card")
document.querySelector(".menu").addEventListener("click",function(){
   
    if(flag===0){
        menucard.style.display="flex"
        flag=1
    }else{
        menucard.style.display="none"
        flag=0
    }
})