var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(classname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(classname).classList.add("active-tab");


}
// let icon = document.querySelector("#sidemenu");
//  function closemenu(){
//     icon.style.right = "0";
//  }
//  function openmenu(){
//     icon.style.right = "-200px";
//  }
// let sidemenu = document.getElementById("sidemenu");
// function closemenu(){
//     sidemenu.style.right="0px";
// }
// function openmenu(){
//     sidemenu.style.right="-200px";
// }
let closeslide = document.querySelector(".icon1");
let openslide = document.querySelector(".icon2");
let slide = document.getElementById("slide");

closeslide.addEventListener("click", () => {
    slide.style.right = "-200px";
});

openslide.addEventListener("click", () => {
    slide.style.right = "0px";
});
// darkmode js 
let loder = document.querySelector(".loder");
window.addEventListener("load",()=>{
    loder.style.display = "none";
})