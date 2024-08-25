document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const bgColor = `rgba(${Math.floor(x * 255)}, ${Math.floor(y * 255)}, 255, 0.1)`;
    document.body.style.background = bgColor;
});
