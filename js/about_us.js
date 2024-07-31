var hamburger_icon = document.getElementById('hamburger-icon');
var nav_ul = document.querySelector('nav ul');
var toogle_state = false;
hamburger_icon.addEventListener('click', function(){
    if(toogle_state==false){
        nav_ul.style.display = "flex";
        toogle_state = true;
    }
    else{
        nav_ul.style.display = "none";
        toogle_state = false;
    }
});