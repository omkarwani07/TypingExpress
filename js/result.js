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

var speed_text = document.getElementById('speed');
var accuracy_text = document.getElementById('accuracy');
var correct_word_text = document.getElementById('correct-words');
var incorrect_word_text = document.getElementById('incorrect-words');
var total_time_text = document.getElementById('total-time');

speed_text.innerHTML = localStorage.getItem("typingSpeed") + " WPM";
accuracy_text.innerHTML = localStorage.getItem("accuracy") + "%";
correct_word_text.innerHTML = localStorage.getItem("correctWord");
incorrect_word_text.innerHTML = localStorage.getItem("incorrectWord");
total_time_text.innerHTML = localStorage.getItem("totalTime");

