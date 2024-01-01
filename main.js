(function () {
  let setMenu = function () {
    // variables
    let burgerMenu = document.querySelector(".burger");
    let navBar = document.querySelector("nav");
    let navBarStatus = false;
    if (navBar.style.left === "") {
      burgerMenu.addEventListener("click", () => {
        console.info(burgerMenu.classList);
        if (navBarStatus) {
          navBarStatus = false;
          navBar.removeAttribute("style");
		  burgerMenu.setAttribute("class", "burger");
        } else {
          navBarStatus = true;
          navBar.style.left = "0px";
          burgerMenu.setAttribute("class", "burger changeBurger");
        }
      });
    } else {
      navBarStatus = false;
      navBar.removeAttribute("style");
    }
  };
  setMenu();
  // resize
  window.addEventListener("resize", () => setMenu());
})();

let  scrollContainer = document.querySelector(".row");
let backbtn = document.getElementById("backbutton");
let nextbtn = document.getElementById("nextbutton");

scrollContainer.addEventListener('wheel', (evt)=>{

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

})

nextbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft +=300;

});

backbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=300;
});
