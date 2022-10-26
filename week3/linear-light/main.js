document.getElementById('switch').addEventListener('change', onSwitch.bind(this));
var count = 1;

function onSwitch(event) {
    const Light = document.getElementById('light');
    if (event.target.checked) {
        Light.style.filter = `drop-shadow(0px 0px 5px rgba(255, 255, 0, ${count * 20 + '%'}))`;
        document.getElementById('current-light').innerText = `當前亮度：${count * 20}%`;
        count = count + 1 > 5 ? 1 : count + 1;
    } else {
        Light.style.filter = 'none';
    }
}