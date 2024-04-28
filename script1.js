var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}


function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
      let currentDisplay = '';
       document.querySelector(`#display`).value = currentDisplay;
        let sci_curr_dis = '';
        document.querySelector(`#screen`).value = sci_curr_dis;

        // handles the calculators by buttons of simple button and scientific button
        let first_button = document.querySelector(`.first_button`);
        let normal_cal = document.querySelector(`#calculator`);
        let sci_cal = document.querySelector(`#scientific_calculator`);
        let doing_msg =  document.querySelector(`.para_button`);

        // Onclick event handler -- where click is event listener
        first_button.addEventListener('click',()=>{
            normal_cal.style.display = 'block'; 
            doing_msg.style.cssText = "text-align: left; text-shadow: 0px 0px 4px red; font-size: 40px;";
            doing_msg.innerText = "This is Your Simple Calculator !";
            sci_cal.style.display = "none";
            first_button.innerText ="Normal button";


        });

        // OnDblClick handler -- where dblclick is event listener
        first_button.addEventListener('dblclick',()=>{
              normal_cal.style.display = "none";
            sci_cal.style.display = "block";
            doing_msg.style.cssText = "text-align: right; text-shadow: 0px 0px 2px green; font-size: 40px;";
            doing_msg.innerText = "And Here is Your Scientific Calculator !";
            first_button.innerText = "Scientific button";
            first_button.style.cssText = " text-shadow: 0px 0px 5px pink;"
        });
