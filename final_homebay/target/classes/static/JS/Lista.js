window.onload = function () {
    loadCasas();
}

async function loadCasas() {
    try {
        let casas = await $.ajax({
            url: "/api/casas",
            method: "get",
            dataType: "json"
        });
        showCasas(casas);

    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}

function showCasas(casas) {
    let elemMain = document.getElementById("main");
    let html = "";
    for (let casa of casas) {
        html += "<section>" +
            "<h3>" + casa.nome + "</h3>" +
            "<p> Tipologia: " + casa.tipologia + "</p>" +
            "<button onclick='reservar(" + casa.id + ")'>Reservar</button>";
        if (sessionStorage.getItem('admin') == 'true') {
            html += "<button onclick='editarCasa(" + casa.id + ")'>Editar</button>";
        }
        html += "</section>";
    }
    elemMain.innerHTML = html;
}

function reservar(casaId) {
    sessionStorage.setItem("casa", casaId);
    window.location = '/Reservas.html';
}

function editarCasa(casaId) {
    sessionStorage.setItem("casa", casaId);
    window.location = '/Editar.html';
}