const containers = document.querySelectorAll('.grid__all > div');

containers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const imgSrc = container.querySelector('img').getAttribute('src');
        const apresentacao = document.querySelector('.apresentacao__2');
        apresentacao.style.backgroundImage = `linear-gradient(rgba(15, 15, 15, 0.95), rgba(15, 15, 15, 0.9)), url(${imgSrc})`;
        apresentacao.style.backgroundRepeat = "no-repeat";
        apresentacao.style.backgroundSize = "cover";
    });
});