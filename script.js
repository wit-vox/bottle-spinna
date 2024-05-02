
function spinBottle() {
    const bottle = document.getElementById('bottle');
    let randomSpin = Math.floor(Math.random() * 360) + 1440; // 1440 degrees ensures it spins at least 4 times
    bottle.style.transform = `rotate(${randomSpin}deg)`;
}
