document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    let body = document.querySelector('body');
    body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #ff0066, #0d0d0d)`;
});
