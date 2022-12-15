const btn_change = document.getElementById('change_color_btn');
const trafficLight = document.querySelector('.light');
const time_btn = document.querySelector('.time_btn');

let change_light = function() {
initLight(trafficLight);
btn_change.addEventListener('click', function() {
    switchLight(trafficLight);
});
};

change_light();


let time = time_btn.addEventListener('click', function() {
    let t = setInterval(function() {
        switchLight(trafficLight);
    }, 2000);
    time_btn.classList.add('stop_btn');
    time_btn.innerHTML = `Stop`;

    time_btn.addEventListener('dblclick', function() {
        clearInterval(t);
        time_btn.classList.remove('stop_btn')
        time_btn.innerHTML = `Start timer`
    },1);
    
});

