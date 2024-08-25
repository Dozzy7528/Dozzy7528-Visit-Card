document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const body = document.body;

    // Вычисляем цвета на основе положения мыши
    const red = Math.floor(x * 2 * 255);
    const green = Math.floor(y * 2 * 255);
    const blue = Math.floor((x + y) / 3 * 255);

    // Устанавливаем радиальный градиент как фон
    body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgb(${red}, ${green}, ${blue}), rgb(${255 - red}, ${255 - green}, ${255 - blue}))`;
});
