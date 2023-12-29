function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("ruc").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("ciudad").selectedIndex = 0;
    document.getElementById("distrito").selectedIndex = 0;
    document.getElementById("opcion1").checked = false;
    document.getElementById("opcion2").checked = false;
    document.getElementById("opcion3").checked = false;
    document.getElementById("opcion4").checked = false;
    document.getElementById("opcion5").checked = false;
    document.getElementById("opcion6").checked = false;
}

const distritosPorCiudad = {
    Ancash: ["Pallasca", "Corongo", "Sihuas", "Santa", "Huaylas", "Pomabamba", "Casma", "Yungay", "Marisca Luzurriaga", "Carhuaz", "Asuncion", "Fitzcarrald", "Raymondi", "Huaraz", "Huari", "Aija", "Huarmey", "Recuay", "Huari", "Bolognesi", "Ocros"],

    Apurimac: ["Chincheros", "Andahuaylas", "Abancay", "Aymaraes", "Antabamba", "Grau", "Cotobambas"],

    Arequipa: ["Arequipa", "Camaná", "Caravelí", "Castilla", "Caylloma", "Condesuyos", "Islay", "Unión"],

    Ayacucho: ["Cangallo", "Huamanga", "Huanca Sancos", "La Mar", "Lucanas", "Parinacochas", "Paucar del Sara Sara", "Sucre", "Víctor Fajardo", "Vilcas Huamán"],

    Cajamarca: ["Cajabamba", "Cajamarca", "Celendín", "Chota", "Contumazá", "Cutervo", "Hualgayoc", "Jaén", "San Ignacio", "San Marcos", "San Miguel", "San Pablo", "Santa Cruz"],

    Callao: ["Distrito del Callao"],
    Cusco: ["Acomayo", "Anta", "Calca", "Canas", "Canchis", "Chumbivilcas", "Cusco", "Espinar", "La Convención", "Paruro", "Paucartambo", "Quispicanchi", "Urubamba"],

    Huancavelica: ["Acobamba", "Angaraes", "Castrovirreyna", "Churcampa", "Huancavelica", "Huaytará", "Tayacaja",],

    Huanuco: ["Ambo", "Dos de Mayo", "Huacaybamba", "Huamalíes", "Huánuco", "Lauricocha", "Marañón", "Pachitea", "Puerto Inca", "Yarowilca"],

    Ica: ["Chincha", "Ica", "Nazca", "Palpa", "Pisco"],

    Junin: ["Chanchamayo", "Concepción", "Huancayo", "Jauja", "Junín", "Satipo", "Tarma", "Yauli"],

    LaLibertad: ["Ascope", "Bolívar", "Chepén", "Gran Chimú", "Julcán", "Otuzco", "Pacasmayo", "Pataz", "Sánchez Carrión", "Santiago de Chuco", "Trujillo (capital departamental)", "Virú"],


    Lambayeque: ["Chiclayo (capital departamental)", "Ferreñafe", "Lambayeque"],

    Lima: ["Áncon", "Carabayllo", "Comas", "Independencia", "Los Olivos", "Puente Piedra", "San Martín de Porres", "Santa Rosa", "Barranco", "Breña", "Jesús María", "La Victoria", "Lima", "Lince", "Madgalena", "Miraflores", "Pueblo Libre", "Rimac", "San Borja", "San Isidro", "San Miguel", "Santiago de Surco", "Surquillo", "Ate", "Cineguilla", "EL Agustino", "La Molina", "San Juan de Lurigancho", "San Luis", "Santa Anita", "Chorrillos", "Lurín", "Punta Hermosa", "Punta Negra", "San Juan de Miraflores", "Villa El Salvador", "Villa María del Triunfo"],

    Loreto: ["Alto Amazonas", "Datem del Marañón", "Loreto", "Mariscal Ramón Castilla", "Maynas", "Putumayo", "Requena", "Ucayali"],

    MadreDeDios: ["Tambopata", "Manu", "Tahuamanu"],

    Moquegua: ["General Sánchez Cerro", "Ilo", "Mariscal Nieto"],

    Pasco: ["Oxapampa", "Pasco (capital departamental)", "Daniel Alcides Carrión"],

    Piura: ["Ayabaca", "Huancabamba", "Morropón", "Paita", "Piura (capital departamental)", "Sechura", "Sullana", "Talara"],

    Puno: ["Azángaro", "Carabaya", "Chucuito", "El Collao", "Huancané", "Lampa", "Melgar", "Moho", "Puno (capital departamental)", "San Antonio de Putina", "San Román", "Sandia", "Yunguyo"],

    SanMartin: ["Bellavista", "El Dorado", "Huallaga", "Lamas", "Mariscal Cáceres", "Moyobamba (capital departamental)", "Picota", "Rioja", "San Martín", "Tocache"],

    Tacna: ["Candarave", "Jorge Basadre", "Tarata", "Tacna (capital departamental)"],

    Tumbes: ["Contralmirante Villar", "Tumbes (capital departamental)", "Zarumilla"],

    Ucayali: ["Atalaya", "Coronel Portillo", "Padre Abad", "Purús"]

};

function actualizarDistritos() {
    var ciudadSeleccionada = document.getElementById("ciudad").value;
    var distritoSelect = document.getElementById("distrito");

    distritoSelect.innerHTML = "";

    distritosPorCiudad[ciudadSeleccionada].forEach(distrito => {
        var option = document.createElement("option");
        option.value = distrito;
        option.text = distrito;
        distritoSelect.appendChild(option);
    });
}

window.onload = function () {
    actualizarDistritos();
};

//MANDA MENSAJE AL WHATSAPP

function enviarAWhatsApp() {
    const baseURL = "https://wa.me/51933296787";

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const ruc = document.getElementById('ruc').value;
    const telefono = document.getElementById('telefono').value;
    const ciudad = document.getElementById('ciudad').value;
    const distrito = document.getElementById('distrito').value;

    const opciones = [];
    if (document.getElementById('opcion1').checked) opciones.push('Almacenamiento de Residuos');
    if (document.getElementById('opcion2').checked) opciones.push('Barrido');
    if (document.getElementById('opcion3').checked) opciones.push('Recolección y Transporte');
    if (document.getElementById('opcion4').checked) opciones.push('Transferencia');
    if (document.getElementById('opcion5').checked) opciones.push('Reaprovechamiento');
    if (document.getElementById('opcion6').checked) opciones.push('Disposición Final');

    const mensaje = `Nombre: ${nombre} ${apellido}\nCorreo: ${correo}\nRUC: ${ruc}\nTeléfono: ${telefono}\nCiudad: ${ciudad}\nDistrito: ${distrito}\n${opciones.join('\n')}`;


    window.location.href = `${baseURL}?text=${encodeURIComponent(mensaje)}`;
}

//BUSCADOR
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
        case 'inicio':
            window.location.href = 'index.html';
            break;
        default:
            alert('No se encontró la página relacionada con tu búsqueda.');
    }
});

