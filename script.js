document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    switch (searchTerm) {
        case 'nosotros':
            window.location.href = 'nosotros.html';
            break;
        case 'servicios':
            window.location.href = 'servicios.html';
            break;
        case 'contacto':
            window.location.href = 'contacto.html';
            break;
        default:
            alert('No se encontró la página relacionada con tu búsqueda.');
    }
});
 