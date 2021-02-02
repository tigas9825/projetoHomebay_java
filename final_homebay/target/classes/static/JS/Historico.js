window.onload = function () {
    loadVisitas();
}

async function loadVisitas() {
    try {
        let visitas = await $.ajax({
            url: "/api/visitas",
            method: "get",
            dataType: "json"
        });
        showVisitas(visitas);

    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}

function showVisitas(visitas) {
    let elemMain = document.getElementById("main");
    let html = "";
    for (let visita of visitas) {
        html += "<section>" +
            "<p>Casa: " + visita.nome + "</p>" +
            "<p> Data: " + visita.data + " " + visita.hora + "</p>" +
            "<p>" + visita.c_nome + "</p></section>";
    }
    elemMain.innerHTML = html;
}