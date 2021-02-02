let imovel;

window.onload = function () {
    cliente = sessionStorage.getItem('cliente');
    imovel = sessionStorage.getItem('casa');
}

async function submit() {

    try {
        let body = {
            visita: {
                data: document.getElementById('data').value,
                hora: document.getElementById('hora').value,
                imId: imovel,
            },
            cliente: {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                dataNascimento: document.getElementById('dNascimento').value,
                nif: document.getElementById('nif').value,
            }
        }

        let result = await $.ajax({
            url: '/api/visitas',
            method: 'post',
            dataType: 'json',
            data: JSON.stringify(body),
            contentType: 'application/json'
        });

        if (result) {
            alert('Visita marcada com sucesso!');
            window.location = "Lista.html";
        }
        else {
            alert('Data já está marcada.')
        }
    }
    catch (err) {
        console.log(err);
    }


}