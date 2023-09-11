let right_menu_icon=document.getElementById("menu-button");
right_menu_icon.addEventListener("click",()=>{
    let right_menu_list=document.querySelector(".mobile-right-menu");
    right_menu_list.style.display="block";
    
});
let right_menu_close=document.querySelector(".ri-close-fill");
right_menu_close.addEventListener("click",(event)=>{
    let right_menu_list=document.querySelector(".mobile-right-menu");
    right_menu_list.style.display="none";
   
})