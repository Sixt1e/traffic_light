const TRAFFIC_LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const CLASSES_LIGHTS = {
    [TRAFFIC_LIGHTS.red]: 'light_red',
    [TRAFFIC_LIGHTS.yellow]: 'light_yellow',
    [TRAFFIC_LIGHTS.green]: 'light_green'
};

const LIGHTS_CHANGE = {
    [TRAFFIC_LIGHTS.red]: TRAFFIC_LIGHTS.yellow, 
    [TRAFFIC_LIGHTS.yellow]: TRAFFIC_LIGHTS.green,
    [TRAFFIC_LIGHTS.green]: TRAFFIC_LIGHTS.red
};

let currentLight = TRAFFIC_LIGHTS.red;

function switchLight(node) {
    const currentClass = CLASSES_LIGHTS[currentLight];
    const nextColor = LIGHTS_CHANGE[currentLight];
    const nextClass = CLASSES_LIGHTS[nextColor];

    currentLight = LIGHTS_CHANGE[currentLight];
    node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
    node.classList.add(CLASSES_LIGHTS[currentLight]);
}