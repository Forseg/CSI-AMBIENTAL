//INICIO DE FUNCION DE ACTUALIZACION MISION
// Función para actualizar el tiempo cada minuto para la tarjeta "Mision"

function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('lastUpdatedMision');
    const currentTime = new Date();
    const minutesAgo = Math.floor((currentTime - lastUpdatedTime) / 60000);

    lastUpdatedElement.textContent = `Actualizado hace ${minutesAgo} minutos`;

   
    localStorage.setItem('lastUpdatedTime', currentTime.getTime());
}


let lastUpdatedTime = localStorage.getItem('lastUpdatedTime');
if (!lastUpdatedTime) {
    lastUpdatedTime = new Date().getTime();
}

setInterval(updateLastUpdated, 60000);

//-------------------------------------------------------------------------------------------------
//INICIO DE FUNCION DE ACTUALIZACION 2 VALORES 


function updateLastUpdatedValores() {
    const lastUpdatedElement = document.getElementById('lastUpdatedValores');
    const currentTime = new Date();
    const minutesAgo = Math.floor((currentTime - lastUpdatedTimeValores) / 60000);

    lastUpdatedElement.textContent = `Actualizado hace ${minutesAgo} minutos`;


    localStorage.setItem('lastUpdatedTimeValores', currentTime.getTime());
}


let lastUpdatedTimeValores = localStorage.getItem('lastUpdatedTimeValores');
if (!lastUpdatedTimeValores) {
    lastUpdatedTimeValores = new Date().getTime();
}

setInterval(updateLastUpdatedValores, 60000);

//----------------------------------------------------------------
//INICIO DE FUNCION DE ACTUALIZACION 3 VISION
// Función para actualizar el tiempo cada minuto para la tarjeta "Vision"

function updateLastUpdatedVisión() {
    const lastUpdatedElement = document.getElementById('lastUpdatedVision');
    const currentTime = new Date();
    const minutesAgo = Math.floor((currentTime - lastUpdatedTimeVision) / 60000);

    lastUpdatedElement.textContent = `Actualizado hace ${minutesAgo} minutos`;

    localStorage.setItem('lastUpdatedTimeVision', currentTime.getTime());
}

let lastUpdatedTimeVision = localStorage.getItem('lastUpdatedVision');
if (!lastUpdatedTimeVision) {
    lastUpdatedTimeVision = new Date().getTime();
}

setInterval(updateLastUpdatedVisión, 60000);

//----------------------------------------------------------------
//INICIO DE FUNCION DE ACTUALIZACION 4 Objetivos
// Función para actualizar el tiempo cada minuto para la tarjeta "Objetivos"

function updateLastUpdatedObjetivos() {
    const lastUpdatedElement = document.getElementById('lastUpdatedObjetivos');
    const currentTime = new Date();
    const minutesAgo = Math.floor((currentTime - lastUpdatedTimeObjetivos) / 60000);

    lastUpdatedElement.textContent = `Actualizado hace ${minutesAgo} minutos`;

    localStorage.setItem('lastUpdatedObjetivos', currentTime.getTime());
}

let lastUpdatedTimeObjetivos = localStorage.getItem('lastUpdatedObjetivos');
if (!lastUpdatedTimeObjetivos){
    lastUpdatedTimeObjetivos = new Date().getTime();
}

setInterval(updateLastUpdatedObjetivos, 60000)

//BUSQUEDA
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    switch (searchTerm) {
        case 'inicio':
            window.location.href = 'index.html';
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
