var word_para = "Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, cell phone, or calculator. It can be distinguished from other means of text input, such as handwriting and speech recognition. Text can be in the form of letters, numbers and other symbols. The world's first typist was Lillian Sholes from Wisconsin, the daughter of Christopher Sholes, who invented the first practical typewriter. Words per minute is a measure of typing speed, commonly used in recruitment. For the purposes of WPM measurement a word is standardized to five characters or keystrokes. Therefore, brown counts as one word, but mozzarella counts as two. Touch typing is a style of typing. Although the phrase refers to typing without using the sense of sight to find the keys—specifically, a touch typist will know their location on the keyboard through muscle memory—the term is often used to refer to a specific form of touch typing that involves placing the eight fingers in a horizontal row along the middle of the keyboard and having them reach for specific other keys. Both two-handed touch typing and one-handed touch typing are possible. A touch typist does not need to move the sight between the keyboard and other areas that require attention. This increases productivity and reduces the number of errors. Touch typing helps improve posture and reduce neck pain by keeping one's eyes focused on the display and avoiding a constant need to glance at the keyboard. With the introduction of computers and word-processors, there has been a change in how text-entry is performed. In the past, using a typewriter, speed was measured with a stopwatch and errors were tallied by hand. With the current technology, document preparation is more about using word-processors as a composition aid, changing the meaning of error rate and how it is measured. Research performed by R. William Soukoreff and I. Scott MacKenzie, has led to a discovery of the application of a well-known algorithm.";

var keyboard_keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

var word_list = word_para.split(" ");
var typing_area = document.getElementById('typing-area');

var timer_text = document.getElementById('timer-text');
var typing_time = parseInt(localStorage.getItem("typingTime"));
var time_left = typing_time * 60;
var initial_min = parseInt(time_left / 60);

timer_text.innerHTML = `Time Left: ${typing_time}:00`;

function countDown() {
    if (time_left != 0) {
        time_left--;
        var min = parseInt(time_left / 60);
        if (time_left % 60 < 10) {
            timer_text.innerHTML = `Time Left: ${min}:0${time_left % 60}`;
        }
        else {
            timer_text.innerHTML = `Time Left: ${min}:${time_left % 60}`;
        }
    }
    else {
        clearInterval(timer);

        var correct_word_count = 0;
        var incorrect_word_count = 0;
        for (var i = 0; i < input_array.length; i++) {
            if (input_array[i] == word_list[i]) {
                correct_word_count++;
            }
            else {
                incorrect_word_count++;
            }
        }

        var word_count = input_array.length - 1;
        var typing_speed = parseInt(correct_word_count) / initial_min;
        var accuracy = (correct_word_count / word_count) * 100;
        // window.open('result.html', '_self');
        localStorage.setItem("typingSpeed", typing_speed);
        localStorage.setItem("accuracy", accuracy.toFixed(2));
        localStorage.setItem("correctWord", correct_word_count);
        localStorage.setItem("incorrectWord", incorrect_word_count);
        localStorage.setItem("totalTime", typing_time);

        location.replace('result.html');
    }

}
var timer = setInterval(countDown, 1000);

var word_count = 0;
var correct_word = 0;
var incorrect_word = 0;

for (var i = 0; i < word_list.length; i++) {
    var span1 = document.createElement('span');
    var text1 = document.createTextNode(word_list[i]);

    var span2 = document.createElement('span');
    var text2 = document.createTextNode(" ");

    span1.id = `span${i}`;
    span1.className = "typing-area-span";
    span1.appendChild(text1);
    typing_area.appendChild(span1);
    span2.appendChild(text2);
    typing_area.appendChild(span2);
}

var user_input = document.getElementById('user-input');
user_input.addEventListener('keypress', function (event) {
    if (event.key == " ") {
        input_array = user_input.value.split(" ");
        word_count = input_array.length - 1;
        if (input_array[word_count] == word_list[word_count]) {
            var correct_span = document.getElementById(`span${word_count}`);
            correct_span.style.color = '#00BE43';
            correct_span.style.fontWeight = 'bold';
        }
        else {
            var correct_span = document.getElementById(`span${word_count}`);
            correct_span.style.color = 'red';
            correct_span.style.fontWeight = 'bold';
        }
        word_count++;
    }
});

function mobile_keyboard_func() {
    input_array = user_input.value.split(" ");
    for (var j = 0; j < input_array.length - 1; j++) {

        if (input_array[j] == word_list[j]) {
            var correct_span = document.getElementById(`span${j}`);
            correct_span.style.color = '#00BE43';
            correct_span.style.fontWeight = 'bold';
        }
        else {
            var correct_span = document.getElementById(`span${j}`);
            correct_span.style.color = 'red';
            correct_span.style.fontWeight = 'bold';
        }
    }
}

setInterval(mobile_keyboard_func, 1000);


// Responsive Icon Working
var hamburger_icon = document.getElementById('hamburger-icon');
var nav_ul = document.querySelector('nav ul');
var toogle_state = false;
hamburger_icon.addEventListener('click', function () {
    if (toogle_state == false) {
        nav_ul.style.display = "flex";
        toogle_state = true;
    }
    else {
        nav_ul.style.display = "none";
        toogle_state = false;
    }
});