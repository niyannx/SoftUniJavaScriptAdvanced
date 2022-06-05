function attachGradientEvents() {
    const html = {
        gradient: document.getElementById("gradient"),
        result: document.getElementById("result")
    };

    html.gradient.addEventListener('mousemove', onHover);

    function onHover(event) {
        let percentage = Math.floor((event.offsetX / html.gradient.clientWidth) * 100);

        html.result.textContent = percentage + '%';
    }
}