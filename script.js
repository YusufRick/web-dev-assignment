
let  scrollContainer = document.querySelector(".row");
let backbtn = document.getElementById("backbutton");
let nextbtn = document.getElementById("nextbutton");

scrollContainer.addEventListener('wheel', (evt)=>{

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

})

nextbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft +=150;

});

backbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=150;
})
;