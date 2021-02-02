let casa;

window.onload = function () {
    casa = sessionStorage.getItem('casa');
    populateFields();
}

async function populateFields() {
    let res = await $.ajax({
        url: "/api/casas/" + casa,
        method: "get",
        dataType: "json"
    });
    document.getElementById('nome').value = res.nome;
    document.getElementById('area').value = res.area;
    document.getElementById('tipologia').value = res.tipologia;
    document.getElementById('preco').value = res.preco;
    document.getElementById('mRua').value = res.mRua;
    document.getElementById('mNumero').value = res.mNumero;
    document.getElementById('cpostal3').value = res.mCPostal3;
    document.getElementById('cpostal4').value = res.mCPostal4;
    document.getElementById('descricao').value = res.descricao;
}

async function submit() {
    let body = {
        id: casa,
        nome: document.getElementById('nome').value,
        area: document.getElementById('area').value,
        tipologia: document.getElementById('tipologia').value,
        preco: document.getElementById('preco').value,
        mRua: document.getElementById('mRua').value,
        mNumero: document.getElementById('mNumero').value,
        mCPostal3: document.getElementById('cpostal3').value,
        mCPostal4: document.getElementById('cpostal4').value,
        descricao: document.getElementById('descricao').value
    }

    try {
        let result = await $.ajax({
            url: '/api/casas',
            method: 'put',
            dataType: 'json',
            data: JSON.stringify(body),
            contentType: 'application/json'
        });
        alert("Casa atualizada com sucesso");
    }
    catch (err) {
        alert("Algo correu mal")
    }
}