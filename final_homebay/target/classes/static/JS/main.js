/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

async function login() {
    let body = {
        username: document.getElementById('uname').value
    };

    let result = await $.ajax({
        url: '/api/administradores/login',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify(body),
        contentType: 'application/json'
    });

    if (result == true) {
        sessionStorage.setItem('admin', true);
        window.location = '/Lista.html';
    }
    else alert('Username errado');

}