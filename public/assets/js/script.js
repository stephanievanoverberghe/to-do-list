// OUVRIR L'ACCORDEON

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrowIcon = this.querySelector('.arrow-icon img');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            arrowIcon.style.transform = 'rotate(180deg)'; // Pour faire pivoter l'icône de flèche
        } else {
            content.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        }
    });
});