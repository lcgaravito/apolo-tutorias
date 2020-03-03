"use strict";
//Fetch to get info from the server in /categorias
fetch('/categorias')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        //Add information to the HTML 
        let result = '';
        data.forEach((category) => {
            result += `<a class="btn btn-outline-primary btn-lg" href="/disponibles/${category}" role="button">${category}</a>`;
        });
        document.getElementById('categories').innerHTML = result;
    });
